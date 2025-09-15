
let countEl = document.getElementById("demo")
let count = 0
function increment(){
        count +=1
        countEl.innerText = count       
}

let saveEl = document.getElementById("save-el")
function save(){
    let countstr = " " + count + " - "
    saveEl.innerText += countstr
    countEl.textContent = 0
    count = 0
}