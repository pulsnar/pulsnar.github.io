
console.log("Hello world!");

function fadeinElements(name, target) {
  const items = document.querySelectorAll(name);

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add(target); 
        }else{
            entry.target.classList.remove('REPLACETHIS'); 
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }
}

fadeinElements('.fadein', 'inview');


function hideOnClick(idname) {
  var elem = document.getElementById(idname);
  elem.style.opacity = 0;
}
const io = new IntersectionObserver(cb);
io.observe(appear);