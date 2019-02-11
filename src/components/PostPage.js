import React, {Component} from 'react';
import Post from "./Post";
import '../Style.css'
import {Editor, EditorState, RichUtils} from 'draft-js'
import {stateToHTML} from 'draft-js-export-html';
import Bar from "./Bar";
import  {connect} from 'react-redux'
import {add} from "../actions";
import TagPiker from "./TagPiker";
class PostPage extends Component {
    constructor(){
        super()
        this.state =
            {
                value: "Hear",
                header: "Hear",
                tags: [],
                immag: undefined
            }
            this.onch = this.onch.bind(this)
        this.Tagadd = this.Tagadd.bind(this)
    }

    onch = (value)=>
    {
        this.setState({value:value.getPlainText()})
        console.log(value)
        console.log(value.getPlainText())
    }

    Tagadd = (name)=>{

        console.log(name)
        if (this.state.tags.find(l=>l === name))
            {
                console.log(name)
                let buf = this.state.tags
                buf.splice(this.state.tags.indexOf(name),1);
                this.setState({tags: buf})
            }
            else {
            this.setState({tags: [...this.state.tags, name]})
            }
        console.log(this.state)
    }

    submite = (e)=>{
        //txt,id,header,src = "../shadowlll.jpg"
        let date = new Date;
    console.log("something")
        console.log(this.state)
        this.props.dispatch(add(this.state.value,(
            (this.props.base.addNews.length-1>0)?this.props.base.addNews[this.props.base.addNews.length-1].id+1:
            0)
            ,this.state.header,"../shadowlll.jpg",this.state.tags,`${date.getDay()}.${date.getDate()}.${date.getFullYear()} on ${date.getHours()+":"+date.getMinutes()}`))
        e.preventDefault()
}

imginsert=(e)=>{
        console.log(e)
        console.log(e.target.files[0])
    this.setState({immag:URL.createObjectURL(e.target.files[0])})
    this.state.immag= URL.createObjectURL(e.target.files[0])
    console.log(this.state)
}

    render() {
        let options = {
            defaultBlockTag: 'div',
        };
        return (
            <div >
                <Bar/>
                <div className={"header-style"}>
                    {this.state.header}
                </div>
                    <img src={'../shadowlll.jpg'}
                         className="img-style">
                    </img>
                     <p className="paragraph-style" >
                    {this.state.value}
                    </p>
                <img src={this.state.immag}/>
                <form className={"Post-page"} onSubmit={this.submite}>
                     <div className="paragraph-style" >Header</div>
                           <input className={"point-style"} style={{marginBottom:"2%"  }}
                                            type={"text"} onChange={e=> this.setState({header: e.target.value })}
                                                    value={this.state.header}
                                                        onFocus={()=> (this.state.header == "Hear")? this.setState({header:""}): this.state.header}
                                                                        placeholder={"Hear"}/>
                                <div>Tags</div>
                                    <TagPiker onchangeFunction={this.Tagadd} />
                                        <div>Immage</div>
                                          <input  className={"point-style"} style={{marginBottom:"2%"  }}
                                   onChange={this.imginsert}
                                   ref={"file"}
                                   type="file"/>
                                  <div className={"Post"} >
                                    <Post  onChange = {this.onch} />
                                         <input className={"submite"} type={"submit"} value={"send"}/>
                     </div>
                </form>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        base: state
    }
}
export default connect(mapStateToProps)(PostPage);