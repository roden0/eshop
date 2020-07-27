import React from 'react';

import './signup.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password} = this.state;
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});
            
        }catch(e){
            console.error(`SignUp@handleSubmit: ${e}`);
        }

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    handleChange = e =>{
        const { name, value } = e.target;

        this.setState({ [name]:value });
    }
    
    render(){
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <article className="sign-up sign-form">
                <header className="title">
                    <h2>Create an account</h2>
                    <p>Sign up with your email and password.</p>
                </header>

                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                    />
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="email"
                    required
                    />
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                    />
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
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
}

export default SignUp;