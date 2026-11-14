//    Create an array styles with items “Jazz” and “Blues”.
//    Append “Rock-n-Roll” to the end.
//    Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
//    Strip off the first value of the array and show it.
//    Prepend Rap and Reggae to the array.

const musicStyles = ["Jazz", "Blues"];
musicStyles.push("Rock-n-Roll");
musicStyles[Math.trunc(musicStyles.length / 2)] = "Classics";
console.log(musicStyles.shift());
musicStyles.unshift("Rap", "Reggae");
console.log(musicStyles);


// https://javascript.info/task/maximal-subarray
//

function getMaxSubSum(arr) {
  // Mejor suma encontrada hasta ahora (arranca en 0: si todo es negativo, devuelve 0)
  let maxSum = 0;
  // Suma del subarray contiguo que vengo armando
  let partialSum = 0;

  for (const item of arr) {
    // Sumo el item actual al subarray
    partialSum += item;
    // Si superé la mejor suma, la guardo
    maxSum = Math.max(maxSum, partialSum);
    // Si la suma quedó negativa, no me sirve arrastrarla: empiezo de nuevo
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}


console.log(getMaxSubSum([-1, 2, 3, -9]));      // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9]));   // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));  // 11
console.log(getMaxSubSum([-2, -1, 1, 2]));      // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3]));           // 6
console.log(getMaxSubSum([-1, -2, -3]));        // 0
