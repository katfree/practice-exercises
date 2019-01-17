// // Create a function called `go` that takes 2 arguments: 
// // 1. direction (forwards, backwards, etc.)
// // 1. speed (mph).

// // The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.`

// // const go = (direction, speed)  => {
// //     console.log(`the car is moving ${direction}, at ${speed}, mph`)
// // }



// // go("sideways", 20)
// // if(speed > 75) {
// //     console.log( `SLOW DOWN!!!!!!!`)
// // }



// // Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// // Example:

// // The car is moving forward at 82 mph
// // SLOW DOWN!





// // Loop over every item in this array:

// // [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

// // Return a new array that contains only strings. Log out the result.

// // Hint: The typeof operator

// // const stuff = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"];
// // let newStuff = [];
// // for (let index = 0; index < stuff.length; index++) {
// //     const element = stuff[index];
// //     if (typeof element === `string`) {
// //         newStuff.push(element);
// //     }
// // }
// // console.log(newStuff)


// // const newArray = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark" }, "JS", "rockstar"].filter(item => typeof item === "string")



// // Lightning Exercise: Given the object below, output each of the values to the console using dot notation.
// // const wardrobe = {
// //     height: 80,
// //     manufacturer: "Killibrew & Sons",
// //     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
// //     depth: 38,
// //     width: 50
// // }










// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(`height: ${wardrobe.height}, manufacturer: ${wardrobe.manufacturer}, contents: ${wardrobe.contents}, depth: ${wardrobe.depth},
// width: ${wardrobe.width}`)

// // wadrobe.material = "cedar"
// wardrobe.contents.push("baseball hat")

// console.table(wardrobe)




// // Lightning Exercise 3: Define an object for four family members, 
// // and put each object in an array named familyMembers. 
// // Each family member object that you create should have the same keys on 
// // them, but the values will be different.

// const dad = {
// name: "chris",
// age: 43,
// birthmonth:"november",
// eyecolor:"brown",

// }

// const sister = {
//     name: "brittany",
//     age: 21,
//     birthMonth: "May",
//     eyeColor:"green",
// }

// const mom = {
//     name: "amanda",
//     age: "40",
//     birthMonth: "may",
//     eyeColor: "blue",
// }

// const familyMembers = [mom, sister, dad]

// console.log(familyMembers) 

// const keytofind = "name"

// const momName = mom.name 
// const momName2 = mom[keytofind]

// console.log(
//     mom.name
// )
// console.log(
//     momName2
// )


// const index = momName[0]
// console.log(index) 


// // display the animals


// const kennel = {
//     name: "Nashville North Kennels",
//     address: "100 Demonbreun Road",
//     manager: "Harper Frankstone",
//     capacity: 50,
//     currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
//  }

// const animalName = kennel.currentAnimals


// console.log(animalName) 



// // Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// // Lightning Exercise 2: Output only Andy and Zoe in the console.

// const nashvilleSoftwareSchool = {
//     founded: 2012,
//     director: "John Wark",
//     instructors: {
//         fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
//         partTime: ["Zoe", "Nathan"]
//     },
//     address: "500 Interstate Blvd. S"
// }

// const ptName = nashvilleSoftwareSchool.instructors.partTime
// const ftName = nashvilleSoftwareSchool.instructors.fullTime
// console.log(ptName,ftName)



//     for(let i = 0; i < ptName.length;i++) {
//         const currentElement = ptName[i];
//         console.log(currentElement);
//     }
//     for(let i = 0; i < ftName.length;i++) {
//         const currentElement = ftName[i];
//         console.log(currentElement);
//     }


//     console.log(ftName[4])
//     console.log(ptName[0])






// //     1. Design a function named `evenOrOdd` that take a single number as an argument.
// // 2. It should return the string "Even" if the number is evenly divisible by two.
// // 3. It should return the string "Odd" if the number is not evenly divisible by two.

// // const evenOrOdd = originalNumber => {
// //     if(originalNumber % 2 === 0) {return "even"}
// //     return "odd"
// // }

// // const numbers = [1, 2, 3, 4, 5, 6]

