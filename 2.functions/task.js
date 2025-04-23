// Задание 1
// функция которая будет вычислять минимальное, максимальное и среднее значение элементов массива.
function getArrayParams(...arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let avg = arr.reduce((acc, item) => acc + item, 0) / arr.length

  return { min: min, max: max, avg: Number(avg.toFixed(2)) }
}

// Задание 2
// функция суммирования элементов массива.
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0
  }
  return arr.reduce((acc, item) => acc + item, 0)
}

// функция вычисления разницы между максимальным и минимальным элементом.
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0
  }
  let max = arr[0]
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max - min
}

// функцию вычисления разницы сумм чётных и нечётных элементов.
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0
  }
  let sumEvenElement = 0
  let sumOddElement = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
    } else {
      sumOddElement += arr[i]
    }
  }
  return sumEvenElement - sumOddElement
}

// функцию которая будет вычислять среднее значение чётных элементов.
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0
  }
  let sumEvenElement = 0
  let countEvenElement = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
      countEvenElement++
    }
  }
  return sumEvenElement / countEvenElement
}

// Задание 3
// функция которая будет вычислять максимальное значение элементов массива.
function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0])
  for (let i = 0; i < arrOfArr.length; i++) {
    const checkArr = func(...arrOfArr[i])
    if (checkArr > maxWorkerResult) {
      maxWorkerResult = checkArr
    }
  }
  return maxWorkerResult
}