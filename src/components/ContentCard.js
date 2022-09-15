import React from 'react'

function ContentCard({ item }) {
    const { type, image, text, video, reblog_from, tags, key } = item;
    return (
        <div className="layout-card" style={{ backgroundColor: 'transparent', objectFit: 'cover' }}>
            {
                type === "photo" ? <img src={image} style={{
                    margin: '0 auto',
                    height: 'auto', width: '100%',
                    backgroundSize: 'cover',
                    objectFit: 'cover'
                }} /> :
                    type === "text" ?
                        <div className="content-text">{text}</div> : ''
            }
        </div>
    )
}

export default ContentCard