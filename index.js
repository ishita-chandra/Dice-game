var n1=prompt("Enter the name of Player 1");
var n11=n1;
var n2=prompt("Enter the name of Player 2");
var n22=n2;
if(n1===""||n2===""||n1===null||n2===null)
{
  document.querySelector(".moto").innerHTML="Can't Play";
}
else{
n1=(n1.slice(0,1)).toUpperCase()+(n11.slice(1,n11.length));
n2=(n2.slice(0,1)).toUpperCase()+(n22.slice(1,n22.length));
document.querySelector(".dice1 .player").innerHTML=n1;
document.querySelector(".dice2 .player").innerHTML=n2;
var randomNumber1=Math.floor(Math.random()*6)+1;
var b=document.querySelector(".img1");

if(randomNumber1===1){
b.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice1.png");
}
else if(randomNumber1===2){
b.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice2.png");
}
else if(randomNumber1===3){
b.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice3.png");
}
else if(randomNumber1===4){
b.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice4.png");
}
else if(randomNumber1===5){
b.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice5.png");
}
else {
  b.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice6.png");
}
var randomNumber2=Math.floor(Math.random()*6)+1;
var c=document.querySelector(".img2");

if(randomNumber2===1){
c.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice1.png");
}
else if(randomNumber2===2){
c.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice2.png");
}
else if(randomNumber2===3){
c.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice3.png");
}
else if(randomNumber2===4){
c.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice4.png");
}
else if(randomNumber2===5){
c.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice5.png");
}
else {
  c.setAttribute("src","https://ishita-chandra.github.io/Dice-game/images/dice6.png");
}
if(randomNumber1>randomNumber2)
{
  document.querySelector(".moto").innerHTML="🚩"+n1+" wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector(".moto").innerHTML=n2+" wins!🚩";
}
else
{
  document.querySelector(".moto").innerHTML="🚩It's a Draw!🚩";
}
}
