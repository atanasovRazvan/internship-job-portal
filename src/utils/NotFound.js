import React from 'react';
import { Button } from '@material-ui/core';

const cryingGuyImageURL = 'https://static8.depositphotos.com/1003938/911/v/600/depositphotos_9112051-stock-illustration-funny-cartoon-office-worker.jpg';
const NotFoundPage = () => (
  <div className="notfound-container">
    <img src={cryingGuyImageURL} alt="Crying guy" />
    <p>Oh no! The page you were looking for doesn&#39;t exist!</p>
    <Button variant="contained" color="primary" href="/">
      Go back to the website
    </Button>
  </div>
);

export default NotFoundPage;
