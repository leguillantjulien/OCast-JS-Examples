export function getQueryString(param: string) {
  let search = new URLSearchParams(window.location.search);
  return search.get(param);
}