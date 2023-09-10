const abc: Array<string> = ['a', 'b', 'c'];
type MapStringCallback = (item: string) => string; // TYPE FUNCTION

function mapString(
  array: Array<string>,
  callbackFn: MapStringCallback,
): Array<string> {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackFn(item));
  }

  return newArray;
}

console.log(mapString(abc, (item) => item.toUpperCase()));
