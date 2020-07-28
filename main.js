import {ToyReact,Component} from './ToyReact.js'
class MyComponent extends Component{
    render() {
        return <div>
                    <span>Hello </span>
                    <span> world </span>
                    <span> !</span>
                </div>
    }
   
}
let a = <MyComponent name="a" id="myId" ></MyComponent>
ToyReact.render(
    a,//要渲染元素的变量
    document.body //挂载
)
