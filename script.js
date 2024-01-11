const container = document.querySelector('.game');
let size=0;


const button = document.querySelector('.button');
button.addEventListener('click',()=>{
    if(size>0){
        resets();
    }
    size = parseInt(prompt("Please Enter Size of your Board: "));
    if(size>100){
        alert("Size exceeds maximum limit (100)!!");
        size = 100;
    }
    board();
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
        if(div[i].style['background-color']=='white')
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

