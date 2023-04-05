const div = document.createElement('div');
const grids = document.querySelector('.grids');
const dimension = document.getElementById('dimension');



dimension.addEventListener('change', handleUpdate);
dimension.addEventListener('mousemove', handleUpdate);
function handleUpdate() {
    grids.innerHTML =''
    const suffix = this.dataset.sizing;
    document.documentElement.style.setProperty(`--${this.name}`, 100/this.value+suffix);
    console.log(this.value);
    
    let canvasSize = this.value * this.value;
    for(let i =0 ; i<canvasSize; i++) {
        grids.innerHTML += '<div class="box"></div>';
    };
    
}







const box = document.querySelectorAll('.box');

box.forEach(grid =>{
  
    grid.addEventListener('mouseover', ()=> {
        grid.style.backgroundColor ='black';
    })
    grid.addEventListener('drag', ()=>{
        grid.style.backgroundColor = 'black';
    })
  
});

