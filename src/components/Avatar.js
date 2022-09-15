import React from 'react'

const default_avi = "https://upload.wikimedia.org/wikipedia/en/b/bb/General_Iroh.jpg"

function Avatar({ image }) {
    return (
        <div style={{ height: '150px', width: '150px', margin: '0 auto' }}>
            <img src={image || default_avi} style={{
                margin: '0 auto',
                height: '100%', width: '100%',
                backgroundSize: 'cover',
                objectFit: 'cover'
            }} />
        </div>
    )
}

export default Avatar