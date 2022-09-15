import React from 'react'
import { useNavigate } from 'react-router-dom';

const nomatch_gif = "https://c.tenor.com/zBGfwvickBQAAAAC/confused-what.gif";

function NoMatch() {

    const navigate = useNavigate();

    return (
        <div
            style={{
                color: 'white',
                margin: '30vh auto',
                width: '200px',
                textAlign: 'center',
            }}>
            <p> can't find what you're looking for right now/:</p>
            <img src={nomatch_gif} className="content-photo" />
            <div
                onClick={() => navigate("/")}>
                return home
            </div>
        </div>
    )
}

export default NoMatch