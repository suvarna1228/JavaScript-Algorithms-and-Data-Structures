function linear(arr,target){
    for(let i =0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }return -1

}
console.log(linear([-5,7,3,6],10))
console.log(linear([-5,7,3,9],9))