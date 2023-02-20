class ValidationFunctions {
  constructor(){
    this.validMsg = 'Sudoku is valid.'
    this.invalidMsg = 'Sudoku is invalid.'
    this.incompleteMsg = 'Sudoku is valid but incomplete.'
  }

  getNumbers(sudoku) {
    let res = []
    for(let i = 0; i < sudoku.length; i++){
      if (sudoku[i] >= '0' && sudoku[i] <= '9') {
        res.push(sudoku[i])
      }
    }
    return res
  }

  getRows(array) {
    //create copy of array to avoid mutations
    let arrayCopy = array.slice(0)
    let rows = []
    for(let i = 0; i < 9; i++){
      rows.push(arrayCopy.splice(0,9))
    }
    return rows
  }

  getColumns(array) {
    let columns = []
    for(let i = 0; i < 9; i++){
      let res = array.map((value) => {
        return value[i]
      })
      columns.push(res)
    }
    return columns
  }

  lookForZero(array) {
    let hasZero = false
    for(let i = 0; i < array.length; i++){
      if (array[i] == '0'){
        hasZero = true
        break
      }
    }
    return hasZero
  }

  lookForDuplicates(array) {
    const hashset = new Set()
    for(let i = 0; i < array.length; i++){
      if (array[i] != '0' && hashset.has(array[i])){
        return true
      }
      hashset.add(array[i])
    }
    return false
  }

  createSubgroups(rows) {
    let subgroups = []
    let temp = new Array(3)

    rows.map((row,index) => {
      if (index % 3 == 0) {
        temp = new Array(3)
        for(let i = 0; i < 3; i++){
          let res = row.splice(0, 3)
          temp[i] = res
        }
      } else {
        for(let i = 0; i < 3; i++){
          let res = row.splice(0, 3)
          temp[i].push(...res)
        }
      }

      //reached the end of the third row, push created subgroups
      if (index % 3 == 2) {
        subgroups.push(...temp)
      }
    })
    return subgroups
  }
}

module.exports = ValidationFunctions
