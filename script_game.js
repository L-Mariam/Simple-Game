var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var score = Math.floor(counter/100);

function jump() {
	if (character.classList != "animate") {
  character.classList.add("animate");
  setTimeout(function(){
       character.classList.remove("animate");
	   }
  , 500); // "500ms" doesnt work because timeout count is in ms and no other measuremnet works.
 }
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	
    if(blockLeft<20 && blockLeft>-20 && characterTop >= 130){
		if(score===0){
        alert("You lost :( Score: "+ score);
		}
		else{
			        alert("You lost :( but you scored: "+ score + "!");
		}
        counter = 0;
		score = Math.floor(counter/100); // Reset the score when the player loses

    }
	else{
        counter++;
		score = Math.floor(counter/100); // Update the score whenever the counter changes
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

