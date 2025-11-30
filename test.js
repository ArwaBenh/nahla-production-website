
function nomValide(nom) {
  return /^[A-Za-zÀ-ÿ\s]{2,}$/.test(nom);
}
function numeroValide(numero) {
  return /^[0-9]{8}$/.test(numero);
}
function emailValide(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function tester(){
  let name=document.getElementById("name").value;
  let num=document.getElementById("num").value;
  let email=document.getElementById("email").value;
  let sub=document.getElementById("sub").value;
  let valid=true;
  document.getElementById("errName").style.display = "none";
  document.getElementById("errNum").style.display = "none";
  document.getElementById("errEmail").style.display = "none";
  document.getElementById("errSub").style.display = "none";
  if (!nomValide(name)) {
      document.getElementById("errName").textContent = "Name invalide !";
      document.getElementById("errName").style.display = "block";
      valid=false;
  }
  if (!numeroValide(num)) {
      document.getElementById("errNum").textContent = "Phone Number invalide !";
      document.getElementById("errNum").style.display = "block";
      valid=false;
  }
  if (!emailValide(email)) {
      document.getElementById("errEmail").textContent = "Email invalide !";
      document.getElementById("errEmail").style.display = "block";
      valid=false;
  }
  if (!nomValide(sub)) {
      document.getElementById("errSub").textContent = "Subject invalide !";
      document.getElementById("errSub").style.display = "block";
      valid=false;
  }
  return valid;
}
function highlight(el) {
  document.querySelectorAll('.a').forEach(link => {
    link.classList.remove('clicked');
  });
  el.classList.add('clicked');
}
const text="fondatrice";
let i=0;
function typeEffect() {
  const element = document.querySelector(".typing");
  if (i < text.length) {
      element.textContent+=text.charAt(i);
      i++;
      setTimeout(typeEffect, 150);
  }
}
document.addEventListener("DOMContentLoaded",()=> {
  document.querySelector(".typing").textContent="";
  typeEffect();
});
const menuBtn = document.getElementById('menu');
const navMenu = document.getElementById('nav-menu');
menuBtn.addEventListener('click', () => {
  if(navMenu.style.display==='flex'){
      navMenu.style.display='none';
  } else {
      navMenu.style.display='flex';
  }
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".a");
window.addEventListener("scroll", () => {
  let current = sections[0].id;
  sections.forEach(section => {
    const sectionTop=section.getBoundingClientRect().top;
    if(sectionTop<=window.innerHeight / 2){
    current=section.getAttribute("id");
  }
  });
  navLinks.forEach(link => {
  link.classList.remove("clicked");
  if(link.getAttribute("href").includes(current)){
    link.classList.add("clicked");
    }
  });
});
