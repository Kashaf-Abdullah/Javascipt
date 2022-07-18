
//In js ,Iterators is an object which define a sequence and potentially a return values upon its termination
//Iterators

function fruitsiterator(values) {
    let nextIndex = 0;

    //we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                //we wil return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {

                return {                    //we will return below object with only done
                    done: true

                }
            }
        }
    }


}



const myArray = ['Apples', 'Grapes', 'Banana']
console.log(myArray)


//using the iterator
const fruits=fruitsiterator(myArray)
console.log(fruits.next())//first apple print
console.log(fruits.next())//second grapes print
console.log(fruits.next().value)//third banana print
console.log(fruits.next().value)//fourth undefine print because in array we have only 3 elements

