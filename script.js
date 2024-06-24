const container = document.querySelector(".container");

function createGrid(){
    for (i=0;i<16;i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (j=0;j<16;j++){
            const pixel = document.createElement("div")
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
    };
}

createGrid();