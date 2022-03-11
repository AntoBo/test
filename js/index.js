console.log(localStorage);
localStorage.setItem('ui-theme', 'light');
console.log(localStorage.getItem('ui-theme')); // "dark"

localStorage.removeItem('ui-theme');
console.log(localStorage.getItem('ui-theme')); // null
