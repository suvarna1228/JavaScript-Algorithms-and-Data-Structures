function binary(arr, target) {
    let leftindex = 0;
    let rightindex = arr.length - 1;

    while (leftindex <= rightindex) {
        let middleindex = Math.floor((leftindex + rightindex) / 2); // Fix the middle index calculation

        if (target === arr[middleindex]) {
            return middleindex;
        }

        if (target < arr[middleindex]) { // Fix the array access syntax
            rightindex = middleindex - 1;
        } else {
            leftindex = middleindex + 1;
        }
    }
    return -1; // If the target is not found, return -1
}

// Make sure the array is sorted before applying binary search
console.log(binary([-5, 3, 6, 7], 10)); // -1 (not found)
console.log(binary([-5, 3, 7, 9], 9));  // 3 (found at index 3)
