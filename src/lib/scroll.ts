export function scrollToSection(href: string) {
  const id = href.startsWith('#') ? href.slice(1) : href;
  const element = document.getElementById(id);
  if (!element) return;

  const offset = 80;
  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({ top, behavior: 'smooth' });
}