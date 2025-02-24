// tree.js
class Tree {
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
	this.obj.setAttribute("static-body","");
	
    let pines = document.createElement("a-cone");
    pines.setAttribute("color","green");
    pines.setAttribute("position","0 1.5 0");
    pines.setAttribute("height","2");
    this.obj.append( pines );
  
    let stump = document.createElement("a-cylinder");
    stump.setAttribute("position","0 0 0");
    stump.setAttribute("color","brown");
	stump.setAttribute("height","3.5");
    stump.setAttribute("radius","0.35");
    this.obj.append( stump );
	
	let pines3 = document.createElement("a-cone");
    pines3.setAttribute("color","green");
    pines3.setAttribute("position","0 1 0");
    pines3.setAttribute("height","2");
    this.obj.append( pines3 );
	
	let pines4 = document.createElement("a-cone");
    pines4.setAttribute("color","green");
    pines4.setAttribute("position","0 0.5 0");
    pines4.setAttribute("height","2");
    this.obj.append( pines4 );
	
	let pines5 = document.createElement("a-cone");
    pines5.setAttribute("color","green");
    pines5.setAttribute("position","0 0 0");
    pines5.setAttribute("height","2");
    this.obj.append( pines5 );
	
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  scale(size){
    this.obj.setAttribute("scale",{x:size,y:size,z:size});
  }
}