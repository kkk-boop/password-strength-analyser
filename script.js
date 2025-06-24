window.addEventListener('DOMContentLoaded', () => {
  const password = document.getElementById('password');
  const bar = document.getElementById('bar');
  const strengthText = document.getElementById('strength-text');
  const checklist = {
    len: document.getElementById('len'),
    upper: document.getElementById('upper'),
    lower: document.getElementById('lower'),
    num: document.getElementById('num'),
    special: document.getElementById('special'),
  };

  password.addEventListener('input', () => {
    const val = password.value;
    let score = 0;

    // Checks
    const hasUpper = /[A-Z]/.test(val);
    const hasLower = /[a-z]/.test(val);
    const hasNum = /[0-9]/.test(val);
    const hasSpecial = /[^A-Za-z0-9]/.test(val);
    const hasLength = val.length >= 12;

    // Score logic
    if (hasLength) score += 25;
    if (hasUpper) score += 20;
    if (hasLower) score += 20;
    if (hasNum) score += 20;
    if (hasSpecial) score += 15;

    // Strength bar update
    bar.style.width = score + "%";
    bar.style.backgroundColor =
      score < 40 ? "red" :
      score < 70 ? "orange" : "green";

    strengthText.textContent = `Strength: ${score} / 100`;

    // Checklist feedback
    checklist.len.textContent = (hasLength ? "✔️" : "❌") + " Length ≥ 12";
    checklist.upper.textContent = (hasUpper ? "✔️" : "❌") + " Uppercase letter";
    checklist.lower.textContent = (hasLower ? "✔️" : "❌") + " Lowercase letter";
    checklist.num.textContent = (hasNum ? "✔️" : "❌") + " Number";
    checklist.special.textContent = (hasSpecial ? "✔️" : "❌") + " Special character";
  });

  // Password generator
  document.getElementById("generateBtn").addEventListener("click", () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let generated = "";
    for (let i = 0; i < 14; i++) {
      generated += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    password.value = generated;
    password.dispatchEvent(new Event('input'));
  });

  // Dark mode toggle
  document.getElementById("toggleDark").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
