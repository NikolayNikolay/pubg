let language = document.querySelector('.drop ._language');
let language2 = document.querySelector('.drop__down ._language');
let drop = document.querySelector('.drop');

language2.addEventListener('click', function () {
   language.innerHTML = 'usa';
   language2.innerHTML = 'ru';
});
if (drop) {
   const dropdown = document.querySelector('.drop__down');
   let arrow = document.querySelector('.drop__arrow')
   drop.addEventListener('click', function (e) {
      dropdown.classList.toggle('_active');
      arrow.classList.toggle('_active')
   });
};