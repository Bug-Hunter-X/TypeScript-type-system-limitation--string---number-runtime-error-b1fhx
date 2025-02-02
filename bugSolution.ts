function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // This will work correctly

try {
  let result2 = add("1", 2); // This will throw an error
} catch (e) {
  console.error(e);
}
//Alternative solution: using type guards
function isNumber(x: any): x is number {
    return typeof x === 'number';
}
function addSafe(a: any, b: any): number{
    if(!isNumber(a) || !isNumber(b)){
        throw new Error('Parameters must be numbers');
    }
    return a+b;
}
let result3 = addSafe(1,2); //Correct
//let result4 = addSafe("1",2); //Error