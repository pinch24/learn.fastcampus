import React, { useState } from 'react'

function InputSample() {

    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })
    const { name, nickname } = inputs

    const onChange = (e) => {
        const { name, value } = e.target

        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        })
    }

    return (
        <div>
            <input placeholder="Name" onChange={onChange} name='name' value={name} />
            <input placeholder="Nickname" onChange={onChange} name='nickname' value={nickname} />
            <button onClick={onReset}>Reset</button>
            <div>
                <b>Value: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample