import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
const Index = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Button variant="primary" size="lg">Primary</Button>{' '}
    </>
  );
};

export default Index;