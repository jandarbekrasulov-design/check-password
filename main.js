function checkPassword(password) {
  return new Promise((resolve, reject) => {
    if (password === '1234') {
      setTimeout(() => {
        resolve("Доступ открыт");
      }, 2000);
    } else {
      reject(new Error("Не верный"));
    }
  });
}

function handleClick() {
  const passwordInput = document.getElementById('password');
  const resultDiv = document.getElementById('result');

  if (!passwordInput || !resultDiv) return;

  resultDiv.textContent = "Проверка пароля...";
  resultDiv.className = "loading";

  checkPassword(passwordInput.value)
    .then(msg => {
      resultDiv.textContent = msg;
      resultDiv.className = "success";
    })
    .catch(err => {
      resultDiv.textContent = err.message;
      resultDiv.className = "error";
    });
}
