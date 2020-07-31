import React from 'react';

import './signin.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';


import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }

    handleSubmit = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (e) {
            console.error(`SignIn@handleSubmit: ${e}`);
        }
    };

    handleChange = (e) =>{
        const { value, name } = e.target;
        this.setState( { [name]:value } );
    }

    render(){
        return (
            <article className="sign-in sign-form">
                <header className="title">
                    <h2>Already have an account?</h2>
                    <p>Sign in with your email and password.</p>
                </header>
                
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
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
}

export default SignIn;