let rnd = (l,u) => Math.random()*(u-l) + l;
let scene, entity, stamia_text,stamina_bar = 100, h=100;
let wendigo = { template: "#wendigoModel", charge: "wendigo--Charge", scale: 0.8, speed: 0.2 }
window.onload = function(){
	scene = document.querySelector("a-scene");
	entity = document.querySelector("a-entity");
	camera = document.getElementById("camera");
	box = document.getElementById("box");
	door = document.getElementById("door");
	fog = document.getElementById("fog");
	flashlight = document.getElementById("flashlight");
	text_interaction = document.getElementById("interaction");
	stamia_text = document.getElementById("stamia");
	health_text = document.getElementById("health");
	moving = document.getElementById("moving");
	StaminaBar = document.getElementById("staminaplus");
	TestKey = document.getElementById("testkey");
	TestKeyRed = document.getElementById("testkeyred");
	TestKeyBrown = document.getElementById("testkeybrown");
	noteBox = document.getElementById("note");
    noteOverlay = document.getElementById("noteOverlay");
    closeNote = document.getElementById("closeNote");
	
	noteBox.addEventListener("click", function () {
            noteOverlay.style.display = "block";
        })

        closeNote.addEventListener("click", function () {
            noteOverlay.style.display = "none";
        })
	
	window.addEventListener("click", function (event) {
            if (event.target === noteOverlay) {
                noteOverlay.style.display = "none";
            }
        })
		
	 //for (let i = 0; i < 1; i++) {
    //monster = new Monster(-5, 0, 0, wendigo);
	
	//monster = new Monster(68, 0, -34, wendigo);
  //}

	let monster1 = new Tester('monster1', 20, 4, 0);
	let monster2 = new Tester('monster2', 14, 16, 0);
  
  // Create MonsterFollower instances to make them follow the camera
  new MonsterFollower(camera, monster1.obj, 10, 0.35);
  new MonsterFollower(camera, monster2.obj, 10, 0.35); 
  
 
	  
	let x = 0;
	for (let i = 0; i < 10; i++){
		x += -20;
		
		tree = new Tree(x, 10, 0);
		tree.scale("7");
		tree = new Tree(60 + -x, 10, 0);
		tree.scale("7");
		
		tree = new Tree(x, 10, -17);
		tree.scale("7");
		tree = new Tree(60 + -x, 10, -17);
		tree.scale("7");
		
		tree = new Tree(x, 10, -34);
		tree.scale("7");
		tree = new Tree(60 + -x, 10, -34);
		tree.scale("7");
		
		tree = new Tree(x, 10, -52);
		tree.scale("7");
		tree = new Tree(-x, 10, -55);
		tree.scale("7");
		
		tree = new Tree(x, 10, -69);
		tree.scale("7");
		tree = new Tree(-x, 10, -72);
		tree.scale("7");
		
		tree = new Tree(x, 10, -87);
		tree.scale("7");
		tree = new Tree(-x, 10, -90);
		tree.scale("7");
		
		tree = new Tree(x, 10, -108);
		tree.scale("7");
		tree = new Tree(-x, 10, -108);
		tree.scale("7");
		
		tree = new Tree(x, 10, -124);
		tree.scale("7");
		tree = new Tree(-x, 10, -124);
		tree.scale("7");
		
		tree = new Tree(x, 10, -140);
		tree.scale("7");
		tree = new Tree(-x, 10, -140);
		tree.scale("7");
		
		tree = new Tree(x, 10, 17);
		tree.scale("7");
		tree = new Tree(60 + -x, 10, 17);
		tree.scale("7");
		
		tree = new Tree(x, 10, 34);
		tree.scale("7");
		tree = new Tree(60 + -x, 10, 34);
		tree.scale("7");
		
		tree = new Tree(x, 10, 52);
		tree.scale("7");
		tree = new Tree(-x, 10, 52);
		tree.scale("7");
		
		tree = new Tree(x, 10, 69);
		tree.scale("7");
		tree = new Tree(-x, 10, 69);
		tree.scale("7");
		
		tree = new Tree(x, 10, 87);
		tree.scale("7");
		tree = new Tree(-x, 10, 87);
		tree.scale("7");
		
		tree = new Tree(x, 10, 102);
		tree.scale("7");
		tree = new Tree(-x, 10, 102);
		tree.scale("7");
		
		tree = new Tree(x, 10, 124);
		tree.scale("7");
		tree = new Tree(-x, 10, 124);
		tree.scale("7");
		
		tree = new Tree(x, 10, 140);
		tree.scale("7");
		tree = new Tree(-x, 10, 140);
		tree.scale("7");
	}
	
	this.go = true;
  window.addEventListener("keydown", function(e){
	  camera.y = 0;
	  camera.dy = 0.5;
		if (e.key == "c"){
			camera.y += camera.dy
			 camera.object3D.position.y = camera.y;
			 camera.setAttribute("wasd-controls","acceleration:25");
			this.go = false;
			this.allow = false;
			  console.log(e.key)
		}
	window.addEventListener("keyup", function(e){
	 camera.y = 0;
	  camera.dy = 0.5;
	  if (e.key == "c"){
		camera.y += (camera.dy * 3)
		camera.object3D.position.y = camera.y;
		this.go = true;
		this.allow = true;
		camera.setAttribute("wasd-controls","acceleration:65");
	  }
  })
 })
 
	window.addEventListener("keypress", function(e){
	 camera.y = 0;
	  camera.dy = 0.5;
	  if (e.key == " "){
		camera.y += (camera.dy * 25)
		camera.object3D.position.y = camera.y;
	  }
  })
	
	
	let isFirstPress1 = true;
	window.addEventListener("keypress",function(e){
		if(e.key == "y"){
			if (isFirstPress1){
				camera.y += camera.dy
				camera.object3D.position.y += 0.7;
				camera.setAttribute("wasd-controls","acceleration:25");
				this.go = false;
				this.allow = false;
				console.log(e.key)
			}else {
				camera.object3D.position.y = (0.5 * 3);
				camera.setAttribute("wasd-controls","acceleration:65");
				this.allow = true;
				this.go = true;
			}
			
			isFirstPress1 = !isFirstPress1;
		}
	})
 

	box.addEventListener("mouseenter", function(){
		box.interact = true;
		text_interaction.setAttribute("opacity",1);
		
			window.addEventListener("keypress", function(e){
				if (box.interact){
					if (e.key == "e"){
					box.setAttribute("opacity","0");
					box.setAttribute("position","0 -5 0");
					console.log("you have collected the banana");
					}
				}
			})
			box.addEventListener("mouseleave", function(){
				box.interact = false;
				text_interaction.setAttribute("opacity",0);
	})
})
	
	TestKey.collected = false;
	TestKey.addEventListener("mouseenter", function(){
		TestKey.interact = true;
		text_interaction.setAttribute("opacity",1);
		
		window.addEventListener("keypress", function(e){
				if (TestKey.interact){
					if (e.key == "e"){
						TestKey.collected = true;
						TestKey.setAttribute("opacity", "0");
						TestKey.setAttribute("position","0 -5 0");
						console.log("you have collected a key");
						checkKeysAndTeleport();
				}
			}
		})
		TestKey.addEventListener("mouseleave", function(){
				TestKey.interact = false;
				text_interaction.setAttribute("opacity",0);
		})
	})
	
	TestKeyRed.collected = false;
	TestKeyRed.addEventListener("mouseenter", function(){
		TestKeyRed.interact = true;
		text_interaction.setAttribute("opacity",1);
		
		window.addEventListener("keypress", function(e){
				if (TestKeyRed.interact){
					if (e.key == "e"){
						TestKeyRed.collected = true;
						TestKeyRed.setAttribute("opacity", "0");
						TestKeyRed.setAttribute("position","0 -5 0");
						console.log("you have collected a Red key");
						checkKeysAndTeleport();
				}
			}
		})
		TestKeyRed.addEventListener("mouseleave", function(){
				TestKeyRed.interact = false;
				text_interaction.setAttribute("opacity",0);
		})
	})
	
	TestKeyBrown.collected = false;
	TestKeyBrown.addEventListener("mouseenter", function(){
		TestKeyBrown.interact = true;
		text_interaction.setAttribute("opacity",1);
		
		window.addEventListener("keypress", function(e){
				if (TestKeyBrown.interact){
					if (e.key == "e"){
						TestKeyBrown.collected = true;
						TestKeyBrown.setAttribute("opacity", "0");
						TestKeyBrown.setAttribute("position","0 -5 0");
						console.log("you have collected a Red key");
						checkKeysAndTeleport();
				}
			}
		})
		TestKeyBrown.addEventListener("mouseleave", function(){
				TestKeyBrown.interact = false;
				text_interaction.setAttribute("opacity",0);
		})
	})
	
	door.onclick = function(){
		door.setAttribute("rotation",{x:0,y:90,z:0});
		door.setAttribute("color","green");
	}
	
	
	let isFirstPress = true;
	window.addEventListener("keypress",function(e){
		if(e.key == "f"){
			e.preventDefault();
			if (isFirstPress){
				flashlight.setAttribute("light","intensity:1");
			}else {
				flashlight.setAttribute("light","intensity:0");
			}
			
			isFirstPress = !isFirstPress;
		}
	})
	
	window.addEventListener("keypress",function(e){
		if (e.key == "0"){
			fog.setAttribute("fog","color:white");
		}
	})
	
	this.allow = false;

	window.addEventListener("keydown",function(e){
		if (this.go){
		if (!this.allow && stamina_bar > 0){
			this.allow = true;
			this.continue = false;
			if (e.key == "Shift"){
				camera.setAttribute("wasd-controls","acceleration:85");
				const runInterval = setInterval(() => {
					if (this.allow){
						countdown();
					} else {
						clearInterval(runInterval);
					}
				}, 100);
			}
		}
		}
	})
	
	this.continue = true;
	window.addEventListener("keyup",function(e){
		if (e.key == "Shift"){
			this.allow = false;
				if (!this.continue){
				this.continue = true;
				camera.setAttribute("wasd-controls","acceleration:65");
				const restInterval = setInterval(() => {
					if (stamina_bar < 100 && this.continue){
						rest();
					} else if (stamina_bar == 100) {
						clearInterval(restInterval);
					}
				}, 100);
			}
		}
	})
	
	updateStaminabar();
	loop();
}

