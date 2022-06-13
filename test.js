function testingaga(inp) {
for (let el of inp) {
    let curr = String(el)
    let cur1 = curr.split(' ').reverse().join(' ')
    let ispalindrome = true
    if(curr === cur1){
         ispalindrome = true
    } else {
        ispalindrome = false
    }console.log(ispalindrome)
}


} testingaga([123,
    323,
    421,
    121])