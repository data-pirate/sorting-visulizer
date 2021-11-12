import { swap, delay, speed } from './util.js';
import quickSort from './quickSort.js'
// const { swap } = require('./util.js')

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
    for(let i = 0; i < arr.length; i++){
        const element = document.createElement("div");
        element.classList.add("bar");
        element.style.height = `${arr[i]}%`
        element.style.width = bars.offsetWidth / arr.length;
        bars.appendChild(element);
    }
}


const navBar = document.querySelector(".navbar");
navBar.addEventListener('click', async (e) => {
    if(e.target.id === 'new-array'){
        arr = makeArray();
        makeBars(arr);
    }else if(e.target.id === 'bubble-sort'){
        let allElements = document.querySelectorAll(".bar");
        await bubbleSort(allElements);
    }
});


arr = makeArray();
makeBars(arr);


async function bubbleSort(arr){
    const len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - i - 1; j++){
            let el1 = parseInt(arr[j].style.height)
            let el2 = parseInt(arr[j + 1].style.height)
            if(el1 > el2){
                await swap(arr[j], arr[j + 1]);
            }
            arr[j].style.background = "lightgreen";
            arr[j + 1].style.background = "lightgreen";
        }
        arr[len - i - 1].style.background = "green";
    }
}


