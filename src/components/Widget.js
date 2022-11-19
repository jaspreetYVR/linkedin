import React from 'react';
import "../css/widget.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';

function Widget() {


    const Article = (heading, subtitle) => {
        return (
            <div className="widget__article">
                <div className="widget__article__left">
                    <FiberManualRecordIcon />
                </div>
                <div className="widget__article__right">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='widget'>
            <div className="widget__header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {Article("React is trending", "News views 30303")}
            {Article("JS is trending", "News views 4874")}
            {Article("Firebase is trending", "News views 674")}
            {Article("Jaspreet is trending", "News views 986")}
            {Article("Canada is trending", "News views 233")}
            {Article("Front end is trending", "News views 55")}
            {Article("React is trending", "News views 7665")}
        </div>
    )
}

export default Widget