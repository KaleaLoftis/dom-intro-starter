// Kalea Loftis


//ID Section ------------------------------
//get paragraph by ID that span withb tan class ans "This is new tan text" text content
document.getElementById("firstPara").innerHTML += " <span class='tan'>This is new tan text</span>";

//Tag Name Selection -----------------------------
// get images, change width to 250px
let images = document.getElementsByTagName("img");
console.log(images);

//iterate through each image and change width
for(let image of images){
    image.width = "250";
}

//Class name Section ----------------------------
// set med-blue span to: #3C5E73
// light blue to: #7C9EA6

let ltBluSpan = document.getElementsByClassName("light-blue");

let mdBluSpan = document.getElementsByClassName("med-blue");

for (let span of ltBluSpan){
    span.style.color = "#7C9EA6";
}

for (let span of mdBluSpan){
    span.style.color = "#3C5E73";
}


//CSS Selector (as a group)--------------------------------
//
let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"];

let svgs = document.querySelectorAll("#svgs svg");

//console.log(svgs);
//iterate through and change colors of each svg in the collection
for (let i = 0; i < svgs.length; i++){
    svgs[i].style.stroke = colors[i];
}


// individual element with css selector -------------
// get the first span on page with a class of bold
document.querySelector(".bold").style.color = "#7C9EA6";


//changing node content --------------------------------------
// changing content
document.querySelector(".content_list li:first-of-type").textContent = "this is new list item text";
// adding content 
document.querySelectorAll(".content_list li")[2].innerHTML += "<strong> Kalea Loftis</strong>";


//remove an attribute -----------------------------------
document.querySelector("#remove a").removeAttribute("hidden");


