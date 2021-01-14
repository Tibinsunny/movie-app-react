import React from 'react'
import './movie.css'
import {Card,Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col'
function movieApp(props){
    return(
    
  <Row>
     {props.movies.map((movie, index) => (
      <Col className="test">
		   <Card  style={{ width: '18rem' }}>
       <Card.Img variant="top" src={movie.Poster} />
       <Card.Body>
         <Card.Title>{movie.Title}</Card.Title>
         <Card.Text>
           Type : {movie.Type}<br /> 
           Year :{movie.Year}
         </Card.Text>
         <Button variant="primary">WishList</Button>
       </Card.Body>
     </Card></Col>
     ))}
     </Row>
      
     
   
    )
}
export default movieApp;