import React, { useState } from 'react';

import './signin.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = ()=> {
    const [ userCredentials, setCredentials] = useState({email:'',password:''});

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
          } catch (error) {
            console.log(error);
          }
    };

    const handleChange = (e) =>{
        const { value, name } = e.target;
        setCredentials( {...userCredentials, [name]:value } );
    }

    return (
        <article className="sign-in sign-form">
            <header className="title">
                <h2>Already have an account?</h2>
                <p>Sign in with your email and password.</p>
            </header>
            
            <form action="" onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />

                <fieldset className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleButton>Sign In with Google</CustomButton>
                </fieldset>
            </form>

        </article>
    );
}

export default SignIn;