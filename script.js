const container = document.querySelector('.game');

let size=0;
const button = document.querySelector('.button');
button.addEventListener('click',function(){
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

const reset = document.querySelector('.reset');
reset.addEventListener('click',resets)
function resets(){
    const childs = document.querySelectorAll('#div');
    for(let i=0;i<childs.length;++i)
        childs[i].remove();
    container.style.border='none';
}

function board(){
    for(let i=0;i<size;++i){
        let row = document.createElement('div');
        for(let j=0;j<size;++j){
            const width = 80.0/size;
            let box = document.createElement('div');
            box.setAttribute('id','div');
            box.style = `padding:10px; background-color:white;flex:1 1 auto;`
            box.textContent= '';
            box.style.aspectRatio = '1/1';
            box.style.width = `${width}%`;
            box.addEventListener('mouseover',function(){
                this.style.background = 'red';
            })
            row.append(box);
        }
        row.style.display = 'flex';
        row.style.flexDirection = 'column';
        container.append(row);
    }
    container.style.border = 'solid 1px';
}

