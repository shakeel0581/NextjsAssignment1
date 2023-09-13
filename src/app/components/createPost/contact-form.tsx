"use client"
import { useState, useEffect } from 'react';

import classes from './contact-form.module.css';
import Notification from '../ui/notification.tsx';
import { PrismaClient } from '@prisma/client' 
    const axios = require('axios');

async function sendContactData(FormData) {
var data = JSON.stringify({
  "enteredTitle": FormData.Title,
  "enteredName": FormData.name,
  "enteredPostDescription": FormData.PostDescription,
  "thumbnail": FormData.thumbnail
});

var config = {
  method: 'post',
  url: 'http://localhost:8080/api/posts/createPost',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

const response = await axios(config);
  if (!status == 200) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [ThumbNail, setThumbNail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredPostDescription, setEnteredPostDescription] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendPostDescriptionHandler(event) {
    event.preventDefault();

    // optional: add client-side validation

    setRequestStatus('pending');

    try {
      await sendContactData({
        Title: enteredTitle,
        name: enteredName,
        PostDescription: enteredPostDescription,
        thumbnail: ThumbNail
      });
      setRequestStatus('success');
      setEnteredPostDescription('');
      setEnteredTitle('');
      setEnteredName('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      PostDescription: 'Your PostDescription is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      PostDescription: 'PostDescription sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      PostDescription: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>Create New Post?</h1>
      <form className={classes.form} onSubmit={sendPostDescriptionHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='Title'>Post title</label>
            <input
              type='Title'
              id='Title'
              required
              value={enteredTitle}
              onChange={(event) => setEnteredTitle(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Author Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
         <div className={classes.control}>
            <label htmlFor='name'>Thumbnail Link</label>
            <input
              type='text'
              id='name'
              required
              value={ThumbNail}
              onChange={(event) => setThumbNail(event.target.value)}
            />
          </div>
        <div className={classes.control}>
          <label htmlFor='PostDescription'>Blog Description</label>
          <textarea
            id='PostDescription'
            rows='5'
            required
            value={enteredPostDescription}
            onChange={(event) => setEnteredPostDescription(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Create Post</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
