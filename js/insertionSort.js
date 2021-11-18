import { delay, speed, hidePivot, disableButtons, enableButtons, fillAll } from './util.js';


async function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i].style.height;
        let j = i - 1;
        arr[i].style.background = "red";

        while(j >= 0 && parseInt(arr[j].style.height) > parseInt(key)){
            arr[j].style.background = "red"
            arr[j + 1].style.height = arr[j].style.height;
            await delay(speed)
            // arr[j].style.background = "cyan"
            j--;

            for(let k = i; k >= 0; k--){
                arr[k].style.background = 'limegreen';
            }

        }
        arr[j + 1].style.background = "orange";
        arr[j + 1].style.height = key;
        arr[i].style.background = "limegreen";
    }

    await fillAll(arr);
}


document.getElementById("insertion-sort").addEventListener('click', async (e)=>{
    if(e.target.id === "insertion-sort"){
        const allElements = document.querySelectorAll(".bar");
        hidePivot();
        disableButtons();
        await insertionSort(allElements);
        enableButtons();
    }
})