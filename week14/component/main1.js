function create(Cls, attributes) {
  let o = new Cls;
  
  for(let name in attributes) {
    o[name] = attributes[name];
  }

  return o;
}

class Cls {

}

let component = <Cls id="a" />

console.log(component);

// component.setAttribute("id", 'b');
// component.id ="b"