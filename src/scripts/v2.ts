const root = document.documentElement;
const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s as any) as T | null;
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => Array.from(el.querySelectorAll<T>(s as any)) as T[];

/* Mobile menu */
const btn = $<HTMLButtonElement>('[data-menu-btn]');
const setMenu = (open: boolean) => {
  root.classList.toggle('menu-open', open);
  btn?.setAttribute('aria-expanded', String(open));
  const l = $('[data-menu-label]');
  if (l) l.textContent = open ? 'Sluiten' : 'Menu';
};
btn?.addEventListener('click', () => setMenu(!root.classList.contains('menu-open')));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

/* Dropdown: hover on pointer devices, click and keyboard everywhere */
$$('[data-dd]').forEach((dd) => {
  const b = $<HTMLButtonElement>('.dd-btn', dd)!;
  let t: number | undefined;
  const set = (open: boolean) => { dd.classList.toggle('is-open', open); b.setAttribute('aria-expanded', String(open)); };
  b.addEventListener('click', () => set(!dd.classList.contains('is-open')));
  if (matchMedia('(hover: hover)').matches) {
    dd.addEventListener('pointerenter', () => { clearTimeout(t); set(true); });
    dd.addEventListener('pointerleave', () => { t = window.setTimeout(() => set(false), 180); });
  }
  dd.addEventListener('focusout', (e) => { if (!dd.contains(e.relatedTarget as Node)) set(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
});

/* Reveals: content enters once, in reading order */
const io = new IntersectionObserver(
  (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }),
  { rootMargin: '0px 0px -10% 0px' }
);
$$('.rv, .rv-img').forEach((el) => io.observe(el));

/* Opening hours: mark today */
const wd = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Brussels', weekday: 'short' }).format(new Date());
const d = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(wd);
$$(`[data-week] [data-day="${d}"]`).forEach((el) => el.classList.add('today'));

/* Treatment switch: keep the current treatment in view */
const sw = $('.tswitch');
const cur = sw?.querySelector<HTMLElement>('[aria-current="page"]');
if (sw && cur) sw.scrollLeft = cur.offsetLeft - (sw.clientWidth - cur.offsetWidth) / 2;

/* Contact form: validate, then hand off to the visitor's mail app */
$$<HTMLFormElement>('[data-form]').forEach((form) => {
  const done = form.parentElement!.querySelector<HTMLElement>('.done');
  const check = (f: HTMLInputElement) => { const ok = f.checkValidity(); f.closest('.field')!.classList.toggle('has-error', !ok); f.setAttribute('aria-invalid', String(!ok)); return ok; };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bad = $$<HTMLInputElement>('input, textarea', form).filter((f) => !check(f));
    if (bad.length) { bad[0].focus(); return; }
    const v = (n: string) => (form.elements.namedItem(n) as HTMLInputElement).value.trim();
    location.href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent('Vraag via de website')}&body=${encodeURIComponent(`${v('vraag')}\n\n${v('naam')}${v('telefoon') ? `\n${v('telefoon')}` : ''}`)}`;
    form.hidden = true;
    if (done) { done.hidden = false; done.focus(); }
  });
});
