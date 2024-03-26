import React from 'react';
import '../style/ErrorPage.css';
import Header from '../components/Header';
import Error from '../components/Error';
import Footer from '../components/Footer';

function ErrorPage() {
  return (
    <div className ="error_page">
      <Header />
      <Error />
      <Footer />
    </div>
  );
}

export default ErrorPage;
