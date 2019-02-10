import React, {Component} from 'react';
import '../Style.css'
import {Link} from "react-router";
import {connect} from "react-redux";
import {swit} from "../actions/swit";

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state ={
            green: "#6aff64",
            black:  "#212121",
            color: "#212121"
        }
        this.onclick = this.onclick.bind(this)
    }


    onclick = ()=>
        {
            console.log(this.props.base.Tags.find( t=> this.props.name == t.name))
            this.props.dispatch(swit(this.props.name))
            if ( this.props.base.Tags.find( t=> this.props.name == t.name).Query == false )
            {
                this.setState({color:this.state.black})
            }
            else
                {
                    this.setState({color:this.state.green})
                }
        }
    render() {
        if ( this.props.base.Tags.find( t=> this.props.name == t.name).Query==false )
        {
            this.state.color = "#212121"
        }
        else
        {
            this.state.color = "#6aff64"
        }
        return (

                <span style={{color: this.state.color}} onClick={this.onclick}
                      className={"tag"}>
                    #{this.props.name}
                    </span>
        );
    }
}

function mapStateToProps(state) {
    return {
        base: state
    }
}
export default connect(mapStateToProps)(Tag);