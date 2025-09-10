import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling
import { useForm } from "react-hook-form";

function FeedbackForm() {
  const formRef = React.useRef();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const confirmationMessage = `Please confirm your submission:
          Name: ${data.name}
          Email: ${data.email}
          Feedback: ${data.feedback}

    Would you like to submit this feedback?`;

        if (window.confirm(confirmationMessage)) {
          console.log('Form submitted:', data);
          // Here you would typically send the data to a server
          alert('Thank you for your feedback!');
          formRef.current.reset(); // Reset the form using native HTML form reset
        }
      };

  return (
    <>
      <nav>
        Tell Us What You Think
      </nav>
      <form ref={formRef} className="feedback-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
          {/* Name field */}
          <input
            {...register("name", { 
              required: "Name is required",
              minLength: { value: 2,
                           message: "Name must be at least 2 characters" }
            })}
            type = "text"
            placeholder = "Your Name"
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        {/* Email field */}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Email is invalid"
            }
          })}
          type="email"
          placeholder="Your Email"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        {/* Feedback field */}
        <textarea
          {...register("feedback", {
            required: "Feedback is required",
            minLength: {
              value: 5,
              message: "Feedback must be at least 5 characters"
            }
          })}
          placeholder="Your Feedback"
        ></textarea>
        {errors.feedback && <p className="error">{errors.feedback.message}</p>}
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
}

export default FeedbackForm;
