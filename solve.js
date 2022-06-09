function excellentGrade(n) 
{
    let countof = 0;
    let sumfoall = 0;
    for (let i = 1; i <= 100; i+=2) {
 
    console.log(i)
    countof++;
    sumfoall += i;
    if(countof === n) {
console.log(`Sum: ${sumfoall}`)
break
} 

}}
excellentGrade(2)