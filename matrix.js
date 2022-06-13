function matrix (Input){
    let matrix = []

    for(let i = 0; i < Input; i++){
    let row = []
       for(let j = 0; j < Input; j++){
        row.push(Input)
           
       } matrix.push(row.join(' '))
    }
    console.log(matrix.join('\n'))
}matrix(6)