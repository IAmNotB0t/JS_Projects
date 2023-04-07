const div = document.createElement('div');
const grids = document.querySelector('.grids');
const dimension = document.getElementById('dimension');
const color = document.getElementById('color');

color.addEventListener('change', colorOption);



dimension.addEventListener('change', handleUpdate);
dimension.addEventListener('mousemove', handleUpdate);

function handleUpdate() {
    grids.innerHTML =''
    const suffix = this.dataset.sizing;
    document.documentElement.style.setProperty(`--${this.name}`, 100/this.value+suffix);
    

    let canvasSize = this.value * this.value;
    for(let i =0 ; i<canvasSize; i++) {
        grids.innerHTML += '<div class="box"></div>';
    };

    boxes = document.querySelectorAll('.box');
    

    boxes.forEach((pixels)=>{
        pixels.addEventListener('mouseover', ()=> {
            pixels.style.backgroundColor = 'var(--color)';
        })
    })

};

function colorOption() {
    document.documentElement.style.setProperty(`--${this.name}`, this.value);
    
}

