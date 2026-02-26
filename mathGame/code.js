 addEventListener("load", (event) => {
// Just include the script and run this:


////Maybe we can have some bool statements here to have as condiations for many if statements in the event listeners and on what to render.
//state1 bool ///math problems
//state2 bool ///Stat shop
//state3 bool ///Wave surivial with the dice thing. Then we have a attack or heal button
    ///Maybe we can have a main loop with 3 if blocks checking for each state. 



    ///! we just going to write sudo code now do not worry about making it work or the details. 
var gameStateOne = true;
var gameStateTwo = false; 
var gameStateThree = false;

//event listeners 
    ///We can make a event listener for each card. 
    ///We will id each html element we want to have a event listener for. 
    //These will be conditioned by the bool, update the screen if needed. For example we can have a lock var that will be turned
    //false if a gamestate changes, then run once, and turn true, just to render the screen one time. 
        ///Well we will also have to update and add a new card each time. 



     ///Should we store the element variable within the cardlist object    
const element = document.querySelector('#myElement');


///Last edited answer box object
//We need a way to know what answer box was edited so we can now what answer to test when enter is pressed. 



element.addEventListener('click', (event) => {
  // Use event.target to get the clicked element
  console.log('Clicked!', event.target);
});

var lastStateOneAnswerBox = {
    id: " ",
    //Going to have to convert the value to a number. Maybe we just change the input html to only accept numbers than.
        ///This is no longer needed as we have forced the input to only accept numbers.  
    value: " ",
    ///Maybe have a check method here that will automatically pull from the cards object. And will have if block if it matches


}

///READ: Instead of making a shit ton of id's we are just going to save the element of whatever was clicked, maybe
    ///maybe not all encomcing but that will be the main solution for whatever I was thinking of when I wrote this. 



document.addEventListener('click', (event) => {
  // Check if the clicked element is an input text box
  if (event.target.tagName === 'INPUT' && event.target.type === 'text') {
    const clickedInput = event.target;
    
    console.log("Element ID:", clickedInput.id);      // Gets the ID
    console.log("Current Text:", clickedInput.value); // Gets the current text
  }
});



///Card object
/*
    maybe we just hard code all 8 and link them some way to

*/

    ///Remember we are just trying to get barebones something working, plan to refactor the code. 
var cards = {
    ///Methods we need
    //render
    //update specific card data, we need to keep this O(1)
    //This is just a data structure for the event listeners to pull from. 
    //have a method that will handle adding and removing cards. 
    initalizeCards: function(){

    },


    updateCards: function(index){
        ///Maybe put the render method we wanted in here. 
    },



    cardsList:{
        card1: {
            goldValue: 0,
            problemString: "5+5",
            problemAnswer: 10,
            
        }
    },

}




///So we will just have the states to control flow and event listeners for our algorithm.
///For data structure we will use the card object for the first state. And the other two states can 
    ///Use a object for two stat cards which can also have there methods. 


///We are writting the scripts for the first state of the game.


////Maybe create a object of objects and each objects has each cards values, question, answer, input box, etc, 

//// Here we have all of our event listeners\\\\

/// Here we have a object cotaining all the cards. \\\\
    //////We also need a function to iniatize a new card and maybe we can make that a method in the cards object



///We will need a loop here that counts down based on what the timer is set too. 



///Check for whenever enter is hit and any input boxes that contain the correct answer, we remove and add to the coin count.
    ///Maybe just check whatever box had a value entered in next. 
    ///We want to keep big O in mind because using objects we want to make sure we are not doing any searching as 
        ///As i do not think it will be nessary for this project. 








    


//For on load.
});