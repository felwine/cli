export default (string) => {
  return !string ? string : string.charAt(0).toUpperCase() + string.slice(1)
}
