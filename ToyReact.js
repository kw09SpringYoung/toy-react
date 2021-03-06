class ElementWrapper{
    constructor(type){
        this.root = document.createElement(type);
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value);
    }
    appendChild(vchild){
        vchild.mountTo(this.root);
    }
    mountTo(parent){
        parent.appendChild(this.root);
    }
}

class TextWrapper{
    constructor(content){
        this.root = document.createTextNode(content);
    }
    mountTo(parent){
        parent.appendChild(this.root);
    }
}

export class Component{
    setAttribute(name,value){
        this[name] = value;
    }
    mountTo(parent){
        let vdom = this.render();
        vdom.mountTo(parent);
    }
}

export let ToyReact = {
    createElement(type,artributes,...children){
        let element;
        debugger
        if(typeof type ==='string')
            element= new ElementWrapper(type);
        else
            element = new type;
        
        for(let name in artributes){
            element.setAttribute(name,artributes[name])
        }
        for(let child of children){
            if(typeof child ==='string')
                child = new TextWrapper(child);
            element.appendChild(child)
        }
       return element;
    },
    render(vdom,element){
        vdom.mountTo(element);
    }
}