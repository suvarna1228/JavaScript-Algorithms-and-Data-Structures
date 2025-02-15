function mergesort(arr){
    if(arr.length<2){
       return arr;
    } 
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergesort(leftArr),mergesort(rightArr))
      }

      function merge(leftArr,rightArr){
        const sorted=[];
        while(leftArr.length&& rightArr.length){
            if(leftArr[0]<= rightArr[0]){
                sorted.push(leftArr.shift())
            }else{
                sorted.push(rightArr.shift())
            }
        }
        return [...sorted,...leftArr,...rightArr]
      }
      const arr=[4,-7,3,-1,54,23];
      
      console.log(mergesort(arr));
     //  o(n2)