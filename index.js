let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6
};

let loyalDoggy = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5
};

let invinciBear = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1
};


// After you have created the other object literals, add the astronautID property to each one.

/* 12.7.1.1. Add a New Property

For each animal, add a property called astronautID. Each astronautID should be assigned a number between 1 and 10 (including 10). However, no crew members should have the same ID.
*/

superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
loyalDoggy["astronautID"] = 4;
invinciBear["astronautID"] = 7;

console.log(superChimpOne);

console.log("\n");

/* 12.7.1.2. Add a Method

Add a move method to each animal object. The move method will select a random number of steps from 0 to 10 for the animal to take. The number can be 0 as well as 10
*/

function move() {
  return Math.floor(Math.random()*11) + " steps";
}

//console.log(move());

superChimpOne["move"] = move();
salamander["move"] = move();
superChimpTwo["move"] = move();
loyalDoggy["move"] = move();
invinciBear["move"] = move();

console.log(superChimpOne);
console.log(salamander);
console.log(superChimpTwo);
console.log(loyalDoggy);
console.log(invinciBear);

// Create an array to hold the animal objects.

/* 12.7.1.3. Store the Objects

 Create a crew array to store all of the animal objects */

let crew = [superChimpOne, salamander, superChimpTwo, loyalDoggy, invinciBear];

// Print out the relevant information about each animal.

/* 12.7.2. Part 2: Crew Reports

Upper management at the space base wants us to report all of the relevant information about the animal astronauts.

Define a crewReports function to accomplish this. When passed one of the animal objects, the function returns a template literal with the following string: '____ is a ____. They are ____ years old and ____ kilograms. Their ID is ____.'

Fill in the blanks with the name, species, age, mass, and ID for the selected animal 
*/

function crewReports (animal) {
  for (item in animal) {
    console.log(`${animal.name} is a\(n\) ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`);
    return item;
    }
};

console.log(crewReports(invinciBear));

// Start an animal race!

/*

12.7.3. Part 3: Crew Fitness

Before these animal astronauts can get ready for launch, they need to take a physical fitness test. Define a fitnessTest function that takes an array as a parameter.
*/

/*
function fitnessTest (array) {
  let numOfSteps = 0;
  let newArr = [];
  for (let i=0; i < crew.length; i++) {
    numOfSteps = crew.move();
    if (numOfSteps >= 20) {
      return (`${crew[i].name} took ${crew[i].move} turns to take 20 steps.`);
    } else {
      numOfSteps = numOfSteps + numOfSteps[i];
    }     
  }
};

*/

// Within the function, race the five animals together by using the move method. An animal is done with the race when they reach 20 steps or greater. Store the result as a string: '____ took ____ turns to take 20 steps.' Fill in the blanks with the animal’s name and race result. Create a new array to store how many turns it takes each animal to complete the race.

// Return the array from the function, then print the results to the console (one animal per line).

// HINT: There are a lot of different ways to approach this problem. One way that works well is to see how many iterations of the move method it will take for each animal to reach 20 steps.



//console.log(fitnessTest(crew));