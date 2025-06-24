window.addEventListener('DOMContentLoaded', () => {
    const password = document.getElementById('password');
    const strength = document.getElementById('strength');
    const suggestions = document.getElementById('suggestions');
  
    password.addEventListener('input', () => {
      const val = password.value;
      let result = 'Too Weak';
      let color = 'red';
      let tips = [];
  
      // Suggestions
      if (val.length < 12) {
        tips.push('🔹 Increase length to at least 12 characters');
      }
      if (!/[A-Z]/.test(val)) {
        tips.push('🔹 Add an uppercase letter (A-Z)');
      }
      if (!/[a-z]/.test(val)) {
        tips.push('🔹 Add a lowercase letter (a-z)');
      }
      if (!/[0-9]/.test(val)) {
        tips.push('🔹 Add a number (0-9)');
      }
      if (!/[^A-Za-z0-9]/.test(val)) {
        tips.push('🔹 Add a special character (!@#$...)');
      }
  
      // Strength logic
      if (val.length >= 12 && tips.length <= 1) {
        result = 'Strong';
        color = 'green';
      } else if (val.length >= 8 && tips.length <= 3) {
        result = 'Medium';
        color = 'orange';
      }
  
      strength.textContent = result;
      strength.style.color = color;
  
      suggestions.innerHTML = '';
      tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        suggestions.appendChild(li);
      });
    });
  });
  