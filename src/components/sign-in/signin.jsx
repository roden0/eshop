import React, { useState } from 'react';
import { connect } from 'react-redux';
import './signin.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions';

const SignIn = ({googleSignIn, emailSignIn})=> {
    const [ userCredentials, setCredentials] = useState({email:'',password:''});

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        emailSignIn(email, password);
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
                        <CustomButton type="button" onClick={googleSignIn} isGoogleButton>Sign In with Google</CustomButton>
                    </fieldset>
                </form>

            </article>
        );
    }

const mapDispatchToProps = dispatch =>({
    googleSignIn: ()=> dispatch(googleSignInStart()),
    emailSignIn: (email,password)=> dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);