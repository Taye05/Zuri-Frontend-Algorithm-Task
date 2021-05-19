// beginning of task one

function convertFahrToCelsius(celsius) {
  let celsiusToNumber = Number(celsius);
  let convertToCelsius = ((celsiusToNumber - 32) * 5) / 9;
  if (typeof celsius !== "number") {
    console.log(`${celsius} is not a number but a/an ${typeof celsius}`);
  }
  return convertToCelsius.toFixed(4);
}

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius({ temp: 0 }));
console.log(convertFahrToCelsius(32));

//end of task one

//beginning of task two

function checkYuGiOh(n) {
  function checkYuGiOhRecursive(n) {
    let results = [];
    if (n === 1) {
      return 1;
    } else {
      if (n % 3 === 0 && n % 5 === 0) {
        results.push("YuGiYuOh");
      } else if (n % 5 === 0) {
        results.push("Oh");
      } else if (n % 3 === 0) {
        results.push("Gi");
      } else if (n % 1 === 0) {
        results.push("Yu");
      } else if (typeof n !== "number") {
        console.log(`invalid parameter: "${n}" `);
      } else {
        results.push("" + n);
      }
      return results.concat(checkYuGiOhRecursive(n - 1));
    }
  }

  return checkYuGiOhRecursive(n).reverse();
}

console.log(checkYuGiOh(10));
console.log(checkYuGiOh(5));
console.log(checkYuGiOh("fizzbuzz is meh"));

//end of task two
