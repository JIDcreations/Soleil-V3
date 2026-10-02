import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s as any) as T | null;
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => Array.from(el.querySelectorAll<T>(s as any)) as T[];

/* ---------- Page load: one orchestrated entrance ---------- */
const ready = () => requestAnimationFrame(() => root.classList.add('is-loaded'));
if (document.fonts?.ready) Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 700))]).then(ready);
else ready();

/* ---------- Smooth scroll ---------- */
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  $$<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      const target = id.length > 1 ? $(id) : null;
      if (!target) return;
      e.preventDefault();
      lenis!.scrollTo(target, { offset: -96 });
      history.replaceState(null, '', id);
    })
  );
}

/* ---------- Header: solid after the top, hides while reading down ---------- */
const header = $('[data-header]');
const dock = $('[data-dock]');
if (header) {
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const y = self.scroll();
      header.classList.toggle('is-scrolled', y > 24);
      const menuOpen = root.classList.contains('menu-open');
      const hide = !menuOpen && self.direction === 1 && y > 400;
      header.classList.toggle('is-hidden', hide);
      if (hide) $$('[data-dd].is-open').forEach((d) => $('.dd-btn', d)?.click());
      dock?.classList.toggle('is-on', y > window.innerHeight * 0.7);
    },
  });
}

/* ---------- Mobile menu ---------- */
const menuBtn = $<HTMLButtonElement>('[data-menu-btn]');
const sheet = $('[data-sheet]');
const setMenu = (open: boolean) => {
  root.classList.toggle('menu-open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
  const label = $('[data-menu-label]');
  if (label) label.textContent = open ? 'Sluiten' : 'Menu';
  header?.classList.remove('is-hidden');
  if (open) { lenis?.stop(); sheet?.querySelector('a')?.focus({ preventScroll: true }); }
  else lenis?.start();
};
menuBtn?.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && root.classList.contains('menu-open')) { setMenu(false); menuBtn?.focus(); }
});
window.matchMedia('(min-width: 901px)').addEventListener('change', (m) => m.matches && setMenu(false));

