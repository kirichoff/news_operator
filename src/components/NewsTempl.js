import React, {Component} from 'react';
import  {connect} from 'react-redux'
import NewsPage from "./NewsPage";

const NewsTempl = ({qw}) =>{
    console.log(qw)
    return(
<NewsPage
    text ={qw.text}
    id = {qw.id}
    header={qw.header}
    img ={qw.src} />
    );
}
function mapStateToProps(state,ownProps) {
    console.log(state.addNews)
    return {
        qw: state.addNews.find(t=>t.id === Number(ownProps.params.id))
    }
}
export default connect(mapStateToProps)(NewsTempl);