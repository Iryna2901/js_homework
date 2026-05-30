//This

let account = {
  balance: 3000,

  deposit(amount) {
    this.balance += amount;
  },

  withdraw(amount) {
    this.balance -= amount;
  },

  showBalance() {
    console.log(this.balance); //
  },
};

let friendAccount = {
  balance: 400,
}; // тут ми створюємо нову змінну friendAccount і присвоюємо їй посилання на об'єкт account. Це означає, що friendAccount і account вказують на один і той же об'єкт в пам'яті. Тому, коли ми викликаємо методи deposit або withdraw через friendAccount, вони змінюють баланс в тому ж об'єкті, на який посилається account. Таким чином, зміни, внесені через friendAccount, будуть відображатися при виклику showBalance через account, оскільки обидві змінні посилаються на один і той же об'єкт.

friendAccount.deposit = account.deposit;
friendAccount.withdraw = account.withdraw;
friendAccount.showBalance = account.showBalance;

account.deposit(10000);
//account.withdraw(1000);
account.showBalance(); // виведе 3700

//friendAccount.deposit(5000);
//friendAccount.showBalance(); // виведе 4700, оскільки friendAccount і account посилаються на один і той же об'єкт, тому зміни, внесені через friendAccount, відображаються при виклику showBalance через account.

// тобто This  - це ключове слово, яке вказує на поточний об'єкт, в якому виконується код. У цьому випадку, коли ми викликаємо методи deposit, withdraw або showBalance через friendAccount, this буде посилатися на об'єкт friendAccount. Оскільки friendAccount і account посилаються на один і той же об'єкт, this.balance буде відображати баланс цього об'єкта, який може бути змінений через будь-який з цих методів. Таким чином, this дозволяє нам працювати з властивостями та методами об'єкта, на який посилається змінна, яка викликає ці методи.
/*this.balance це те саме що friendAccount.balance або account.balance, оскільки обидві змінні посилаються на один і той же об'єкт, який має властивість balance. 
Коли ми викликаємо методи deposit, withdraw або showBalance через friendAccount, this буде посилатися на об'єкт friendAccount, і тому this.balance буде відображати баланс цього об'єкта. 
Оскільки friendAccount і account посилаються на один і той же об'єкт, зміни, внесені через будь-який з цих методів, будуть відображаться при виклику showBalance через account, 
оскільки вони працюють з одним і тим же об'єктом в пам'яті.*/
