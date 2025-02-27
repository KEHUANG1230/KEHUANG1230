let rnd = (l,u) => Math.random()*(u-l) + l;
let scene, entity, stamia_text,stamina_bar = 100, h=100;
let wendigo = { template: "#wendigoModel", scale: 1.6, speed: 2.4 }
let banana = false;
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
	car1 = document.getElementById("car");
	cameraRig = document.getElementById("cameraRig");
	car2 = document.getElementById("car2");
	carCamera1 = document.getElementById("carCamera");
	carCamera2 = document.getElementById("carCamera2");
	timeText = document.getElementById("timeText");
	blackScreen = document.getElementById("blackScreen");
	dayLight = document.getElementById("dayLight");
	floor = document.getElementById("floor");
    sky = document.getElementById("sky");
	door2 = document.getElementById("door2");
	whitehallway = document.getElementById("whitehallway");
	hallwaydoor = document.getElementById("hallwaydoor");
	hallwayMonster = document.getElementById("hallwaymonster");
	thirdPersonCamera = document.getElementById("thirdPersonCamera");
	
	
   car1.addEventListener("click", function () {
    console.log("Car 1 clicked");

    //cameraRig.setAttribute("position", carCamera1.getAttribute("position"));
    camera.setAttribute("camera", "active: false");
    carCamera1.setAttribute("camera", "active: true");

    car1.setAttribute("animation__drive", {
      property: "position",
      dur: 4800,
      easing: "linear",
      from: "1.7 0 500",
      to: "1.7 0 400",
      loop: 0,
    });

    car2.setAttribute("animation__move", {
      property: "position",
      dur: 5000,
      easing: "linear",
      from: "-50 0 400",
      to: "1.7 0 400",
      loop: 0,
    });

    console.log("Car animations started! WOW");

    car2.addEventListener("animationcomplete", function () {
      console.log("Car 2 animation complete");
	  carCamera.setAttribute("position",{x:0, y: 18, z: -5});
      car1.setAttribute("animation__drive", {
        property: "position",
        dur: 3000,
        easing: "linear",
        from: "1.7 0 400",
        to: "60 0 400",
        loop: 0,
      });

      blackScreen.setAttribute("visible", true);
      timeText.setAttribute("visible", true);
	
      console.log("Black screen and time text should be visible");
	  teleportHouse(); 
	  
	  dayLight.setAttribute("animation__light", {
          property: "light.intensity",
          from: 1,
          to: 0.2,
          dur: 24000,
          easing: "linear",
        });
		
		
		scene.setAttribute("animation__fog", {
          property: "fog.color",
          from: "#ffffff",
          to: "#000000",
          dur: 24000, 
          easing: "linear",
        });
		
		scene.setAttribute("animation__fogDensity", {
          property: "fog.density",
          from: 0.001,
          to: 0.08,
          dur: 28000, 
          easing: "linear",
        });
		

        sky.setAttribute("animation__color", {
          property: "color",
          from: "#87CEEB",
          to: "#000033", 
          dur: 30000, 
          easing: "linear",
        });
		
      setTimeout(() => {
        timeText.setAttribute("visible", false);
        blackScreen.setAttribute("visible", false);
		
		
        camera.setAttribute("camera", "active: true");
		camera.setAttribute("position","20, 1.6, 40");
        carCamera1.setAttribute("camera", "active: false");
      }, 4000);
    });
  });
	
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
		
    monster = new Monster(-5, 0, 0, wendigo);
	
	//let monster3 = new Tester('monster3', -5, 0, 0);
	 monster1 = new Monster(20, 0, -4, wendigo);
	 monster2 = new Monster(14, , 0, -4, wendigo);
  
   //Create MonsterFollower instances to make them follow the camera
  //new MonsterFollower(camera, monster1.obj, 10, 0.35);
  //new MonsterFollower(camera, monster2.obj, 10, 0.35); 
  //new MonsterFollower(camera, monster3.obj, 25, 0.32); 
  
 
	  
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
		
		tree = new Tree(-8, 10, (470 + x));
		tree.scale("7");
		
		tree = new Tree(-26, 10, (470 + x));
		tree.scale("7");
		
		tree = new Tree(-42, 10, (470 + x));
		tree.scale("7");
		
		tree = new Tree(-60, 10, (470 + x));
		tree.scale("7");
		
		tree = new Tree(8, 10, (470 + x));
		tree.scale("7");
		
		tree = new Tree(26, 10, (470 + x));
		tree.scale("7");
		
		tree = new Tree(42, 10, (470 + x));
		tree.scale("7");
		
		tree = new Tree(60, 10, (470 + x));
		tree.scale("7");
	}
	
	this.go = true;
  window.addEventListener("keydown", function(e){
		if (e.key == "c"){
			 cameraRig.object3D.position.y = 0.5;
			 camera.setAttribute("wasd-controls","acceleration:25");
			this.go = false;
			this.allow = false;
			  console.log(e.key)
		}
	window.addEventListener("keyup", function(e){
	  if (e.key == "c"){
		cameraRig.object3D.position.y = 1.6;
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
		camera.y += (camera.dy * 7)
		camera.object3D.position.y = camera.y;
	  }
  })
	
	
	let isFirstPress1 = true;
	window.addEventListener("keypress",function(e){
		if(e.key == "y"){
			if (isFirstPress1){
				cameraRig.object3D.position.y = 0.35;
				camera.setAttribute("wasd-controls","acceleration:25");
				this.go = false;
				this.allow = false;
				console.log(e.key)
			}else {
				cameraRig.object3D.position.y = 1.6;
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
					console.log("you have collected the hammer");
					banana = true;
					teleportHouse();
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
		
	if (door.getAttribute("rotation").y === 0) {
      door.setAttribute("rotation", { x: 0, y: 90, z: 0 });
    } else {
      door.setAttribute("rotation", { x: 0, y: 0, z: 0 });
		}
	}
	
	door2.onclick = function(){
	 if (banana) {
		door2.setAttribute("rotation",{x:0, y:90, z:0});
		
    scene.setAttribute("visible", false);
   whitehallway.setAttribute("visible", true);

    camera.setAttribute("position", { x: 0, y: 1.6, z: 10 }); 
    hallwaymonster.setAttribute("position", { x: 0, y: 0, z: -10 });

    camera.setAttribute("camera", "active: false");
	
    thirdPersonCamera.setAttribute("camera", "active: true");
    thirdPersonCamera.setAttribute("position", { x: 0, y: 2, z: 5 }); 
    cameraRig.appendChild(thirdPersonCamera);

    startHallwayChase();
	}
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
	
	window.addEventListener("keypress", function(e){
		if (e.key == "p"){
			banana = true;
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
				camera.setAttribute("wasd-controls","acceleration:90");
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
	
  let monsters = [monster, monster1, monster2];


monster.chaseDistance = 45; 
monster1.chaseDistance = 12; 
monster2.chaseDistance = 12; 

for (let monster of monsters) {
  let d = distance(monster.obj, camera);

  if (d < 3.8) { 
    if (!monster.isAttacking) {
      monster.isAttacking = true;
      monster.obj.setAttribute("animation-mixer", { clip: "wendigo_jjk_body1_model0_skeleton|Attack 3", loop: "once" });

      setTimeout(() => {
        h -= 10; 
        if (h < 0) h = 0; 
        monster.isAttacking = false;
      }, 2200); 
    }
  } else if (d < monster.chaseDistance) { 
    monster.stopWandering();
    monster.rotateTowards(camera);
    monster.forward();
    monster.obj.setAttribute("animation-mixer", { clip: "wendigo_jjk_body1_model0_skeleton|Run", loop: "repeat" });
  } else { 
    monster.startWandering();
  }
}
  
	//let testingMonsters = [monster1, monster2];//, monster3]; 
	
	//for (Tester of testingMonsters){ 
	//let d = distance(monster1, camera);
	//let dx = distance(monster2, camera);
	//let d3 = distance(monster3, camera);
	
    //if (d < 1.5) { 
      //h -= 1;  
      //if (h < 0) h = 0;  
    //} else if (dx < 1.5){
		//h -= 1;
		//if (h < 0) h = 0;
	//}else if (d3 < 1.5){
		//h -= 1;
		//if (h < 0) h = 0;
	//}
  //}

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
	camera.setAttribute("position", {x:33 , y:28, z:-10});
}

function teleportHouse() {
  camera.setAttribute("position", { x: 20, y: 1.6, z: 40 }); 

}

function startHallwayChase() {

  hallwayMonster.setAttribute("animation", {
    property: "position",
    to: "0 0 10", 
    dur: 5000, 
    easing: "linear",
  });

  cameraRig.setAttribute("animation", {
    property: "position",
    to: "0 1.6 -50", 
    dur: 5000,
    easing: "linear",
  });
	
	dayLight.setAttribute("animation__light", {
          property: "light.intensity",
          from: 0.2,
          to: 1,
          dur: 5000,
          easing: "linear",
        });
		
		
		scene.setAttribute("animation__fog", {
          property: "fog.color",
          from: "#000000",
          to: "#ffffff",
          dur: 5000, 
          easing: "linear",
        });
		
		scene.setAttribute("animation__fogDensity", {
          property: "fog.density",
          from: 0.08,
          to: 0.001,
          dur: 5000, 
          easing: "linear",
        });
		

        sky.setAttribute("animation__color", {
          property: "color",
          from: "#000033",
          to: "#87CEEB", 
          dur: 5000, 
          easing: "linear",
        });
		
  setTimeout(() => {
    hallwaydoor.setAttribute("rotation", { x: 0, y: 90, z: 0 });

    camera.setAttribute("position", {x:-80, y: 1.6, z:485});

   whitehallway.setAttribute("visible", false);
    scene.setAttribute("visible", true);
	
    camera.setAttribute("camera", "active: true");
    cameraRig.removeChild(thirdPersonCamera);
  }, 5000);
}
