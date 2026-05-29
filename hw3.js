function checkProbabilityTheory(count) {
  let odds = 0;
  let evens = 0;

  for (let i = 0; i < count; i++) {
    let num = Math.floor(Math.random() * 901) + 100; // це те саме що Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    if (num % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }

  return `Кількість згенерованих чисел: ${count}\nПарних чисел: ${evens}\nНепарних чисел: ${odds}\nВідсоток парних: ${((evens / count) * 100).toFixed(1)} %\nВідсоток непарних: ${((odds / count) * 100).toFixed(1)}%`;
}

console.log(checkProbabilityTheory(1000)); // викликаємо функцію з аргументом 1000, що означає, що ми хочемо згенерувати 1000 випадкових чисел і перевірити їх на парність. Результати будуть виведені в консоль у вигляді форматованого рядка.
