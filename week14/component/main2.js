function create(Cls, attributes, ...children) {

  let o = new Cls({
    timer: {}
  });
  
  
  for(let name in attributes) {
    o.setAttribute(name, attributes[name]);
  }

  for(let child of children) {
    o.appendChild(child);
  }
  
  return o;
}


class Div {
  constructor(){
    this.children = [];
    this.root = document.createElement('div')
  }
  set class(v) {
    console.log("Div::class", v)
  }

  setAttribute(name, val) {
    console.log(name, val)
    this.root.setAttribute(name, val)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
    for(let child of this.children) {
      child.mountTo(this.root)
    }
  }

  appendChild(child) {
    console.log('Div::child', child)
    this.children.push(child)
  }
}


let component = <Div id="a" class="b" style="width: 100px; height: 100px;background-color: lightgreen;">
  <Div></Div>
  <Div></Div>
  <Div></Div>
</Div>

component.mountTo(document.body);

// component.setAttribute("id", 'b');
// component.id ="b"