console.log('while');

// while
const data = ['angga', 'dheddy', 'hanna', 'bram', 'sofyan'];
let angka = 0;
let conditions = false;

// while (angka < data.length) {
//   console.log(data[angka]);
//   //   code here
//   angka++;
// }

// console.log(angka, 'diluar loop / hasil loop');

// do while

// do {
//   console.log('im here', angka);
//   angka++;
// } while (6 < 5);

// console.log(angka, 'do while');

function NevPos(input) {
  let positif = 1;
  let negatif = 0;
  if (input.length && typeof input !== 'string') {
    //   code utama
    for (let index = 0; index < input.length; index++) {
      if (typeof input[index] === 'string') {
        alert('value array tidak boleh string');
        return [];
      } else {
        if (input[index] > 0) {
          positif *= input[index];
        } else if (input[index] < 0) {
          negatif += input[index];
        }
      }
    }
    return [positif, negatif, 'Hasil'];
  } else {
    alert('salah');
    return [];
  }
}

// value falsy null, undefined, 0, NaN, isNaN, etc

if ([].length) {
} else {
}

console.log(NevPos([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]));
console.log(NevPos([3, -6, 8, 12, -25, -60, 45]));
console.log(NevPos([]));