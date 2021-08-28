import React, { useState, useRef } from 'react'

function InputSample() {

    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    })
    const nameInput = useRef()
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
        nameInput.current.focus()
    }

    return (
        <div>
            <input placeholder="Name" onChange={onChange} name='name' value={name} ref={nameInput} />
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