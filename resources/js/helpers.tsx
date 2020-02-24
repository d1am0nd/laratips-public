export const idFromSlug = (slug: string) => parseInt(slug.split('-')[0]);
export const niceDate = (date: string) => {
  const [y, m, d] = date.split('T')[0].split('-');

  return `${m}/${d}/${y}`;
};
