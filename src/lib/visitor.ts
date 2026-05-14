const VISITOR_KEY = 'portfolio_visitor_count';
const VISITED_KEY = 'portfolio_has_visited';

export function getVisitorCount(): number {
  const stored = localStorage.getItem(VISITOR_KEY);
  return stored ? parseInt(stored, 10) : 0;
}

export function incrementVisitorCount(): number {
  const hasVisited = localStorage.getItem(VISITED_KEY);
  if (hasVisited) return getVisitorCount();

  const current = getVisitorCount() + 1;
  localStorage.setItem(VISITOR_KEY, current.toString());
  localStorage.setItem(VISITED_KEY, 'true');
  return current;
}

export function getUniqueVisitorCount(): number {
  return getVisitorCount();
}