let arr = [28, 34, 31, 14, 5, 41, 27, 8];

let parent_div = document.querySelector(".parent_div");
let button = document.querySelector(".btn");

let i = 0;


arr.forEach(e => {
    let inner_div = document.createElement('div');
    inner_div.style.height = (e * 18) + 'px';
    inner_div.style.backgroundColor = `#` + ((1 << 24) * Math.random() | 1).toString(16);
    inner_div.setAttribute('id', 'elem' + i);
    i++;
    inner_div.classList.add("inner_div");
    parent_div.appendChild(inner_div)

})

button.addEventListener("click", () => myFunction(arr));
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}



//(10,40,30, 20, 10,60,80,5]
async function myFunction(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            await sleep(500);
            if (arr[j] > arr[j + 1]) {
                //swapthe number
                swapNumber(arr, j)
                //swaping color and height
                swapColorHeight(j)

            }
        }
    }
}

function swapNumber(arr, j) {
    let temp = arr[j]
    arr[j] = arr[j + 1]
    arr[j + 1] = temp
}

function swapColorHeight(j) {
    let a = 'elem' + j;
    let b = 'elem' + (j + 1);
    let el = document.getElementById(a);
    let e2 = document.getElementById(b);
    let bg1 = el.style.backgroundColor;
    let bg2 = e2.style.backgroundColor
    let h1 = el.clientHeight;
    let h2 = e2.clientHeight;
    el.style.backgroundColor = bg2;
    e2.style.backgroundColor = bg1;
    el.style.height = h2 + "px";
    e2.style.height = h1 + "px";
}