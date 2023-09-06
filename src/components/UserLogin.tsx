import { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function Login() {
    const firstRef = useRef<HTMLInputElement|null>(null);
    const secondRef = useRef<HTMLInputElement|null>(null);
    return (
        <>
        <Link to="/"><button type='button'>Home</button></Link>
        <br></br>
        <div>Login</div>
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
                useEffect(() => {
                    const myPost = () => {
                        fetch('api/login', postOptions)
                        .then(data => data.json())
                        .then((message) => {
                            prompt("Welcome!")
                        })
                    }
                    myPost()
                }, [])
            }}>Login</button>
        </form>
        </>
    )
}
