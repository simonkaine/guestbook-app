import React from 'react'

export default function Guestbook() {
    return (
        <>
        <form>
            <section>
                <label htmlFor='name'>Guest Name: </label>
                <input type='text' placeholder='Enter Name..' id='name'></input>
            </section>
            <section>
                <label htmlFor='textfield'>Guest Entry: </label>
                <textarea id='textfield' type='text' placeholder='Leave a comment!'></textarea>
            </section>
            <button>Submit</button>
        </form>
        </>
    )
}
