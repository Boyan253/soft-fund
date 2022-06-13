function numnum2 (n) {
  let number = n.slice(' ')
  let sum = 1
  let asum = 1
 let petr = ''
  for(let i = 1; i < number.length; i++){
      sum += number[i]
      sum = sum.split(' ').join('')
      console.log(sum);
     
            console.log(sum);}
            if(sum % 2 == 0){
            for(let i = 0; i < sum.length; i++){
               if (sum[i] !== 0){
            asum = i + '0'
                console.log(asum);}
               }
//    sum = sum.split(' ').join('')
//   dssum = Number(sum)
 
//   asum += Number(sum)
//   console.log(asum); 
//   for(let i = 0; i < asum.length; i++){
//       console.log(i)
//   }
    
// let avg = (number / n) * n.length

// console.log(avg)
}} numnum2('10 20 30 40 50')