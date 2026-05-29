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

  console.log("Кількість згенерованих чисел: " + count);
  console.log("Парних чисел: " + evens);
  console.log("Не парних чисел: " + odds);
  console.log("Відсоток парних: " + ((evens / count) * 100).toFixed(1) + "%");
  console.log("Відсоток не парних: " + ((odds / count) * 100).toFixed(1) + "%");
}

checkProbabilityTheory(1000); // викликаємо функцію з аргументом 1000, що означає, що ми хочемо згенерувати 1000 випадкових чисел і перевірити їх на парність. Результати будуть виведені в консоль.
