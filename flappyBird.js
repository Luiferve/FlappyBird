var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// loading images

var bird = new Image();
var background = new Image();
var frontground = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "assets/bird.png";
background.src = "assets/background.png";
frontground.src = "assets/frontground.png";
pipeNorth.src = "assets/pipeNorth.png";
pipeSouth.src = "assets/pipeSouth.png";


// some const variables

var gap = 85;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

// loading audio files

var flySound = new Audio();
var scoreSound = new Audio();

flySound.src = "assets/fly.mp3";
scoreSound.src = "assets/score.mp3";

// on key down

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 27;
    flySound.play();
}

// pipe coordinates

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

// draw images

function draw(){

    ctx.drawImage(background,0,0);
    ctx.drawImage(frontground,0,cvs.height - frontground.height);

    ctx.drawImage(bird,bX,bY);

    for(var i = 0; i < pipe.length; i++){

        constant = pipeNorth.height+gap;
        ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
        ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);

        pipe[i].x--;

        //creating pipes

        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            });
        }

        // detect collision

        if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >=  cvs.height - frontground.height){
            location.reload(); // reload the page
        }

        if(pipe[i].x == 5){
            score++;
            scoreSound.play();
        }


    }

    bY += gravity;

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,cvs.height-20);

    requestAnimationFrame(draw);

}

draw();
