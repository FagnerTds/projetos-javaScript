export default function outsideClick(element,events,callback){
  const html = document.documentElement;
  const outside = "data-outside"

  if(!element.hasAttribute(outside)){
    events.forEach((userEvents)=>{
      html.addEventListener(userEvents, handleOutside);
      element.setAttribute(outside,"")
    })
  }
  function handleOutside(event){
    if(!element.contains(event.target)){
      element.removeAttribute(outside)
      events.forEach((userEvents)=>{
        html.removeEventListener(userEvents, handleOutside);
      })
      callback()
    }
  }
 
}
