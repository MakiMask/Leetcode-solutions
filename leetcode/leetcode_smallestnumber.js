function findSmallestInt(arr) {
    let smallest_number = arr[0]; // Start by assuming the first element is the smallest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest_number) {
            smallest_number = arr[i];
        }
    }
    return smallest_number; 
}

console.log(findSmallestInt([1, 23, 40]));