import React, {Component} from 'react';
import  {connect} from 'react-redux'
import '../Style.css'
import Bar from "./Bar";
class NewsPage extends Component {
    render() {
        console.log(this.props.base.addNews)

        return (
            <div className={'newspage-div'}>
                {
                 //   this.props.base.addNews.map(x=> <div>{x.text} иaaa еще id {x.id}</div>)
                }
                <Bar/>
                <span className={"header-style"} >
                    {this.props.header}
                </span>
                <img src={this.props.img}
                    className="img-style">
                </img>

                <div className="date">
                    {this.props.date}
                    </div>
                <p className="paragraph-style">
                    {this.props.text}
                </p>
                </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        base: state
    }
}
export default connect(mapStateToProps)(NewsPage);