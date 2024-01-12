const container = document.querySelector('.game');
let size = parseInt(document.querySelector('.slider').value);


const button = document.querySelector('.button');
button.addEventListener('click',()=>{
    resets();
    size = parseInt(document.querySelector('.slider').value);
    board();
})

const slider = document.querySelector('.slider');
const showValue = document.querySelector('.slider-value');
slider.addEventListener('input',()=>{
    showValue.textContent = slider.value;
})

let is_mouse_pressed = false;

const reset = document.querySelector('.reset');
reset.addEventListener('click',resets)
function resets(){
    container.innerHTML = '';
    container.style.border='none';
}

let colorSelector = document.querySelector('#color');
colorSelector.addEventListener('change',()=>{
    const div = document.querySelectorAll('#box');
    for(let i=0;i<div.length;++i){
        div[i].addEventListener('mouseover',()=>{
            if(is_mouse_pressed)
                div[i].style.background = colorSelector.value;
        })
    }
})

function board(){
    const color = document.querySelector('#color').value;
    for(let i=0;i<size;++i){
        let row = document.createElement('div');
        for(let j=0;j<size;++j){
            const width = 800.0/size;
            let box = document.createElement('div');
            box.setAttribute('id','box');
            box.style = `background-color:white; width:${width}px; height:${width}px;`
            box.textContent= '';
            box.addEventListener('mousedown',() => {is_mouse_pressed=true;});
            box.addEventListener('mouseup',() => {is_mouse_pressed=false;});
            box.addEventListener('mouseover',() => {
                if(is_mouse_pressed)
                    box.style.background = color;
            })
            row.append(box);
        }
        row.style.display = 'flex';
        row.style.flexDirection = 'column';
        container.append(row);
    }
    container.style.border = 'solid 1px';
}

const randomize = document.querySelector('.random');
randomize.addEventListener('click',()=>{
    const boxes = document.querySelectorAll('#box');
    for(let i=0;i<boxes.length;++i)
        boxes[i].addEventListener('mouseover',()=>{
            if(is_mouse_pressed){
                let red = Math.floor(Math.random() *256);
                let blue = Math.floor(Math.random() *256);
                let green = Math.floor(Math.random() *256);
                boxes[i].style['background-color'] = `rgb(${red},${blue},${green})`
                console.log(boxes[i].style['background-color']);
                console.log(`rgb(${red},${blue},${green})`)
            }
    })
})