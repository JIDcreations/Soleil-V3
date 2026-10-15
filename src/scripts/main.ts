const root = document.documentElement;
const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s as any) as T | null;
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => Array.from(el.querySelectorAll<T>(s as any)) as T[];

/* ---------- Header line + mobile booking dock ---------- */
const header = $('[data-header]');
const dock = $('[data-dock]');
const onScroll = () => {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 8);
  dock?.classList.toggle('is-on', y > window.innerHeight * 0.6);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Mobile menu ---------- */
const menuBtn = $<HTMLButtonElement>('[data-menu-btn]');
const sheet = $('[data-sheet]');
const setMenu = (open: boolean) => {
  root.classList.toggle('menu-open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
  const label = $('[data-menu-label]');
  if (label) label.textContent = open ? 'Sluiten' : 'Menu';
  if (open) sheet?.querySelector('a')?.focus({ preventScroll: true });
};
menuBtn?.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
sheet?.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) setMenu(false); });
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

/* ---------- Opening hours: mark today (Brussels time) ---------- */
const wd = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Brussels', weekday: 'short' }).format(new Date());
const today = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(wd);
$$(`[data-week] [data-day="${today}"]`).forEach((el) => { el.classList.add('today'); el.setAttribute('aria-current', 'date'); });

/* ---------- Calm fade-in ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
  { rootMargin: '0px 0px -8% 0px' }
);
$$('.fade').forEach((el) => io.observe(el));

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
