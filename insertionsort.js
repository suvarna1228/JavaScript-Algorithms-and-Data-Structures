function insertion(arr){
 for(let i =1;i<arr.length;i++){
    let numbeertoinseert=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]>numbeertoinseert){
        arr[j+1]=arr[j];
        j=j-1;
    }
    arr[j+1]=numbeertoinseert
 }
}
const arr=[4,-7,3,-1,54,23];
insertion(arr);
console.log(arr);
// o(n2)