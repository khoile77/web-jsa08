// let number = [ 7 , 10 , 11 , 9 , 8 ,6 ,1, 1 ,7 ,10]

// let sum = number.reduce((sum, Element) => sum + Element ,0)
//  console.log(sum)

//  number.reverse()
//  console.log(number)

//  let max_val = number.reduce(function(accumulator, Element){
// 	return (accumulator > Element) ? accumulator : Element
//  })
//  console.log(max_val)

//  let mynumber = number.reduce (function(accumulator, Element){
// 	if (accumulator.indexOf(Element) === -1){
// 		accumulator.push(Element)
// 	}
// 	return accumulator
//  },[])
//  console.log(mynumber)


//  for(i=0 ; i < 11; i++){
// 	if(i % 2 ){
		
// 	}
// 	else{
// 		console.log(i)
// 	}
	
//  }
//  function number(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * number(x-1);
         
// }
// document.write(number(6));

// function kiem_tra_snt(n)
// {
   
//     if (n < 2){
//         alert("ko phai snt")
//     }
//     else if (n == 2){
//         alert("la snt")
//     }
//     else if (n % 2 == 0){
// 		alert("khong phai snt")
   
//     }
   
// }
// document.write(kiem_tra_snt(6))

let number = [ 7 , 10 , 11 , 9 , 8 ,6 ,1, 1 ,7 ,10]

number.push(20)
console.log(number)

number.splice(1,1)
console.log(number)

number.sort(function(a,b){
	return a-b
})
console.log(number)
