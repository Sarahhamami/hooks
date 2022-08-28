import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';

const movieCard = ({ movie }) => {
  
    return (
      <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        <ReactStars
              count={5}
              isHalf={true}
              edit={false}
              value={movie.rate}
              size={24}
              activeColor="#ffd700"
            />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  );
}



export default movieCard