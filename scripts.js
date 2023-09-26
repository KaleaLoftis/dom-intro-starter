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
