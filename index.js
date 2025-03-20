// Task 1: Declare a variable called 'name' and assign it your first name.  
// To do this, use the 'let' keyword followed by the variable name, an equal sign, and your name in quotes.  
// The variable name should have no spaces, begin with a lowercase letter, and describe the contents of a variable
// e.g. For example, an animal variable would look like: let animal = "cat"
let name = "Sophia"


// Use console.log() to print the variable by placing the variable name inside the parentheses.  
// To run your code, in the Terminal, type node index.js and you should see your name show up!

console.log(name)
// Task 2: Reassign the variable to include your last name.
// Reference the variable name (no let since you aren't making a new variable) and an equal sign to re-assign it
// After the equals sign, put the variable name with a + sign to add your last name in quotes (with a space)
name = "Rivera"


// Use console.log to print the updated variable and run it in the Terminal to test
console.log(name)

// Task 3: Declare a variable 'greeting' and assign it a string that says "Hello, my name is " followed by the 'name' variable.  

let greeting = "Hello my name is"

// Print the variable and run it to test
console.log(greeting)

// Task 4: Declare a variable 'age' and assign it your age as a number.  
// It's declared the same way as your name but with no quotes since age is a number.  
let age = 17


// Print "My age is" with your age and run it to test
console.log("My name is " + age)

// Task 5: Create an object called 'favoriteMovie' with keys: name (string), genre (string), rating (number).  
// Use curly braces {} to define the object, and inside, write key-value pairs separated by colons (:). 
// Each line has one key-value pair separated by a comma.  
// For example, a teacher object would look like: 
// let teacher = {
//     name: "Ms. Pham",
//     age: 27
// }

let favoriteMovie = {
    name: "Shes the man",
    genre: "Rom com",
    rating: 4.4,
}

// Print the object (same as any other variable) and run it to test
console.log(favoriteMovie)

// Task 10: Change the rating to be 5
// Access the 'rating' key using objectName.keyName
// For example, changing Ms. Pham's age would look like: teacher.age = 28

favoriteMovie.rating = 5,

//  Print the updated object and run it to test
console.log(favoriteMovie)

// Task 11: Add a new key to the 'favoriteMovie' object called 'quote' and assign it a string value.  
// You add a new key the same way that you change a key's value
favoriteMovie.quote = "When I close my eyes I see you for who you really are, which is UGLY - Viola"


//  Print the updated object and run it to test
console.log(favoriteMovie)

// Task 12: Print a sentence using all the keys inside the object
// If you are curious, look up template literals for another way to print!
console.log("My favorite movie is "+favoriteMovie.name+", its genre is "+ favoriteMovie.genre+" and its rating is "+" and my favorite quote from the movie is "+ favoriteMovie.quote)

// Run your code and make sure everything works before submitting!