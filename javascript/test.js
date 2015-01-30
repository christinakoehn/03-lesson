// this is a single line comment in javascript 

/*  BLOCK COMMENT - good for whole sections being turned off - Command ? does this too */



//VARIABLES

//STRING TYPE OF DATA************************************
var userName = "christina"; //setting a variable 

userName = "emily"; //using a variable 

// the = is the assignment operator "sets to this"

var firstName = "christina";
var lastName = "koehn"; 

//Bad variable names: no numbers, no special symbols, no reserved key words (time, var, true, false, function) 
//var 1hi there = "something";
//var time = "12:30"; 

//Using single and double quotes 

var myComment = "who said this:";
var myQuote = '"all the world\'s a stage"'; //single quotes print literal characters
//var myQuote = "all the world&copy;s a stage";

//console.log(myComment); //shows the value of myComment to the console when we reload 
console.log(myQuote);

var message = firstName + " " + lastName; //joining 2 variables 
console.log(message);

//target and replace elements on the page...
var string1 = document.getElementById("string1");
string1.innerHTML = message;

var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
//console.log(imagePath);

message = message.toUpperCase();
//console.log(message);

//NUMBER ************************** (don't use quotes or numbers)
var level = 1; 
var lives = 3;
var ssNumber = 12346758949037; //this is integer not a float and not negative
var cost = 1.50; //this is a float type number any time there is a decimal place in a number
var cost1 = "50";
var cost2 = 50;
var total = Number(cost1) * cost2;
//console.log(total);

//console.log(level); 


/**** ARRAY DATA TYPE *****/ 

//create an array
var imageList = new Array; 
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";

//imageList.push("images/oil/thumbs/artwork_8.jpg");

var imagePlaceholder = document.getElementById('placeholder'); 
imagePlaceholder.setAttribute("src", imageList[6]); //update src attribute of the image 

//console.log(imageList.length);


/********************* BOOLEAN DATA TYPE *****/ 
//true or false, yes or no, 1 or 0

var oldEnough = false;
var hasContent = true; 

var age = 20;

/******************** IF/THEN STATEMENTS (branching logic, application logic, business logic) *****/ 
//check the age ... 

if(age <= 20 && age !=5){ //less than or equal
  //too young
  oldEnough = false; 
}else{
oldEnough = true;
}

if(oldEnough == true){
  // == means is equal to
  // = means get set to 
  //more code here 
 // console.log("you may go on the rollercoaster");
}else{
 // console.log("you may NOT go on the rollercoaster.");
}


/********************* FUNCTIONS ********************/ 

function dynamicGreeting(){
//create the built-in date object 
  var now = new Date();
  var time = now.getHours(); //extract the hours 
  
  if(time < 12){
    alert("good morning");
}
  
  if(time == 12);{
    alert("time to eat lunch at luna park");
  }
  
  if(time > 12){
    alert("good evening, the time is..." + now.toLocaleString());
  }
}

dynamicGreeting();