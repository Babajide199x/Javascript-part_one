//javascript variable amd data type

//There are three ways: var, let, const

//Data types
    //string: text data, words or sentences (any value inside "" or '' is a string)
    //Number
    //Boolean (True or false)
    //Null: absence of any value
    //undefined: a variable without any value
    //symbol: unique identifier
    //JSON: (Javascript Object Notation)
    //array
    //object

    let name = "John Doe" //variable is "name" while the value is "John Doe"
    //console.log( typeof name)

    let age = 20 //this is a number or an integer because it doesn't have quote ""
    //console.log(typeof age)
    // console.log(age)
    // console.log(typeof age)

    let anotherAge = "20"
    // console.log(anotherAge)
    // console.log(typeof anotherAge)

    //Boolean data type
    let isAvailable = true

    let isEaten = false
    // console.log ( typeof isAvailable)

    let car = null
    // console.log( typeof car)

    //Javascript Operators 
        
    
        // var a = 6;
        // var b = 4;
        // You can only perform arithmetic operation on data type which are numbers
        // console.log(a + b) //Addition
        // console.log(a - b) //Subtraction
        // console.log(a * b) //Multiplication
        // console.log(a / b) //Division
        // console.log(a % b) //Modules

        let Emmanuel = 25 
        let HouseNo = "56"
        //when you concatenate a var of type Number and Type String it covert to string

        // console.log(Emmanuel + HouseNo) //concatenation: where two or more into a singular string

        let Joe = 20;
        let CarNo = "53";
        let combine = Joe + CarNo
        // console.log(typeof combine)


//Assignment Operator: Assignment operators are used to assign values to JavaScript variables.
    let x = 6
    x -=5
    // console.log(x)
//Comparison Operator: Comparison operators always return or output either true or false
    let a = 7
    let b = 3
    let c = "7"
    let d = 3

    // console.log( a > b) //Greater than
    // console.log( a < b) //Less than
    // console.log( a == b) //equal to
    // console.log( a == c) //equal to
    // console.log( a === c) //equal value and equal type
    // console.log( b === d) //equal value and equal type
    // console.log( b != d) //Not equal 
    
//LOGICAL OPERATORS: Logical operators are used to determine the logic between variables or values.
    //AND: &&
    //OR: ||
    //NOT: !

    let p = true
    let q = false
    let r = false
    let s = true
    let t = false
    //(When using AND  operator, all condition must be true to return true)
    // console.log(p && q) //False // this will be false because "q" is false which made the output false.


    //(when using OR operator, all condition must be true irrespective of a false variable)
    // console.log(p || q) //true

    // console.log(p && q && r && s) //the moment one of them is false, outcome becomes false
    // console.log(p || s || t) //the moment p is true, everything becomes true

    // //NOT operator
    //     console.log(!p)
    //     console.log(!t)


//CONDITIONAL STATEMENTS
    //IF, ELSE IF, SWITCH

    // let agex = 12
    // if(agex > 18){
    //     console.log("You are an adult")
    // }else if(agex < 18 && agex >= 13){
    //     console.log("You are a teenager")
    // }else {
    //     console.log("You are a child")
    // }

    //SWITCH
    // let day = 9
    // let dayName

    // switch(day){
    //     case 1:
    //     dayName: "Monday";
    //     break;
    //     case 2:
    //         dayName = "Tuesday";
    //     break;
    //     case 3:
    //         dayName = "Wednesday"
    //     break;
    //     case 4:
    //         dayName = "Thursday"
    //     break;
    //     case 4:
    //         dayName = "Friday"
    //     break;
    //     case 6:
    //         dayName = "Saturday"
    //     break;
    //     case 7:
    //         dayName = "Sunday"
    //     break;
    //     default: 
    //     dayName = "Invalid Day"
    // }
    //     console.log(dayName)

//LOOPS
   //for loop
   //while loop
   //Do..while loop

   //for loop; Initiation, Condition, Increment/Decrement

   for(let i = 3; i < 10; i++){
    console.log(i)
   }
   let i = 0
   while(i < 5){
    console.log(i)
    i++
   }