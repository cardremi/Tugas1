function minus(array) {
    let bool=true;
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number'){
            array[i] *= -1
        }else{
            bool = false
            break;
        }
    }bool==true?console.log(array):alert("not int");
}
minus([1,2,3,4,5])