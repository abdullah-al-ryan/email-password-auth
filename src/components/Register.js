import React from 'react';

const Register = () => {
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder="Your Email" />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" placeholder="Type your Password"></input>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;