// // for (let i = 0; i < numbers.length;i++) {
// //     const currentNumber = numbers[i];
// //     const itwaseveorodd = evenOrOdd(numbers)
// //     console.log(itwaseveorodd)  

// //     numbers.forEach(currentNumber => {
// //         const itWasEvenOrOdd = evenOrOdd(currentNumber)
// //          console.log(itWasEvenOrOdd)}) 







// // for (let currentNumber = 1; currentNumber <= 100; currentNumber++){
    
// // }



//     // const chickenorMonkey = currentNumber => 
//     // {if (currentNumber % 5 ==  0) return currentNumber("chicken")}


//     // if (currentNumber % 5 ==  0)

//     // for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     //     console.log(currentNumber)
//     //     if(currentNumber % 5 === 0 && currentNumber % 7 ===0){
//     //         console.log("ChickenMonkey")
//     //     }
//     //     else{
//     //     if (currentNumber % 5 === 0) {
//     //         console.log("chicken")}
            
//     //         if (currentNumber % 7 === 0) {
//     //         console.log('monkey') }
//     //     } 
            
//     // }


//     for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

//         let output = `${currentNumber}: `
    
//         if (currentNumber % 5 === 0) {
//             output += "Chicken"
//         }
    
//         if (currentNumber % 7 === 0) {
//             output += "Monkey"
//         }
    
//         console.log(output)
    
//     }


//     // for (var i=1; i < 101; i++){
//     //     if (i % 7 == 0 && i % 5 == 0) console.log("ChickenMonkey");
//     //     else if (i % 7 == 0) console.log("Monkey");
//     //     else if (i % 5 == 0) console.log("Chicken");
//     //     else console.log(i);
//     //  }```









// // Use string template literal syntax to create the sentence below from the following variables:


// const age = 30
// const timeSpan = 25
// const futureAge = age + timeSpan
// const name = "Biff"
// const generationStereotype = "millenial"
// const dadJoke = "milleni-old"

// // Your sentence should look like this.

// // "Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. In 25 years I'll be 55! I guess that means I'll be a milleni-old then. Ha ha!"

// // Output the sentence to the Developer Console
    


// console.log(`Hi. My name is ${name}, and im ${age} years old. They say that makes me a ${generationStereotype}! In ${timeSpan} years ill be ${futureAge} years old! I guess that means I'll be a ${dadJoke} then. Ha ha! `)






// // Use dot notation to access the value of the key "meaning_of_life" in this object

// let hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//         copies_sold: 14000000,
//         formats: ["radio", "TV", "film", "graphic novel"],
//         ultimate_answer: {
//             meaning_of_life: 42
//         }
//     }
// };

// console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life )

// let meaning = (hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life)

// console.log(meaning)

// // Now access it using a variable called "meaning": let meaning = "meaning_of_life"

// let meaningg = "meaning_of_life" 

// let meaningofLife = hitchhikers_guide.random_facts.ultimate_answer[meaningg]

// console.log(meaningofLife)



// // A local nightclub is having a Battle of the Bands night in a few months. 
// // They expect many bands to sign up because the grand prize is $20,000. 
// // To make things easier on the nightclub management, they want each band to be 
// // assigned a number so that they can easily keep track of the order in which the 
// // bands will perform.

// // Your job is to write a function that accepts any band name as an argument.
// //  The function will increment a global variable by one each time it is invoked, 
// //  and return that number, and the band name concatenated together.



//  let bandNumber = 1

// const takeNumber = function (bandName) {


//    return `${bandNumber++} ${bandName}`
// };
     
// // what you should do as a professional:
// // const takeNumber = (bandName) ==> `${bandNumber}. ${bandName}` 
    

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

//  const under = takeNumber("Underdogs")
//  console.log(under)  // This should print "2. Underdogs" in the console    




//  const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }

// // An first array containing the objects to be cooked.
// const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// // An empty array that will store the objects after the `grill()` function cooks the food.
// const cookedFood = [];

// function grill (currentObject){
// for (let index = 0; index < uncookedFood.length; index++) {
//     const currentObject = uncookedFood[index];
//     currentObject.cooked = true;
//     cookedFood.push(currentObject);
// }
// }


// grill(uncookedFood)
// console.log(cookedFood)


// Create an object that represents your pet.



