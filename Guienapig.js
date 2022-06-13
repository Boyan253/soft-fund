function guniea(input) {

let quantityfoodinkilograms = Number(input[0]) * 1000;
let quantityhayinkilo = Number(input[1]) * 1000;
let quantitycoverinkilo = Number(input[2]) * 1000;
let guineaweightinkilo = Number(input[3]) * 1000

for (let i = 1; i <= 30; i++) {
    
    quantityfoodinkilograms -= 300
    if(i % 2 == 0) {
    quantityhayinkilo -= quantityfoodinkilograms * 0.05;


    } if (i % 3 == 0) {
        quantitycoverinkilo -= guineaweightinkilo * 1/3

    }
if(quantityfoodinkilograms <= 0 || quantityhayinkilo <= 0 || quantitycoverinkilo <= 0) {
    break;
}

}  quantityfoodinkilograms = quantityfoodinkilograms / 1000 
   quantitycoverinkilo = quantitycoverinkilo / 1000
 quantityhayinkilo = quantityhayinkilo / 1000
 


if(quantityfoodinkilograms > 0 && quantityhayinkilo > 0 && quantitycoverinkilo > 0) {
    console.log(`Everything is fine! Puppy is happy! Food: ${quantityfoodinkilograms.toFixed(2)}, Hay: ${quantityhayinkilo.toFixed(2)}, Cover: ${(quantitycoverinkilo.toFixed(2))}.`);
    
} else { console.log("Merry must go to the pet store!")}
}guniea([10,
    5,
    5.2,
    1	
    
  ]);