/* ---------- Behandelingen dropdown: hover on pointer devices, click and keyboard everywhere ---------- */
$$('[data-dd]').forEach((dd) => {
  const btn = $<HTMLButtonElement>('.dd-btn', dd)!;
  let t: number | undefined;
  const set = (open: boolean) => { dd.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', String(open)); };
  btn.addEventListener('click', () => set(!dd.classList.contains('is-open')));
  if (window.matchMedia('(hover: hover)').matches) {
    dd.addEventListener('pointerenter', () => { clearTimeout(t); set(true); });
    dd.addEventListener('pointerleave', () => { t = window.setTimeout(() => set(false), 160); });
  }
  dd.addEventListener('focusout', (e) => { if (!dd.contains(e.relatedTarget as Node)) set(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && dd.classList.contains('is-open')) { set(false); btn.focus(); } });
  document.addEventListener('click', (e) => { if (!dd.contains(e.target as Node)) set(false); });
});

/* ---------- Opening hours: live status in Brussels time ---------- */
type Day = { d: number; open?: string; close?: string; day: string };
const brussels = () => {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Brussels', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { d: wd, min: Number(get('hour')) * 60 + Number(get('minute')) };
};
const toMin = (s: string) => Number(s.slice(0, 2)) * 60 + Number(s.slice(3));
const fmt = (s: string) => s.replace(':00', 'u').replace(':', 'u').replace(/^0/, '');
function statusText(hours: Day[]) {
  const now = brussels();
  const today = hours.find((h) => h.d === now.d);
  if (today?.open && now.min >= toMin(today.open) && now.min < toMin(today.close!)) {
    return { open: true, text: `Nu open, tot ${fmt(today.close!)}` };
  }
  for (let i = 0; i < 8; i++) {
    const d = (now.d + i) % 7;
    const h = hours.find((x) => x.d === d);
    if (!h?.open) continue;
    if (i === 0 && now.min >= toMin(h.open)) continue;
    const when = i === 0 ? 'vandaag' : i === 1 ? 'morgen' : h.day.toLowerCase();
    return { open: false, text: `Gesloten, open ${when} om ${fmt(h.open)}` };
  }
  return { open: false, text: 'Gesloten' };
}
$$('[data-status]').forEach((el) => {
  const hours = JSON.parse(el.dataset.hours || '[]') as Day[];
  const s = statusText(hours);
  el.textContent = s.text;
  el.classList.toggle('is-open', s.open);
});
const today = brussels().d;
$$(`[data-week] [data-day="${today}"]`).forEach((el) => {
  el.classList.add('today');
  el.setAttribute('aria-current', 'date');
});

/* ---------- Image reveals ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
  { rootMargin: '0px 0px -12% 0px' }
);
$$('.reveal-img').forEach((el) => io.observe(el));

/* ---------- Statement: words ink in as you read ---------- */
$$('[data-ink]').forEach((el) => {
  const words = el.textContent!.trim().split(/\s+/);
  el.setAttribute('aria-label', el.textContent!.trim());
  el.innerHTML = words.map((w) => `<span class="w" aria-hidden="true">${w}</span>`).join(' ');
  if (reduce) return;
  const spans = $$('.w', el);
  ScrollTrigger.create({
    trigger: el,
    start: 'top 80%',
    end: 'bottom 45%',
    onUpdate: (self) => {
      const n = Math.round(self.progress * spans.length);
      spans.forEach((s, i) => s.classList.toggle('on', i < n));
    },
    onLeave: () => spans.forEach((s) => s.classList.add('on')),
  });
});
if (reduce) $$('.w').forEach((s) => s.classList.add('on'));

/* ---------- Method: pinned image follows the active step ---------- */
const method = $('[data-method]');
if (method) {
  const steps = $$('.step', method);
  const figs = $$('.method-stage figure', method);
  let active = -1;
  const set = (i: number) => {
    if (i === active) return;
    figs.forEach((f, j) => {
      f.classList.toggle('was-active', j === active);
      f.classList.toggle('is-active', j === i);
    });
    steps.forEach((s, j) => s.classList.toggle('is-active', j === i));
    active = i;
  };
  set(0);
  steps.forEach((s, i) =>
    ScrollTrigger.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onToggle: (self) => self.isActive && set(i) })
  );
}

/* ---------- Treatment index: the photo follows the pointer ---------- */
$$('[data-index]').forEach((list) => {
  const float = $('.index-float', list.parentElement!) as HTMLElement | null;
  if (!float || !window.matchMedia('(hover: hover) and (min-width: 861px)').matches) return;
  const img = $<HTMLImageElement>('img', float)!;
  const xTo = gsap.quickTo(float, 'x', { duration: 0.55, ease: 'power3' });
  const yTo = gsap.quickTo(float, 'y', { duration: 0.55, ease: 'power3' });
  list.addEventListener('pointermove', (e) => { xTo(e.clientX + 40); yTo(e.clientY); });
  $$<HTMLAnchorElement>('a[data-img]', list).forEach((a) => {
    a.addEventListener('pointerenter', (e) => {
      if (!float.classList.contains('is-on')) { gsap.set(float, { x: e.clientX + 40, y: e.clientY }); }
      img.src = a.dataset.img!;
      img.alt = '';
      float.classList.add('is-on');
    });
  });
  list.addEventListener('pointerleave', () => float.classList.remove('is-on'));
});

/* ---------- Gentle parallax on a few large photos ---------- */
if (!reduce) {
  $$('[data-parallax] img').forEach((img) =>
    gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
  );
}

