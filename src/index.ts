export function printNumbers(total: number) {
  for (let num = 1; num <= total; num++) {
    if (Number.isInteger(num / 3) && Number.isInteger(num / 5))
      console.log('People Power');
    else if (Number.isInteger(num / 3)) console.log('People');
    else if (Number.isInteger(num / 5)) console.log('Power');
    else console.log(num);
  }
}

printNumbers(100);
