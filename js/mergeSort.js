import { speed, delay, hidePivot, enableButtons, disableButtons } from './util.js';

async function merge(arr, low, mid, high){
    
    let n = mid - low + 1;
    let m = high - mid;
    console.log(n, m);
    let left = new Array(n)
    let right = new Array(m);
    for(let i = 0; i < n; i++){
        arr[low + i].style.background = 'orange';
        left[i] = arr[low + i].style.height;
        await delay(speed);
    }

    
    for(let i = 0; i < m; i++){
        arr[mid + i + 1].style.background = 'red';
        right[i] = arr[mid + i + 1].style.height;
        await delay(speed);
    }


    let i = 0, j = 0, k = low;
    while(i < n && j < m){

        if(parseInt(left[i]) < parseInt(right[j])){
            await delay(speed);
            if((n + m) === arr.length){
                arr[k].style.background = 'green';
            }else{
                arr[k].style.background = "lightgreen";
            }
            arr[k].style.height = left[i];
            i++;
            k++;
        }else{
            await delay(speed);
            if((n + m) === arr.length){
                arr[k].style.background = 'green';
            }else{
                arr[k].style.background = "lightgreen";
            }

            arr[k].style.height = right[j];
            j++;
            k++;
        }
    }


    while(i < n){
        await delay(speed);
        if((n + m) === arr.length){
            arr[k].style.background = 'green';
        }else{
            arr[k].style.background = "lightgreen";
        }

        arr[k].style.height = left[i];
        i++;
        k++;
    }


    while(j < m){
        await delay(speed);
        if((n + m) === arr.length){
            arr[k].style.background = 'green';
        }else{
            arr[k].style.background = "lightgreen";
        }

        arr[k].style.height = right[j];
        j++;
        k++;
    }
}




async function mergeSort(arr, start, end){
    if(start >= end){
        return;
    }
    let mid = start + Math.floor((end - start)/2);
    await mergeSort(arr, start, mid);
    await mergeSort(arr, mid + 1, end);
    await merge(arr, start, mid, end);
}


document.getElementById("merge-sort").addEventListener('click', async (e)=>{
    const allElements = document.querySelectorAll(".bar");
    hidePivot();
    disableButtons();
    await mergeSort(allElements, 0, allElements.length - 1);
    enableButtons();
})