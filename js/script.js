let arr = [];
function makeArray(){
    let arr = [];
    for(let i = 0; i < 100; i++){
        arr.push(Math.floor(Math.random() * 100) + 1);
    }

    return arr;
}

const bars = document.getElementById("bars");
function makeBars(){
    arr = makeArray();
    while(bars.firstChild){
        bars.removeChild(bars.firstChild);
    }
    for(let i = 0; i < arr.length; i++){
        const element = document.createElement("div");
        element.classList.add("bar");
        element.style.height = `${arr[i]}%`
        bars.appendChild(element);
    }
}


const newArrayButton = document.getElementById("new-array");
newArrayButton.addEventListener('click', makeBars);

function swap(element1, element2){
    // const style1 = window.getComputedStyle(element1);
    // const style2 = window.getComputedStyle(element2);

    const transform1 = element1.style.height;
    const transform2 = element2.style.height;

    element1.style.height = transform2;
    element2.style.height = transform1;
}

async function bubbleSort(){
    const allElements = document.querySelectorAll(".bar");

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            let el1 = Number(allElements[i].style.height.split("%")[0]);
            let el2 = Number(allElements[j].style.height.split("%")[0]);
            allElements[i].style.background = "red";
            allElements[j].style.background = "red";
            if(el1 > el2){
                swap(allElements[i], allElements[j]);
                await new Promise(resolve => setTimeout(() => {resolve(), 1000}));
            }
            allElements[i].style.background = "yellow";
            allElements[j].style.background = "yellow";
        }
    }

    console.log("sorted");
}



makeBars();
bubbleSort();