"use strict"
function solveEquation(a, b, c) {
  let arr = []
  // Вычисляем дискриминант
  const discriminant = b ** 2 - 4 * a * c

  if (discriminant > 0) {
    // Два действительных корня
    arr[0] = (-b + Math.sqrt(discriminant)) / (2 * a)
    arr[1] = (-b - Math.sqrt(discriminant)) / (2 * a)
  } else if (discriminant === 0) {
    // Один действительный корень 
    arr[0] = -b / (2 * a)
  }
  return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем процентную ставку из диапазона 0-100 в 0-1 и годовую в месячную
  const monthlyPercent = percent / 100 / 12

  // Рассчитываем тело кредита (сумма кредита минус первоначальный взнос)
  const loanBody = amount - contribution

  // Рассчитываем ежемесячный платеж по формуле
  const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)))

  // Рассчитываем общую сумму выплат
  const totalAmount = monthlyPayment * countMonths

  // Округляем результат до двух знаков после запятой и преобразуем к числу
  return Number(totalAmount.toFixed(2))
}