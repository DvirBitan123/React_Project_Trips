import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export function Registration() {
    const firstRef = useRef<HTMLInputElement|null>(null);
    const secondRef = useRef<HTMLInputElement|null>(null);
    
    return (
        <>
        <Link to="/"><button type="button">Home</button></Link>
        <br></br>
        <div>Registration</div>
        <br></br>
        <form>
            <label for='userEmail'>Email  </label>
            <input ref={firstRef} type="email" id="userEmail" maxLength={30}/>
            <br></br>
            <label for='userPassword'>Password  </label>
            <input ref={secondRef} type="password" id="userPassword" maxLength={30}/>
            <br></br>
            <br></br>
            <button type='button' onClick={() => {
                useEffect(() => {
                    const myPost = () => {
                        const postOptions = {
                            URL: '/api/register',
                            Method: 'POST',
                            body: JSON.stringify({
                                email: firstRef.current!.value,
                                password: secondRef.current!.value}),
                            headers: {
                                'Content-Type': 'application/json',
                                "authorization ": "test-token"
                            }
                        }
                        fetch('api/register', postOptions)
                        .then(data => data.json())
                        .then(message => {
                            if (message.ok) prompt("yesssssssss")})
                        }
                    myPost()
                }, [])
            }}>Send</button>
        </form>
        </>
    )
}
