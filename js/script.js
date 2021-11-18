import {hidePivot, enableButtons} from "./util.js";


let arr = [];
function makeArray(){
    let arr = [];
    for(let i = 0; i < 100; i++){
        arr.push(Math.floor(Math.random() * 100) + 1);
    }

    return arr;
}

const bars = document.getElementById("bars");
function makeBars(arr){
    while(bars.firstChild){
        bars.removeChild(bars.firstChild);
    }
    const mx = Math.max(...arr);
    const element = document.createElement("div");
    for(let i = 0; i < arr.length; i++){
        element.classList.add("bar");
        element.style.height = `${(arr[i] / mx) * 100}%`
        element.style.width = `${bars.offsetWidth / arr.length}px`;
        bars.appendChild(element.cloneNode(true));
    }
}


const navBar = document.querySelector(".navbar");
navBar.addEventListener('click', async (e) => {
    if(e.target.id === 'new-array'){
        enableButtons();
        hidePivot();
        arr = makeArray();
        makeBars(arr);

    }
});


arr = makeArray();
makeBars(arr);

let newArrayInputButton = document.getElementById('input-new-array');
newArrayInputButton.addEventListener('click', (e) => {
    let arrBox = document.getElementById('array-box');
    if(window.getComputedStyle(arrBox).display === "none"){
        arrBox.style.display = "block";
        e.target.textContent = "Close";
    }else{
        arrBox.style.display = "none";
        arrBox.value = "";  
        e.target.textContent = "Input Array";

    }
});


const inputArraybox = document.getElementById('array-box');
inputArraybox.addEventListener('change', (e) => {
    if(e.target.id === "array-box"){
        if(e.target.value !== ""){
            let values = e.target.value.split(" ");
            values = values.map(Number);
            makeBars(values);
        }
    } 
});