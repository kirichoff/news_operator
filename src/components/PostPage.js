import React, {Component} from 'react';
import Post from "./Post";
import '../Style.css'
import {Editor, EditorState, RichUtils} from 'draft-js'
import {stateToHTML} from 'draft-js-export-html';
import Bar from "./Bar";
import  {connect} from 'react-redux'
import {add} from "../actions";
class PostPage extends Component {
    constructor(){
        super()
        this.state =
            {
                value: "Hear",
                header: "Hear"
            }
            this.onch = this.onch.bind(this)
    }

    onch = (value)=>
    {
        this.setState({value:value.getPlainText()})
        console.log(value)
        console.log(value.getPlainText())
    }
submite = (e)=>{
        //txt,id,header,src = "../shadowlll.jpg"
    console.log("something")
        this.props.dispatch(add(this.state.value,(
            (this.props.base.addNews.length-1>0)?this.props.base.addNews[this.props.base.addNews.length-1].id+1:
            0)
            ,this.state.header,"../shadowlll.jpg"))
        e.preventDefault()
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

                <form className={"Post-page"} onSubmit={this.submite}>
                     <div className="paragraph-style" >Header</div>
                           <input className={"point-style"} style={{marginBottom:"2%"  }}
                          type={"text"}
                                onChange={e=> this.setState({header: e.target.value })}
                         value={this.state.header}
                                  onFocus={()=>
                                      (this.state.header == "Hear")? this.setState({header:""}):
                                       this.state.header
                                  }
                                  placeholder={"Hear"}
                              />
                              <div>Immage</div>
                           <input  className={"point-style"} style={{marginBottom:"2%"  }}
                                   onChange={e=>console.log(e.target.value)}
                                   ref={"file"}
                                   type="file"/>
                         <div className={"Post"} >
                             <Post  onChange = {this.onch} />
                               <input type={"submit"} value={"send"}/>
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