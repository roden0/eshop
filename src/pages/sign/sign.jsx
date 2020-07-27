import React from 'react';

import './sign.scss';

import SignIn from '../../components/sign-in/signin';
import SignUp from '../../components/sign-up/signup';

const SignPage = () => (
    <section className="page sign-page">
        <SignIn />
        <SignUp />
    </section>
);

export default SignPage;