
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
    }
});


arr = makeArray();
makeBars(arr);


document.getElementById('input-new-array').addEventListener('click', (e) => {
    console.log('here in lsite')
    let arrBox = document.getElementById('array-box');
    console.log(window.getComputedStyle(arrBox).visibility);
    if(arrBox.style.display === "none"){
        arrBox.style.display = "block"
    }else{
        arrBox.style.display = "none"
    }
});