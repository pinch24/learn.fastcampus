import React from 'react'

function Hello({ color, name, isSpecial }) {

    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}Hello, {name}.
            {isSpecial ? ' Special!': ' Normal'}
        </div>
    )
}

Hello.defaultProps = {
    name: 'No Name'
}

export default Hello