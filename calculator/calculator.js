let p=document.querySelector("p")
function action(x){
        p.textContent = p.textContent === "0" ? x : p.textContent + x;
}
function getResult(){
    p.textContent=eval(p.textContent)
}
function clearNumbers(){
    p.textContent=0;
}
function backspace() {
    p.textContent = p.textContent.length > 1 ? p.textContent.slice(0,-1) : "0";
}
