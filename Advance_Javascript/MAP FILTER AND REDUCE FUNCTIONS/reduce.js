//map,filer and reduce are higher order function


// reduce:reduce function is basciaclly used at the place where you have to take all the elements of an array and come up with a single  value of them

 const arr=[5,1,3,2,6]

 //sum or max


 function findSum(arr){   
    let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
}
return sum;
 }

 console.log(findSum(arr))
//  console.log(sum)

 //now use this logic in reduce function
 //This takes 2 parameter 
//  1.acc-->accumulator(accumulate the value which is present in array or accumulate the result)
//  2.curr-->current(current value which is represented in array)
 const output=arr.reduce(function(acc,curr){ // in this case--> acc is sum  and curr is arr[i]
//acc=sum
//curr=arr[i]
    acc=acc+curr;
    return acc;
 }, 0
 )  
 //This function is contain two parameters 
 //1.function 
 //2.initial value





 //find max value
 const arr2=[4,2,6,9,1]
 function findMax(arr){
    let max=0;
    for(let i=0;i<arr2.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
 }

 console.log(findMax(arr2));
 

 //now write this function using reduce
const output2=arr2.reduce(function (max,curr){
if(curr>max){
    max=curr;
}
return max;
},0)


console.log(output2);;
