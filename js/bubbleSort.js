import { swap, hidePivot, disableButtons, enableButtons } from './util.js';


async function bubbleSort(arr){
    const len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - i - 1; j++){
            let el1 = parseInt(arr[j].style.height);
            let el2 = parseInt(arr[j + 1].style.height);
            if(el1 > el2){
                await swap(arr[j], arr[j + 1]);
            }
            arr[j].style.background = "lightgreen";
            arr[j + 1].style.background = "lightgreen";
        }
        arr[len - i - 1].style.background = "green";
    }
}


document.getElementById("bubble-sort").addEventListener('click', async (e)=>{
    if(e.target.id === "bubble-sort"){
        const allElements = document.querySelectorAll(".bar");
        hidePivot();
        disableButtons();
        await bubbleSort(allElements);
        enableButtons();
    }
})