// Find the index of "needle"

// My solution 

function find(arr){
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] == "needle") {
            return "found needle at position " + i; 
        } else {
            continue; 
        }
    }    
}

console.log(find(["La", "guagua", "needle", "es", "cubana"]));

// Optimal solution

function findneedle(arr){
    return "needle found at position " + arr.indexOf("needle");
}

console.log(findneedle(["La", "guagua", "needle", "es", "cubana"]));
