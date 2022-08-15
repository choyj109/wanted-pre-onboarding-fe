export function setUser(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getUser(key) {
  return JSON.parse(localStorage.getItem(key));
}
