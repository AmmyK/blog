import React from "react"
import "../styles/hero.css"


export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of posts.<br />
            </h1>
            <div className="hero-author">
                <img src="https://api.adorable.io/avatars/30/image.png" className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by amamamam.<br />
                    Front Engineer at amamamam.Inc. Love Swift, Javascript.
                </p>
            </div>
        </div>
    )
}