import React, { useState } from 'react';
import { connect } from 'react-redux';

import './signup.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signUpStart } from '../../redux/user/user-actions';

const SignUp = ({signUp})=> {
    const [userData, setUserData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword} = userData;

    const handleSubmit = async e => {
        e.preventDefault();
        
        try{
            if(password !== confirmPassword) throw Error('passwords must match'); 
            signUp({ displayName, email, password}); 
        }catch(e){
            console.error(`SignUp@handleSubmit: ${e}`);
        }
        return;
    }

    const handleChange = e =>{
        const { name, value } = e.target;

        setUserData({ ...userData, [name]:value });
    }
    

    return(
        <article className="sign-up sign-form">
            <header className="title">
                <h2>Create an account</h2>
                <p>Sign up with your email and password.</p>
            </header>

            <form action="" onSubmit={handleSubmit}>
                <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                label="Display Name"
                required
                />
                <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="email"
                required
                />
                <FormInput
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required
                />
                <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm password"
                required
                />
                <fieldset className="buttons">
                    <CustomButton type="submit">Sign Up</CustomButton>
                </fieldset>
            </form>
        </article>
    )
}

const mapDispatchToProps = dispatch =>({
    signUp: (credentials)=> dispatch(signUpStart(credentials))
});

export default connect(null, mapDispatchToProps)(SignUp);