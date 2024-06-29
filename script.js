const container = document.querySelector(".container");

function createGrid(gridLength){
    for (i=0;i<gridLength;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (j=0;j<gridLength;j++){
            const pixel = document.createElement("div")
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
    };
}

createGrid(80);

container.addEventListener("mousemove",(event)=>{
    let target = event.target;
    if (target.classList.value === "pixel"){
        target.classList.toggle("colour");
    };
});

/*
container.addEventListener("mouseout",(event)=>{
    let target = event.target;
    if (target.classList.value === "pixel"){
        target.classList.toggle("colour");
    }
});*/