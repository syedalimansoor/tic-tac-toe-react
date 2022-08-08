/** Perform a deep copy without copying functions */
export default function deepCopy(obj: object) {
  return JSON.parse(JSON.stringify(obj));
}
