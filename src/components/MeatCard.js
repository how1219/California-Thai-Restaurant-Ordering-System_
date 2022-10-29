import React from "react"

export default function MeatCard(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }

    let thumbImg
    let popularText
    let chillyIcon
    if (props.item.thumbUp !== "") {
        thumbImg = <img src={`../meatImages/${props.item.thumbUp}`} className="card--thumb" alt="thumb up"/>
        popularText = <span className="gray">most popular </span>
    }
    if (props.item.chilly !== "") {
        chillyIcon = <img src={`../meatImages/${props.item.chilly}`} className="card--chilly" alt="chilly"/>
    }
    
    return (
        <div className="meat-card">
            {badgeText && <div className="meat-card--badge">{badgeText}</div>}
            <img src={`../meatImages/${props.item.coverImg}`} className="meat-card--image" alt ="coverimg"/>
            <div className="meat-card--stats">
                {chillyIcon}
                {thumbImg}
                {popularText}
                <img src={`../meatImages/${props.item.white}`} className="card--white" alt="white"/>
            </div>
            <p className="meat-card--title">{props.item.title}</p>
            <p className="meat-card--price"><span className="bold">${props.item.price}</span></p>
        </div>
    )
}