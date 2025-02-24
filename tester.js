class Tester {
  constructor(entityId, x, y, z, scale = 1, color = 'red') {
    this.obj = document.getElementById(entityId);
    this.obj.setAttribute('position', `${x} ${y} ${z}`);
    this.obj.setAttribute('scale', `${scale} ${scale} ${scale}`);
    this.obj.setAttribute('material', `color: ${color}`);
  }
}
