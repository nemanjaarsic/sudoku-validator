const ValidationFunctions = require('./validationFunctions')

class Validator {
  static validate(sudoku) {
    const validator = new Validator

    return validator.validate(sudoku)
  }

  validate(sudoku) {
    const vf = new ValidationFunctions()

    let nums = vf.getNumbers(sudoku)
    if (nums.length != 81) {
      return vf.invalidMsg
    }
    
    let rows = vf.getRows(nums)
    for(let i = 0; i < 9; i++){
      if(vf.lookForDuplicates(rows[i])){
        return vf.invalidMsg
      }
    }

    let columns = vf.getColumns(rows)
    for(let i = 0; i < 9; i++){
      if(vf.lookForDuplicates(columns[i])){
        return vf.invalidMsg
      }
    }

    let subgroups = vf.createSubgroups(rows)
    for(let i = 0; i < 9; i++){
      if(vf.lookForDuplicates(subgroups[i])){
        return vf.invalidMsg
      }
    }

    let hasZero = vf.lookForZero(nums)

    return hasZero ? vf.incompleteMsg : vf.validMsg
  }
}

module.exports = Validator
