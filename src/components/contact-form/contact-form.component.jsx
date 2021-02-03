import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import emailjs from 'emailjs';
import './contact-form.styles.scss';

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

const ContactForm = () => {

  const [userCredentials, setUserCredentials] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    formErrors: {
      name: '',
      email: '',
      subject: '',
      message: '',
    }, 
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(userCredentials)) {
      // Handle form validation success
      const { name, email, subject, message } = userCredentials;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'userID');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);

      resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  // Function to reset form
  const resetForm = () => {
    userCredentials.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...userCredentials.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { formErrors, name, message, subject, email } = userCredentials;

  return (
    <div className='contact-form'>
        <h2>Let's get in touch!</h2>
        <h3>I will get back to you as soon as possible.</h3>
        <form id='contact-form' onSubmit={handleSubmit} noValidate>
          <div className='row'>
            <div className='col-6'>
              <FormInput 
                  name="name" 
                  type="text" 
                  value={name}
                  handleChange={handleChange}
                  label="Name" 
                  required
              />
            </div>
            <div className='col-6'>
              <FormInput  
                  name="email" 
                  type="email" 
                  value={email}
                  handleChange={handleChange}  
                  label="Your Email address"
                  required 
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <FormInput 
                name="subject" 
                type="subject" 
                value={subject}
                handleChange={handleChange}
                label="Subject" 
                required
              />
            </div>  
            <div className='col-6'>
              <textarea
                rows='5'
                name='message'
                value={message}
                className={`form-control formInput ${
                  formErrors.message.length > 0 ? 'error' : null
                }`}
                onChange={handleChange}
                placeholder='Message'
                noValidate
              ></textarea>
              {formErrors.message.length > 0 && (
                <span className='errorMessage'>{formErrors.message}</span>
              )}
            </div>
          </div>
            <div className='buttons'>
                <CustomButton type="submit"> Send </CustomButton>
            </div>
        </form>
    </div>
  );
};

export default ContactForm;