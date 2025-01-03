const generateEl = document.getElementById('generate')
let row;
let column;

generateEl.addEventListener('click',()=>{
    //console.log("button clicked")
    row = document.getElementById('rows').value
    //console.log(row)
    column = document.getElementById('columns').value
    //console.log(column)
    if(row >0 && column >0){
        //console.log(row)
        //console.log(column)
        const gridMake = document.getElementById('box-grid')
        gridMake.style.gridTemplateRows = `repeat(${row},50px)`
        gridMake.style.gridTemplateColumns = `repeat(${column},50px)`
        //console.log(gridMake)
        for(let i =0; i<row*column; i++){
            const matrixGrid = document.createElement('div')
            matrixGrid.classList.add('box-make')
            gridMake.appendChild(matrixGrid)
            
        }
        const boxEl=document.querySelectorAll('.box-make')
        //console.log(boxEl)
       boxEl.forEach((bg,idx)=>{
            bg.addEventListener('click',()=>{
                const col = (idx%column)+1
                const rowm = Math.floor(idx/column)+1
                //console.log(col)
                //console.log(rowm)
                bg.classList.add('colour-box')
                console.log(bg)
                columncheck(col,rowm,bg)
            })
       })

       function columncheck(clickedcol,clickedrow,clickedbox){
           boxEl.forEach((bg,idx)=>{
                const col = (idx%column)+1
                const rowm = Math.floor(idx/column)+1
                if((col===clickedcol || rowm === clickedrow ||(rowm-col)===(clickedrow-clickedcol)||(rowm+col)===(clickedrow+clickedcol)) && bg!== clickedbox){
                    bg.classList.add('uncolour-box')
                    
                }
                if(bg.classList.contains('colour-box')||bg.classList.contains('uncolour-box')){
                    bg.classList.add('disabled')
                }
           })
       } 
        
    }else{
        //console.log("error")
        document.write("Enter a valid Number for row and column and for escaping this page refresh it")
      
    }
})