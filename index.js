

 //tonnnage validation
 let procurementTonnage= 5000;
 let minTonnage=1000;
 let isValid= procurementTonnage>=minTonnage;
 console.log(isValid)

 // strictness check
 let costStr="5000";
 let costNum=5000;

let cost1=costStr==costNum;
let cost2=costStr===costNum;

 console.log(cost1)

 console.log(cost2)// using === for KGL is safer to avoid bug in data processing


 //use of && operator

 let dealearName="Christ"
 let costUgX= 50000;
 let isvalid= costUgX>=10000;

 console.log((dealearName.length>=2)&& isValid);

 //date() object 
 let date = new Date();
 let day= date.getDate();
 let month= date.getMonth()+1// 0-index, 
 let year= date.getFullYear()

 let today=`${day}/${month}/${year}`

 console.log(today)
 
