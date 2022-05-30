import React from 'react';
import PropTypes from "prop-types";
import '../assets/css/newsStyle.css';

BeCaredNews.propTypes = {
    htmlAttribute: PropTypes.shape({
        className: PropTypes.string,
        id: PropTypes.string
    }),
    data: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }),
    event: PropTypes.shape({

    })
}
function BeCaredNews(props) {
    return(
        <div className="be__cared_news text">
            <h2 className="be__cared_news">  {props.data.title}</h2>
        </div>
    )
}

export default BeCaredNews;