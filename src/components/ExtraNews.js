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
            <p className="extra__news_date">28 May 2022</p>
            <h2 className="extra__news__title">Former Louvre director Jean-Luc Martinez questioned by police as part of probe into alleged antiquities trafficking ring</h2>
        </div>
    )
}

export default ExtraNews;