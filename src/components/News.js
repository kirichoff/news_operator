import React, {Component} from 'react';
import '../ImgBox.css'
import  {connect} from 'react-redux'

import {Link} from "react-router";

class News extends Component {
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(){

    }
    render() {

        return (

                <div className={`ImageBox ${this.props.imgStyle}`}
                     style={{backgroundImage:"url(" + this.props.src + ")"}}
                >
                    <span className={"mainText"} >
                        < Link  className={'linkstyle'}
                               to={`/news/${this.props.id}`}
                        >
                            {this.props.text}
                            </Link>
                        <div style={{marginTop: "1.3vh",color: "#B6C8AF"}} >{this.props.date}</div>
                    </span>

                    </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        base: state
    }
}
export default connect(mapStateToProps)(News);