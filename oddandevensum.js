function oddeven(inp) {
let sumeven = 0
let sumodd = 0
let numtostring = inp.toString()

for(let i of numtostring){
    let currnum = Number(i)
    
    if( currnum % 2 == 0){
      sumeven += currnum
    } else {
      sumodd += currnum
    }
}
console.log(sumeven)
console.log(sumodd)
} oddeven([1000435])