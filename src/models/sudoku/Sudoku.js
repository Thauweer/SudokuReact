export class Sudoku{
    constructor(size){
        this.newGame(size)
    }

    newField(){
        let size = this.size
        let S = size * size
        this.field = new Array(S).fill().map( (elI, index) =>{ 
            return new Array(S).fill().map((elJ, indexJ) =>{
                return Math.floor((index*size + index/size + indexJ) % S + 1)
            })
        })
    }

    newGame(size){
        this.size = size
        this.newField()
        this.randomizeField()
    }

    setSetterField(setterField){
        this.setterField = setterField
    }

    changeCell(position, value){
        this.field[position['y']][position['x']] = value
    }

    #setEmptyCells(complexity){        
        let temp = this.field
        let size = this.size
        const callBack = (value) =>{
            let cnsq = Array(size*size).fill().map((value, index)=> index)
            let emptyCells = new Array(0)

            for(var i = 0; i < complexity; i++){
                let index = Math.floor(Math.random()*cnsq.length)
                emptyCells.push(cnsq[index])
                cnsq.splice(index, 1)
            }

            emptyCells.map((el)=>{
                return value[el] = 0
            })
            return value
        }
        return temp.map(callBack)
    }

    randomizeField(){
        let randomizeMeth = Math.floor(Math.random()*1000000).toString(4)

        Array.from(randomizeMeth).forEach(element => {
            switch(element){
                case '0':
                    this.#transpondField();
                    break;
                case '1':
                    this.#switchRandRows();
                    break;
                case '2':
                    this.#switchRandRowBlocks();
                    break;
                case '3':
                    this.#switchRandCols();
                    break;
                case '4':
                    this.#switchRandColBlocks();
                    break;
                default:
                    break;
            }
        });


        this.solvedField = this.field
        this.#setEmptyCells(5)
    }

    #transpondField(){
        let arr = this.field.flat()
        let tempField = new Array(this.size*this.size).fill().map(() => new Array(0))

        for(var i = 0; i < arr.length; i++){
            tempField[i%(this.size*this.size)].push(arr[i])
        }

        this.field = tempField
    }

    #switchRandRows(){
        let block = Math.floor( Math.random()*this.size)
        let rows = new Array(this.size).fill().map((el, i) => i)
        
        let firstRow = rows.splice(Math.floor(Math.random()*rows.length),1)[0] + block * this.size
        let secondRow = rows.splice(Math.floor(Math.random()*rows.length),1)[0] + block * this.size

        const tempArr = this.field
        const tempRow = this.field[firstRow]

        tempArr[firstRow] = this.field[secondRow]
        tempArr[secondRow] = tempRow

        this.field = tempArr
    }

    #switchRandCols(){
        this.#transpondField()
        this.#switchRandRows()
        this.#transpondField()
    }

    #switchRandRowBlocks(){
        let blocks = new Array(this.size).fill().map((el, index) => index)

        let firstBlock = blocks.splice(Math.floor(Math.random()*blocks.length),1)[0] 
        let secondBlock = blocks.splice(Math.floor(Math.random()*blocks.length),1)[0] 

        const tempArr = this.field
        let tempFirstBlock = this.field.map((el, i) => {
            if((i<(this.size*firstBlock)) || (i>=this.size*(firstBlock + 1))){
                return null
            } 
            return el       
        })
        tempFirstBlock = tempFirstBlock.filter(item => !!item)
        let tempSecondBlock = this.field.map((el, i) => {
            if((i<(this.size*secondBlock)) || (i>=this.size*(secondBlock + 1))){
                return null
            } 
            return el       
        })
        tempSecondBlock = tempSecondBlock.filter(item => !!item)


        this.field = tempArr.map((el, i)=>{
            if((i>=(this.size*firstBlock)) && (i<this.size*(firstBlock + 1))){
                return tempSecondBlock[i%this.size]
            } 
            if((i>=(this.size*secondBlock)) && (i<this.size*(secondBlock + 1))){
                return tempFirstBlock[i%this.size]
            } 
            return el
        })
    }

    #switchRandColBlocks(){
        this.#transpondField()
        this.#switchRandRowBlocks()
        this.#transpondField()
    }
}