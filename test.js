class MonsterFollower {
  constructor(camera, monster, followDistance = 20, speed = 0.3, wanderSpeed = 0.5) {
    this.camera = camera;
    this.monster = monster;
    this.followDistance = followDistance;
    this.speed = speed;
    this.wanderSpeed = wanderSpeed;
    this.targetPosition = new THREE.Vector3();
    this.setNewTarget(); // Set initial random target
    this.update();  // Start the update loop
  }

  // Calculate the distance between the camera and monster
  calculateDistance() {
    let dx = this.camera.object3D.position.x - this.monster.object3D.position.x;
    let dz = this.camera.object3D.position.z - this.monster.object3D.position.z;
    return Math.sqrt(dx * dx + dz * dz);  // Only using x and z for simpler distance
  }

  // Move the monster towards the camera
  followPlayer() {
    let distance = this.calculateDistance();
    if (distance < this.followDistance) {
      // Move monster towards the camera on the x and z axes
      if (this.camera.object3D.position.x > this.monster.object3D.position.x) {
        this.monster.object3D.position.x += this.speed;
      } else {
        this.monster.object3D.position.x -= this.speed;
      }

      if (this.camera.object3D.position.z > this.monster.object3D.position.z) {
        this.monster.object3D.position.z += this.speed;
      } else {
        this.monster.object3D.position.z -= this.speed;
      }
    }
  }

  // Move the monster towards a random target position
  wander() {
    // Move the monster towards the target position smoothly
    let direction = new THREE.Vector3().subVectors(this.targetPosition, this.monster.object3D.position);
    let distanceToTarget = direction.length();

    if (distanceToTarget < 1) {
      // If we're close to the target, generate a new random target
      this.setNewTarget();
    } else {
      // Move monster towards the target smoothly
      direction.normalize().multiplyScalar(this.wanderSpeed);
      this.monster.object3D.position.add(direction);
    }
  }

  // Set a new random target position for wandering
  setNewTarget() {
    let randomX = (Math.random() - 0.5) * 50; // Random value between -25 and 25 (adjust range as needed)
    let randomZ = (Math.random() - 0.5) * 50; // Random value between -25 and 25
    this.targetPosition.set(randomX, this.monster.object3D.position.y, randomZ); // Set target at random position
  }

  // Continuously update the monster's position
  update() {
    let distance = this.calculateDistance();
    if (distance < this.followDistance) {
      // If within range, follow the player
      this.followPlayer();
    } else {
      // If out of range, wander randomly
      this.wander();
    }

    requestAnimationFrame(() => this.update());  // Keep the loop going
  }
}
