import React, {Component} from 'react';
import  {connect} from 'react-redux'
import '../Style.css'
import Tags from "../reducers/Tags";
import Tag from "./Tag";
class Tagsbar extends Component {
    render() {
        return (
            <div className={"tag-bar"}>
                {this.props.base.Tags.map((v,i)=>{ console.log(i); return(<Tag name={v.name}  key={i}> {v.name} </Tag>)})}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        base: state
    }
}
export default connect(mapStateToProps)(Tagsbar);
