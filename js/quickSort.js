import { swap } from "./util.js";

async function partition(arr, start, end){
    arr[end].style.background = "black";
    let index = start;
    let pivot = parseInt(arr[end].style.height);
    for(let i = start; i < end; i++){
        if(parseInt(arr[i].style.height) < pivot){
            await swap(arr[i], arr[index]);
            index++
        }
    }

    await swap(arr[index], arr[end]);
    arr[index].style.background = "green";
    return index;

}


export default async function quickSort(arr, start, end){
    if(start >= end){
        if(start < arr.length && end < arr.length && start >= 0 && end >= 0){
            arr[start].style.background = 'green';
            arr[end].style.background = 'green';
        }
        return;
    }
    let index = await partition(arr, start, end);
    await Promise.all([quickSort(arr, start, index - 1), quickSort(arr, index + 1, end)]) 
}



document.getElementById("quick-sort").addEventListener('click', async (e)=>{
    const allElements = document.querySelectorAll(".bar");
    const pivot = document.getElementById("pivot");
    pivot.style.display = "flex";
    await quickSort(allElements, 0, allElements.length - 1);

})