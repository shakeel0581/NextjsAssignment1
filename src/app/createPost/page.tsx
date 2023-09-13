import { Fragment } from 'react';
import Head from 'next/head';

import CreateBlogPostForm from '../components/createPost/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Create Blog Post</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <CreateBlogPostForm />
    </Fragment>
  );
}

export default ContactPage;
