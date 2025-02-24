class Tester {
  constructor(entityId, x, y, z, scale = 1, color = 'red') {
    this.obj = document.getElementById(entityId); // Get the entity by ID
    this.obj.setAttribute('position', `${x} ${y} ${z}`);
    this.obj.setAttribute('scale', `${scale} ${scale} ${scale}`);
    this.obj.setAttribute('material', `color: ${color}`);
    //this.obj.setAttribute('dynamic-body', 'mass: 1');  // Add dynamic-body for physics
  }
}