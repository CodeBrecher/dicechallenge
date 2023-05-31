
var random_number1 = Math.floor(Math.random()*6)+1;
var image_source1 = "./images/dice"+random_number1+".png";
document.querySelectorAll("img")[0].setAttribute("src", image_source1);

var random_number2 = Math.floor(Math.random()*6)+1;
var image_source2 = "./images/dice"+ random_number2+".png";
document.querySelectorAll("img")[1].setAttribute("src", image_source2);         


if(random_number1>random_number2){
    document.querySelectorAll("h1")[0].innerHTML="Player 1 wins"
}
else if (random_number1<random_number2){
    document.querySelectorAll("h1")[0].innerHTML="Player 2 wins"
}
else{
    document.querySelectorAll("h1")[0].innerHTML="Tie"

}
  
  