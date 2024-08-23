import outsideClick from "./ousideClick"

export default function initDropdownMenu(){
  
}
const dropdownMenu = document.querySelectorAll('[data-dropdown]')

dropdownMenu.forEach((menu)=>{
  ['touchstart', "click"].forEach((userEvent)=>{
    menu.addEventListener(userEvent, handleclick)
  })
})
function handleclick(event){
  event.preventDefault();
  this.classList.add('active');
  outsideClick(this,['touchstart', "click"],()=>{
    this.classList.remove('active')
  });
}
outsideClick();


