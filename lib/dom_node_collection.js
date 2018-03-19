class DomNodeCollection {
  constructor(HTMLElemArr){
    this.nodes = HTMLElemArr;
    this.empty = this.empty.bind(this);
  }

  html(string){
    if (string) {
      this.nodes.forEach((node)=>{
        node.innerHTML = string;
      });
    } else {
      return (this.nodes[0].innerHTML);
    }
  }

  empty(){
    this.html(" ");
  }

  append(children){
    if (this.nodes.length === 0) return;
    if (typeof children === 'object' &&
        !(children instanceof DomNodeCollection)) {
      children = snack(children);
    }
    if (typeof children === 'string') {
      this.nodes.forEach((node)=>{
        node.innerHTML += children;
      });
    } else if ( children instanceof DomNodeCollection) {
      this.nodes.forEach((node)=>{
        children.nodes.forEach((child)=>{
          node.appendChild(child.cloneNode(true));
        });
      });
    }
  }

  attr(){

  }

  addClass(){

  }

  removeClass(){
    
  }
}

export default DomNodeCollection;
