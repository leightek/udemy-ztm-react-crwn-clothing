
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = () => {

    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }
    
    return (
        <div>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    type='text'
                    requird
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />

                <FormInput 
                    label='Email'
                    type='email'
                    requird
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput 
                    label='Password'
                    type='password'
                    requird
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <FormInput 
                    label='Confirm Password'
                    type='password'
                    requird
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;