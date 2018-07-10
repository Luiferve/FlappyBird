# FlappyBird
How to create a Flappy Bird game using Javascript

HOW TO: 

1.- We need some images from Flappy Bird. So, you can find them in "assets" Folder.

2.- Then, we will create a .html file. In this case, I named it "index"-such a creative name-.

3.- In "index.html" we are going to declared the title of our page and optionally, a shortcut icon within a link label. Then, we will create a canvas label for defining our workspace. Finally, we will define that we will use a .js file that I named "flappyBird.js" within a script label.

4.- After this, we can created our .js file where we will created and define all we need for our game.

5.- First, we just have to draw iamges to the canvas continuously and unchanged in their positions. So we are going to sleect our canvas using document.getElementById("canvas") and then using getContext will gives us a lot of methods and properties that gives us access to the canvas to write or draw on it.

6.-Second, we will created variables for our images and declared them as Image object. Then we will declare the source of the image. Then, we will do the same step for audio variables.

7.- Once we have created the variables we are going to use, we can start draw all the images with a function that I called "draw()". In it we will draw the images using getElementById("canvas").drawImage(imageVariable,positionX,positionY). 

8. Then, the stage will be ready. We just need to created some loops and conditional to be able to cross the pipes, to add the points or for losing the game when you hit them or fall.

I hope this can help for understanding the code. Feel free to rewrite, modify or improve the code. This git is only for academic reasons so I hope you can enjoy it and used it for improve your programming skills.
