import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import '../styles/global.css';

const DiarySNS = ({ Component }) => {
  return (
    <>
      <Head>
        <title>DiarySNS</title>
      </Head>
      <Component />
    </>
  );
};

DiarySNS.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default DiarySNS;