function updateStaminabar() {
	StaminaBar.style.width = stamina_bar + '%';
        if (stamina_bar > 70) {
            StaminaBar.style.backgroundColor = 'green';
        } else if (stamina_bar > 40) {
            StaminaBar.style.backgroundColor = 'yellow';
        } else {
            StaminaBar.style.backgroundColor = 'red';
        }
	  
 }
  
function countdown(){
	
	if (stamina_bar > 0) {
		this.allow = true;
		stamina_bar -= 2;
		updateStaminabar();
	} else {
		this.allow = false;
		console.log("you broke");
		camera.setAttribute("wasd-controls","acceleration:5");
	}
}

function rest() {
	if (stamina_bar < 100) {
		stamina_bar += 1;
		updateStaminabar();
	} 
}



function loop(){
	updateFlashlight();
	
	stamia_text.setAttribute("value", `Stamina: ${stamina_bar}`);
	health_text.setAttribute("value", `health: ${h}`);
	
	//for (let monster of monsters) {
    //let d = distance(monster.obj, camera);
    //if (3 < d && d < 6) {
      //monster.rotateTowards(camera);
      //monster.forward()
    //} else {
      //monster.stop();
    //}
//}
  
  let testingMonsters = [monster1, monster2]; 
	
	for (Tester of testingMonsters){ 
	let d = distance(monster1, camera);
	let dx = distance(monster2, camera);
	
    if (d < 1.5) { 
      h -= 1;  
      if (h < 0) h = 0;  
    } else if (dx < 1.5){
		h -= 1;
		if (h < 0) h = 0;
	}
  }
  
	window.requestAnimationFrame(loop);
}

function updateFlashlight(){
  let angle = camera.object3D.rotation.y + Math.PI;
  let x = 1.5 * Math.sin(angle) + camera.object3D.position.x;
  let z = 1.5 * Math.cos(angle) + camera.object3D.position.z;
  flashlight.setAttribute("position",{x:x,y:1,z:z});
  //Rotate the box instead of the spot light
  flashlight.object3D.rotation.y = angle + Math.PI;
  flashlight.object3D.rotation.x = camera.object3D.rotation.x * 1.5;
}

function distance(obj1, obj2) {
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
  return d;
}

function checkKeysAndTeleport() {
    if (TestKey.collected && TestKeyRed.collected) {
        console.log("Both keys collected! Teleporting...");
        teleportPlayer();
    }
	
	if (TestKeyBrown.collected){
		console.log("teleporting you to banana! ")
		teleportBanana();
	}
}

function teleportPlayer() {
    camera.setAttribute("position", { x: 18, y: 16, z: 0 });
    console.log("You have been teleported!");
}

function teleportBanana() {
	camera.setAttribute("position", {x:33 , y:28, z:-10})
}