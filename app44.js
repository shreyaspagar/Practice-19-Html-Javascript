let array = [1,2,3,4,5,6,2,3];
let num = 2;
for (i=0; i<array.length; i++) {
    if(array[i] == num) {
        array.splice (i , 1);
    }
}


console.log(array);




