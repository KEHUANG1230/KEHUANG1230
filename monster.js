class Monster {
  constructor(x, y, z, model) {
    this.model = model;
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src", model.template);
    this.obj.setAttribute("animation-mixer", { clip: "wendigo_jjk_body1_model0_skeleton|Idle", loop: "repeat" });
    this.obj.setAttribute("scale", `${model.scale} ${model.scale} ${model.scale}`);
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    this.obj.setAttribute("shadow", { receive: true });
    scene.append(this.obj);

    this.chaseDistance = 10;
    this.attackDistance = 2; 
    this.speed = 0.3;
    this.isChasing = false;
    this.isAttacking = false;
    this.wanderInterval = null;
  }

  angleTo(target) {
    let dx = target.object3D.position.x - this.obj.object3D.position.x;
    let dz = target.object3D.position.z - this.obj.object3D.position.z;
    this.angle = Math.atan2(dx, dz); 
  }

  rotateTowards(target) {
    this.angleTo(target);
    this.obj.object3D.rotation.y = this.angle; 
  }

  forward() {
    let dx = this.speed * Math.sin(this.angle);
    let dz = this.speed * Math.cos(this.angle);
    this.obj.object3D.position.x += dx;
    this.obj.object3D.position.z += dz;
  }

  chase(target) {
    const dist = this.distanceTo(target);

    if (dist <= this.attackDistance && !this.isAttacking) {
      // Attack the player
      this.isAttacking = true;
      this.isChasing = false;
      this.obj.setAttribute("animation-mixer", { clip: "wendigo_jjk_body1_model0_skeleton|Attack 3", loop: "repeat" });

      setTimeout(() => {
        this.isAttacking = false;
        this.obj.setAttribute("animation-mixer", { clip: "wendigo_jjk_body1_model0_skeleton|Run", loop: "repeat" });
      }, 2000); 
    } else if (dist <= this.chaseDistance && !this.isAttacking) {
      this.isChasing = true;
      this.rotateTowards(target);
      this.forward();
      this.obj.setAttribute("animation-mixer", { clip: "wendigo_jjk_body1_model0_skeleton|Run", loop: "repeat" });
    } else {
      this.isChasing = false;
      this.startWandering();
    }
  }

  distanceTo(target) {
    const pos1 = this.obj.object3D.position;
    const pos2 = target.object3D.position;
    return Math.sqrt(
      Math.pow(pos1.x - pos2.x, 2) +
      Math.pow(pos1.y - pos2.y, 2) +
      Math.pow(pos1.z - pos2.z, 2)
    );
  }

  startWandering() {
    if (this.wanderInterval) return; 

    this.obj.setAttribute("animation-mixer", { clip: "wendigo_jjk_body1_model0_skeleton|Walk", loop: "repeat" });
    console.log("Monster is wandering!");

    this.wanderInterval = setInterval(() => {
      this.angle = Math.random() * Math.PI * 2; 
      this.forward();
    }, 2000); 
  }

  stopWandering() {
    if (this.wanderInterval) {
      clearInterval(this.wanderInterval);
      this.wanderInterval = null;
    }
  }

  stop() {
    this.stopWandering();
    this.obj.setAttribute("animation-mixer", { timeScale: 0 });
  }
}
