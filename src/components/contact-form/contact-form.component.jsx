import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { Form} from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Group } from 'react-bootstrap';
import FormInput from '../form-input/form-input.component';
import SubmitButton from '../submit-button/submit-button.component';
// import emailjs from 'emailjs';
import emailjs, { init } from 'emailjs-com';
import './contact-form.styles.scss';

init(`${process.env.REACT_APP_USER}`);

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

  // const { register, errors, reset } = useForm();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // formValid(userCredentials)
    if (formValid(userCredentials)) {
      // Handle form validation success
      const { name, email, subject, message } = userCredentials;
      console.log(process.env.REACT_APP_USER);

      try {
        let templateParams = {
          name: name,
          email: email,
          subject: subject,
          message: message,
        };

        await emailjs.send(
          process.env.REACT_APP_MAIL_AK,
          process.env.REACT_APP_TEMPLATE,
          templateParams,
          process.env.REACT_APP_USER
        );

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);
      resetForm();
      } catch (error) {
        console.log(error);
      }
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  // Function to reset form
  const resetForm = () => {
    setUserCredentials({
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
    <Form className='form-container' onSubmit={ handleSubmit } >
      <Form.Row className='input-container-row'>
        <Form.Group className='form-group-custom' as={Col} controlId="formGridName">
          <FormInput 
            name="name" 
            type="text" 
            value={name}
            handleChange={handleChange}
            label="Name" 
          />
        </Form.Group>
        <Form.Group className='form-group-custom' as={Col} controlId="formGridEmail">
          <FormInput 
            name="email" 
            type="email" 
            value={email}
            handleChange={handleChange}
            label="Email address" 

          />
        </Form.Group>
      </Form.Row>
      <Form.Row className='input-container-row'>
        <Form.Group className='form-group-custom' as={Col} controlId="formGridSubject">
            <FormInput 
            name="subject" 
            type="text" 
            value={subject}
            handleChange={handleChange}
            label="Subject" 

          />
        </Form.Group>

      </Form.Row>
      <Form.Row className='input-container-row'>
        <Form.Group className='form-group-custom' as={Col}>
        <textarea
          rows='5'
          name='message'
          value={message}
          className='form-control'
          onChange={handleChange}
          placeholder='Message'
          ></textarea>
          <SubmitButton type="submit"> Send </SubmitButton>
        </Form.Group>
      </Form.Row>
    </Form>
  );
};

export default ContactForm;



// <div className='form-container'>
//       <div className='row'>
//         <h2>Let's get in touch!</h2>
//       </div>
      // <div className='input-container'>
      //   <FormInput 
      //   name="subject" 
      //   type="subject" 
      //   value={subject}
      //   handleChange={handleChange}
      //   label="Subject" 
      //   required
      //   />
//         <FormInput 
//         name="subject" 
//         type="subject" 
//         value={subject}
//         handleChange={handleChange}
//         label="Subject" 
//         required
//         />
//         <FormInput 
//         name="subject" 
//         type="subject" 
//         value={subject}
//         handleChange={handleChange}
//         label="Subject" 
//         required
//         />
//         <FormInput 
//         name="subject" 
//         type="subject" 
//         value={subject}
//         handleChange={handleChange}
//         label="Subject" 
//         required
//         />
//         <textarea
//           rows='5'
//           name='message'
//           value={message}
//           className={`form-control formInput ${
//             formErrors.message.length > 0 ? 'error' : null
//           }`}
//           onChange={handleChange}
//           placeholder='Message'
//           noValidate
//           ></textarea>
//       </div>
      
//     </div>



// {errors.name && <span className='errorMessage'>{errors.name.message}</span>}

// {errors.email && (
//   <span className='errorMessage'>Please enter a valid email address</span>
// )}

// {errors.subject && (
//   <span className='errorMessage'>{errors.subject.message}</span>
// )}
// {errors.message && <span className='errorMessage'>Please enter a message</span>}