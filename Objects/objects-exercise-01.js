// 1. Create an object that represents your favourite coffee.Please include coffee name,
//     strength, flavour, milk, sugar, …everything you like!

var coffee = {
    name: "espresso",
    strength: "strong",
    flavour: "arabica",
    milk: "no",
    sugar: "no",
};

//     2. Create an object that represents your favourite movie.Please include title, actors,
//     director, genre, popularity.
var favouriteMovie = {};

// 3. Write a
// function that creates an object that represents a project.Each project is
// described by: description, programming language, git repository, boolean status that
// says
// if the project is in development or not.Add a method that prints out the project's
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.
console.log("*****3*****");

function createProject(descr, programmingLang, gitRepo, booleanStatus) {
    var project = {
        description: descr,
        programmingLanguage: programmingLang,
        gitRepository: gitRepo,
        projectStatus: function() {
            if (booleanStatus == true) {
                return "The project is finished.";
            } else {
                return "The project is in development.";
            }
        },
        writtenLanguage: function() {
            if (project.programmingLanguage == "JavaScript") {
                return (
                    "Yes, the program is written in" + project.programmingLanguage + "."
                );
            } else {
                return "No, program is not writtne in JavaScript";
            }
        },
    };
    return project;
}
var project1 = new createProject("Calculator", "JavaScript", "gitUrl", true);
console.log(project1);
console.log(project1.projectStatus());
console.log(project1.writtenLanguage());

/* 4. Write a function that creates an object that represents a culinary recipe. 
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.
*/
console.log("*****4*****");

function createRecipe(nam, cuisine, complex, ingred, time, instruction) {
    var recipe = {
        name: nam,
        typeOfCuisine: cuisine,
        complexity: complex,
        ingredients: ingred,
        prepTime: time,
        prepInstructions: instruction,
        printAllIngredients: function() {
            return recipe.ingredients;
        },
        checkPrep: function() {
            if (recipe.prepTime <= 15) {
                return "Can be prepared for " + recipe.prepTime + "minutes.";
            } else {
                return "No, meal can't be prepared for 15 minutes.";
            }
        },
        changeCuisine: function(newCuisine) {
            return (recipe.cuisine = newCuisine);
        },
        deleteIngredient: function(remIng) {
            // var newIngredients = [];

            // for (var i = 0; i < recipe.ingredients.length; i++) {
            //     if (recipe.ingredients[i] != remIng) {
            //         newIngredients[newIngredients.length] = recipe.ingredients[i];
            //     }
            // }
            // return newIngredients;

            for (var i = 0; i < recipe.ingredients.length; i++) {
                if (recipe.ingredients[i] == remIng) {
                    delete recipe.ingredients[i];
                }
            }
            return recipe.ingredients;
        },
    };
    return recipe;
}

var recipe1 = createRecipe(
    "Chicken Soup",
    "Worldwide",
    3, ["carrot", "chicken meat", "salt", "noodles", "water"],
    90,
    "Place a large dutch oven or pot over medium high heat and add in oil..."
);
console.log(recipe1);
console.log(recipe1.printAllIngredients());
console.log(recipe1.checkPrep());
console.log(recipe1.changeCuisine("Serbian"));
console.log(recipe1.deleteIngredient("salt"));