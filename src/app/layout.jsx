import React from 'react';
import Head from 'next/head';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'MxStore',
  description: 'Find your best tools',
};

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <html lang="en">
        <body className="bg-color-dark overflow-x-hidden">
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
};

export default RootLayout;