const pet = {
    species: "Dog",
    breed: "Papillon",
    nickNames: ["buddy", "pal"],
    age: 12

}



 
// You need to write code to represent the process of ordering food at a fast food joint.
//  Your restaurant is Bob's Burgers, and you have some starter code below. The object 
//  will 
//  have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to
//  define this.
// Define a function to represent the behavior of placing an order. It should accept 
// one argument 
// named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return
//  the order 
// property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), 
// and drinkSize.


// const restaurant = {
//     name: "Bob's Burgers",
//     orders:[],
//     placeOrder: function (meal) {
//         this.orders.push(meal)
//     },
//     getAllOrders: function (){
//         return this.orders
//     }
// }

// const chickenComboMeal = {
// sandwhichType: "chicken",
// fries: true,
// drinkSize: "L"
// }
// // Place an order
// restaurant.placeOrder(chickenComboMeal)

// const allOrders = restaurant.getAllOrders()
// console.log(allOrders)




// You have volunteered your time to a local political candidate, Elizabeth Sanger, 
// who wants to become a US representative in Congress for your district. Unfortunately, 
// the team discovered that you're a software developer, so they have begged you to build an 
// application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the 
// corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Her congressional district (you can use yours here)

// Her platform statements for the following issues.
// Taxes
// Jobs
// Infrastructure
// Health care
// Crime and enforcement
// 

// URL for donation form

// Calendar of events

// Volunteer information

// Name
// Address
// Email
// Phone number
// Availability

// What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)

// Biography

// Image gallery

// Head shot
// Picture of family
// Picture of constituents
// Mission statement
// URL for registering to vote








const campaign ={
        candidate: {
        
        name: "Elizabeth Sanger",
        
        
        imageGallery: {
            headShot:"",
            picofFamily:"",
            picofConstituents: "",
        },

        district: 6,
        
        Biography:"",
       
        missionStatement:"",


        platformStatements: {
            taxes:"",
            jobs:"",
            infastructure:"",
            healthcare:"",
            crimeandEnforcement:"",
        },

         urltoRegistertoVote:"",

         urltoDonate:"",


    },

    volunteerInfo: {
        
        volunteers: [],
        
        volinfo: function (info){
            campaign.volunteerInfo.volunteers.push(info)

        }
        
        
    }

}


const volunteerOne = {
        Name:"jane doe", 

        address:" jane doe adress",

        Email:"janedoe@email.com",

        phoneNumber:"555555555",

        availability:"24/7",

        activityWillingness:"phone calls",
}

campaign.volunteerInfo.volinfo(volunteerOne)

console.log(campaign.volunteerInfo.volunteers)









// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as 
// arguments.
// 3. Invoke each function a couple times with different argument values.

const addTwoNumbers =(first, second) => console.log(first + second)

const subtractTwoNumbers = (first, second) => console.log(first - second)

// addTwoNumbers(11, 22)
// subtractTwoNumbers(22,11)

// `Create another function called` calculate` that takes three arguments:
//  two numbers and a function`

const calculate = (first, second, fn) => {
    fn(first, second)
}

calculate(222, 22, subtractTwoNumbers)
calculate(111, 11, addTwoNumbers)








// Create an unordered list element
const list = document.createElement('ul')

// Create a list item for our list
const listItem = document.createElement('li')
listItem.className = "president"
listItem.textContent = "George Bush"

// Put the list item on the unordered list
list.appendChild(listItem)

console.log(list)












const fragment = document.createDocumentFragment()

const msg1 = document.createElement("section")
msg1.className = "message"
msg1.textContent = "message one"
fragment.appendChild(msg1)

const msg2 = document.createElement("section")
msg2.className = "message"
msg2.textContent = "message two"
fragment.appendChild(msg2)

const msg3 = document.createElement("section")
msg3.className = "message"
msg3.textContent = "message three"
fragment.appendChild(msg3)

const msg4 = document.createElement("section")
msg4.className = "message"
msg4.textContent = "message four"
fragment.appendChild(msg4)

const msg5 = document.createElement("section")
msg5.className = "message"
msg5.textContent = "message five"
fragment.appendChild(msg5)

document.querySelector("#messages").appendChild(fragment)







