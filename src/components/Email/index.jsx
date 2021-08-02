import React from 'react';
import emailjs from 'emailjs-com';
import { NotificationManager } from 'react-notifications';
//import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cb6p7dq', 'template_oqnb78g', e.target, 'user_H54EsvxuXYUcK0SpAIl5E')
      .then((result) => {
        NotificationManager.success('Message Sent We will contact you Shortly!', 'Successful!', 5000);
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
      
    <div className="row d-flex justify-content-center">
        <div className="col-md-4">
        <div class="form-group">
        <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" class="form-control"/>
        <label>Email</label>
        <input type="email" name="user_email" class="form-control" />
        <label>Message</label>
        <textarea name="message"  class="form-control"/>
        <input type="submit" value="Send" class="btn btn-primary" />
        </form>
        </div>
        </div>
    </div>
  );
}