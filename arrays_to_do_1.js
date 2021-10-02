// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront (arr, val){
    var arrLength = 0;

    while (arr[arrLength] !== undefined){
        arrLength++
    }

    for (i = arrLength; i >= 0; i--){
        if (i != 0){
            arr[i] = arr[i-1];
        }else{
            arr[i] = val;
        }
        
    }
    return arr;
}

var testArr = [1,2,3];
var testVal = 0;
console.log("Adding " + testVal + " to front of array " + testArr)
console.log(pushFront(testArr, testVal))
console.log(testArr)


// 2. Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront (arr){
    var arrLength = 0;

    while (arr[arrLength] !== undefined){
        arrLength++
    }
    var front = arr[0];
    for (i = 0; i < arrLength-1; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return front;
}

var testArr = [1,2,3];
console.log("Removing " + testArr[0] + " from front of array " + testArr + " and returning " + testArr[0])
console.log(popFront(testArr))
console.log("Passed array new value " +testArr)


// 3. Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt (arr, idx, val){
    var arrLength = 0;

    while (arr[arrLength] !== undefined){
        arrLength++
    }

    for (i = arrLength; i >= idx; i--){
        if (i != idx){
            arr[i] = arr[i-1];
        }else{
            arr[i] = val;
        }
        
    }
    return arr;
}

var testArr = [1,2,4,5];
console.log(insertAt(testArr, 2, 3))

// 4. Remove At (Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).



// 5. Swap Pairs (Bonus Challenge)
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.



// 6. Remove Duplicates (Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops.