import React from 'react';
import PropTypes from "prop-types";
import '../assets/css/newsStyle.css';

HotNews.propTypes ={
    htmlAttribute: PropTypes.shape({
        className: PropTypes.string,
        id: PropTypes.string
    }),
    data: PropTypes.shape({
        image: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author:PropTypes.string.isRequired,
    }),
    // event: PropTypes.shape({
    //
    // })
}

function HotNews(props) {
    return(
        <div className={`text ${props.htmlAttribute.className}`}>
            <div className="image__wrapper">
                <img src={props.data.image}
                     className="image__news" alt=""/>
            </div>
            <h2 className="title__news">{props.data.title}</h2>
            <p className="content__news">{props.data.content}</p>
            <p className="author">{props.data.author}</p>
        </div>
    )
}

export default HotNews;

