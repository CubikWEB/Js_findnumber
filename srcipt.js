let number = prompt('Введите число')

let newArray = new Array
for(i=0;i<100;i++){
    newArray[i]= Math.round(Math.random()*1000);
}

newArray.sort((a, b) => a - b);

console.log(newArray)
function FindNumber(array, SetNumber){
    length = array.length
    selfLenght = Math.round(length/2)-1
    var FindNumbers
    if (SetNumber == array[selfLenght]){
        FindNumbers = array[selfLenght]
        return alert(FindNumbers)
    }
    else{
        if ( length <=3){

            if ((Math.abs(SetNumber-array[selfLenght]))>(Math.abs(SetNumber-array[selfLenght-1])))
                FindNumbers = array[selfLenght-1]
            else{
                FindNumbers = array[selfLenght]
            }
                
                return alert(FindNumbers)
        }
        else{
            console.log(SetNumber +">"+ array[selfLenght])
            if (SetNumber>array[selfLenght]){
                console.log("+")
                array = array.slice(selfLenght,length)

            }
            else{
                console.log("-")
                array = array.slice(0, selfLenght)
            }
            console.log(array)
            FindNumber(array,SetNumber)
        }
        
    }

}

FindNumber(newArray,number)