const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar_mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.PageTransitionEvent > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

/*Mudar cor*/
function togglMode(){
  const html = document.documentElement
  html.classList.toggle("light");

 const button = document.querySelector("#switch button"); if (html.classList.contains("light")) { button.style.setProperty("--switch-bg-url", "url(/css/assets/sun.svg)"); } else { button.style.setProperty("--switch-bg-url", "url(/css/assets/moon-stars.svg)");}
}
