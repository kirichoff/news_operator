import React, {Component} from 'react';
import News from "./News";
import "../shadowlll.jpg"
import '../night.jpg'
import '../Style.css'
import {connect} from 'react-redux'
import {Link}from 'react-router'
import {filtTag} from "../actions/filtTag";
var buf;
class ImgRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sorted: []
        }
    }

    componentDidUpdate(){
         buf = this.props.base.addNews[this.props.base.addNews.length-1]
    }

    rand=(arr)=>{
        let ittem=[];
        console.log("peredan")
        console.log(arr)
        for (let i=arr.length-2;i>=0;i--) {
            console.log("her array")
            console.log(arr[i].src)
            ittem.push(
                <News
                key={i}
                src={arr[i].src}
                text={arr[i].header}
                id = {arr[i].id}
                date = {arr[i].date}
                />)
        }
        console.log(this.props.base.addNews)
        console.log(ittem);
        return (<div  className={"test-class"} >{ittem}</div>)
}



filt =(state,action)=>{
    let filted = [] ;
    let isall = false
    console.log(state)
    console.log("action")
    console.log(state)
    console.log(action)
    action.map(t => {
            if (t.Query===true && t.name === "All") isall = true}
    )
    if (isall===true)
        return [...state]
    console.log(action)

    let selected =[];
    action.map(r=> {  if (r.Query===true)  selected.push(r.name) });
    console.log("selected");
    console.log(selected);
    console.log("some")
    state.map
    (
        t=> (
            t.tag.find(p=>selected.find(k=>p === k ) ))
        ? filted.push(t) : null
    )
    console.log(filted)
    console.log("else")
    return filted
}

render = ()=> {
    //console.log(this.props.base.Tags)
    console.log("filted")
    console.log(this.filt(this.props.base.addNews,this.props.base.Tags))
    this.state.sorted = this.filt(this.props.base.addNews,this.props.base.Tags)
   buf = this.state.sorted[this.state.sorted.length-1]
    console.log(this.state)
    console.log(buf)
    if(buf == undefined){
        buf ={}
    }
        return (
            <div>
                <News
                    imgStyle={"i"}
                    key={buf}
                    src={buf.src}
                    text={buf.header}
                    id = {buf.id}
                    date = {buf.date}
                />
                {
                                this.rand(this.state.sorted)
                }

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        base: state
    }
}
export default connect(mapStateToProps)(ImgRender);