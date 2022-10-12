/* eslint-disable no-restricted-globals */
window.addEventListener("scroll", ()=>{
    let navbar = document.querySelector("nav")
  
    if(scrollY > 0){
      navbar.classList.add("sticky")
    }else{
      navbar.classList.remove("sticky")
    }
  
  })