import React from 'react'

export default function EntryInput({entry: {name, message}}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{message}</p>
        </div>
    )
}
