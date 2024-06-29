const container = document.querySelector(".container");
const sizeButton = document.querySelector(".sizeButton");

function createGrid(gridLength){
    for (i=0;i<gridLength;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (j=0;j<gridLength;j++){
            const pixel = document.createElement("div")
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        };
    };
}

function randomRGB(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return (`rgb(${red},${green},${blue})`);
}

// Initialising grid
createGrid(16);

container.addEventListener("mousemove",(event)=>{
    let target = event.target;
    if (target.classList.value === "pixel"){
        RGB = randomRGB();
        target.style.cssText = `background: ${RGB};`;
    };
});

sizeButton.addEventListener("click",()=>{
    container.replaceChildren();
    let gridSize = prompt('Enter a number from 1 - 100');
    if (gridSize > 100) gridSize = 100;
    else if (gridSize < 1) gridSize = 1;
    createGrid(gridSize);
});