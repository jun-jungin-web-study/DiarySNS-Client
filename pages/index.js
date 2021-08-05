import React from 'react';
import Head from 'next/head';
import LoginLayout from '../components/LoginLayout';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Navbar,Nav,Form  } from 'react-bootstrap'
const Index = () => {
  return (
    <>
      <LoginLayout>
          <a>dededede</a>
      </LoginLayout>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Button variant="primary" size="lg">Primary</Button>
    </>
  );
};

export default Index;