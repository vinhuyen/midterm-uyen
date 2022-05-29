import React from 'react';
import PropTypes from "prop-types";
import '../assets/css/newsStyle.css';

ExtraNews.propTypes = {
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
function ExtraNews(props) {
    return(
        <div className="extra__news text">
            <p className="extra__news_date">{props.data.date}</p>
            <h2 className="extra__news__title">{props.data.title}</h2>
        </div>
    )
}

export default ExtraNews;