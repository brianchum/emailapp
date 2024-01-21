import './App.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        var data = { message: message, email: email };

        emailjs
            .send(
                'service_9v4oc7n',
                'template_9b0aizb',
                data,
                'wCiYFTN_MgGRKiJn-'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setEmail('');
        setMessage('');
    };
    return (
        <div className='App'>
            <form ref={form} onSubmit={sendEmail}>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    type='message'
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                />
                <button type='submit'> Sumbit </button>
            </form>
        </div>
    );
}

export default App;