/* ---------- Rail (arrangements) ---------- */
$$('[data-rail]').forEach((wrap) => {
  const rail = $('.rail', wrap)!;
  const prev = $<HTMLButtonElement>('[data-prev]', wrap);
  const next = $<HTMLButtonElement>('[data-next]', wrap);
  const step = () => (rail.firstElementChild as HTMLElement).offsetWidth;
  const update = () => {
    if (prev) prev.disabled = rail.scrollLeft < 8;
    if (next) next.disabled = rail.scrollLeft + rail.clientWidth > rail.scrollWidth - 8;
  };
  prev?.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
  rail.addEventListener('scroll', update, { passive: true });
  update();
});

/* ---------- Tabs ---------- */
$$('[data-tabs]').forEach((wrap) => {
  const tabs = $$<HTMLButtonElement>('[role="tab"]', wrap);
  const local = wrap.hasAttribute('data-tabs-local');
  const select = (tab: HTMLButtonElement, focus = false, push = true) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls')!)!;
      panel.hidden = !on;
      panel.classList.toggle('is-in', on);
    });
    if (focus) tab.focus();
    if (push && !local) history.replaceState(null, '', `#${tab.dataset.hash}`);
    ScrollTrigger.refresh();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const k = e.key;
      if (k !== 'ArrowRight' && k !== 'ArrowLeft' && k !== 'Home' && k !== 'End') return;
      e.preventDefault();
      const n = k === 'Home' ? 0 : k === 'End' ? tabs.length - 1 : (i + (k === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      select(tabs[n], true);
    });
  });
  const fromHash = local ? undefined : tabs.find((t) => `#${t.dataset.hash}` === location.hash);
  select(fromHash ?? tabs[0], false, false);
});

/* ---------- Jump nav (tarieven) ---------- */
const jump = $('[data-jump]');
if (jump) {
  const links = $$<HTMLAnchorElement>('a', jump);
  const rail = $('ul', jump)!;
  const pairs = links.map((a) => ({ a, sec: $(a.getAttribute('href')!) })).filter((p) => p.sec);
  let current: HTMLAnchorElement | null = null;
  // Derive the active chip from positions on every update, so fast jumps never leave a stale chip.
  const sync = () => {
    const line = window.innerHeight * 0.45;
    let hit: HTMLAnchorElement | null = null;
    for (const p of pairs) if (p.sec!.getBoundingClientRect().top <= line) hit = p.a;
    if (hit === current) return;
    current = hit;
    links.forEach((l) => l.classList.toggle('is-active', l === hit));
    const left = hit ? rail.scrollLeft + hit.getBoundingClientRect().left - rail.getBoundingClientRect().left : 0;
    rail.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' });
  };
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: sync, onRefresh: sync });
  sync();
}

/* ---------- Contact form ---------- */
$$<HTMLFormElement>('[data-form]').forEach((form) => {
  const done = form.parentElement!.querySelector<HTMLElement>('.done');
  const check = (f: HTMLInputElement | HTMLTextAreaElement) => {
    const field = f.closest('.field')!;
    const ok = f.checkValidity();
    field.classList.toggle('has-error', !ok);
    f.setAttribute('aria-invalid', String(!ok));
    return ok;
  };
  $$<HTMLInputElement>('input, textarea', form).forEach((f) => f.addEventListener('blur', () => f.value && check(f)));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = $$<HTMLInputElement>('input, textarea', form);
    const bad = fields.filter((f) => !check(f));
    if (bad.length) { bad[0].focus(); return; }
    // No backend: hand the message to the visitor's mail app, never fake a sent state.
    const v = (n: string) => (form.elements.namedItem(n) as HTMLInputElement).value.trim();
    const body = `${v('vraag')}\n\n${v('naam')}${v('telefoon') ? `\n${v('telefoon')}` : ''}`;
    window.location.href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent('Vraag via de website')}&body=${encodeURIComponent(body)}`;
    form.hidden = true;
    if (done) { done.hidden = false; done.focus(); }
  });
});

window.addEventListener('load', () => ScrollTrigger.refresh());
