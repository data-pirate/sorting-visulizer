import { speed, delay, hidePivot, enableButtons, disableButtons } from "./util.js"

function swap(el1, el2){
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

async function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIdx = i;
        for(let j = i + 1; j < arr.length; j++){
            if(parseInt(arr[j].style.height) < parseInt(arr[minIdx].style.height)){
                minIdx = j;
            }
            arr[j].style.background = "lightgreen";
            arr[minIdx].style.background = "red";
        }
        arr[i].style.background = "orange";

        swap(arr[i], arr[minIdx]);
        await delay(speed);
        arr[i].style.background = "green";
    }

}

document.getElementById("selection-sort").addEventListener('click', async (e)=>{
    if(e.target.id === "selection-sort"){
        const allElements = document.querySelectorAll(".bar");
        hidePivot();
        disableButtons();
        await selectionSort(allElements);
        enableButtons();
    }
})