import React from 'react'
import './Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons"

function Footer() {
    return (
        <div className="footer">
            <div class="footer__left">
                <p>Album and song details</p>
            </div>

            <div class="footer__center">
                <p>Player Controls</p>
            </div>

            <div class="footer__right">
                <p>Volume controls</p>
            </div>
            
        </div>
    )
}

export default Footer
