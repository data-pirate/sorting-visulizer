async function swap(element1, element2){
    // const style1 = window.getComputedStyle(element1);
    // const style2 = window.getComputedStyle(element2);
    
    const transform1 = element1.style.height;
    const transform2 = element2.style.height;

    element1.style.height = transform2;
    element2.style.height = transform1;

    element1.style.background = "orange";
    element2.style.background = "red";
    await delay(speed);
}

const speedBar = document.getElementById("slider");
let speed = speedBar.value;
speedBar.addEventListener('change', (e)=>{
    speed = speedBar.value;
});

async function delay(time){
    return new Promise(resolve => setTimeout(() => {resolve('')}, 100 - Number(time)));
}


function hidePivot(){
    document.getElementById("pivot").style.display = "none";
}

function disableButtons(){
    const allButtons = document.querySelectorAll('.algo-button');
    allButtons.forEach((button) => {
        button.disabled = true;
    });
}

function enableButtons(){
    const allButtons = document.querySelectorAll('.algo-button');
    allButtons.forEach((button) => {
        button.disabled = false;
    });
}



async function fillAll(arr){
    for(let i = 0; i < arr.length; i++){
        await delay(20);
        arr[i].style.background = "green";
    }
}


export {swap, speed, delay, hidePivot, enableButtons, disableButtons, fillAll};