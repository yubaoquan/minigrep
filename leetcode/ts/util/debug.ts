export function debug(val: any, show = true) {
  if (show) console.info(val);
  return val;
}
