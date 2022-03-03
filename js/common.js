//search js S
const searchEl = document.querySelector('.search');
const searchIputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchIputEl.focus();
});

searchIputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchIputEl.setAttribute('placeholder', '통합검색')
});

searchIputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchIputEl.setAttribute('placeholder', '')
});

// thisYear
const thisYear = document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear(); //올해의 년도