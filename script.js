
const password = document.getElementById('password');
const showPassword = document.getElementById('showPassword');
const score = document.getElementById('score');
const checklist = {
  len: document.getElementById('len'),
  upper: document.getElementById('upper'),
  lower: document.getElementById('lower'),
  number: document.getElementById('number'),
  special: document.getElementById('special')
};

password.addEventListener('input', evaluatePassword);

showPassword.addEventListener('change', () => {
  password.type = showPassword.checked ? 'text' : 'password';
});

document.getElementById('generateBtn').addEventListener('click', () => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let generated = "";
  for (let i = 0; i < 14; i++) {
    generated += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  password.value = generated;

  // Force password to be visible
  showPassword.checked = true;
  password.type = 'text';

  password.dispatchEvent(new Event('input')); // trigger update
});


document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function evaluatePassword() {
  const val = password.value;
  let points = 0;

  // Checklist conditions
  const checks = {
    len: val.length >= 12,
    upper: /[A-Z]/.test(val),
    lower: /[a-z]/.test(val),
    number: /[0-9]/.test(val),
    special: /[^A-Za-z0-9]/.test(val)
  };

  // Update checklist UI
  for (let key in checks) {
    checklist[key].textContent = `${checks[key] ? '✅' : '❌'} ${checklist[key].textContent.slice(2)}`;
    if (checks[key]) points += 20;
  }

  // Update score
  score.textContent = points;
}
