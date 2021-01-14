import React,{ useState } from 'react'
import {Navbar,Nav,Form,Button,FormControl,NavDropdown} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from './movie'

const App = () => {
  const API_URL="http://www.omdbapi.com/?apikey=e009df47&s=";


  const [movieList,setMovieList]=useState([])
  const [movieKeword,setMovieKeyword]=useState([])
  const [errored,setErrored]=useState("")
 const pushData= async () => {
  const response=await fetch(API_URL+movieKeword);
  const data = await response.json()
  if(data.Error)
  {
    setErrored(data.Error)
  }
 else
 {
  setErrored("")
  setMovieList(data.Search)
 }
}
const addKeyWord = (e) => {
  setMovieKeyword(e.target.value)
}

    return (
      <div>
        <Navbar className="test2" bg="dark" variant="dark">
        <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
          <Form inline>
            <FormControl type="text" onChange={e => addKeyWord(e)}   placeholder="Search" className="mr-sm-2" />
            <Button  onClick={e => pushData(e)}  variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar >
      {
        errored?(<Alert variant="danger" >{errored}</Alert>):(<Movie movies={movieList} />)
      }

      </div>
    )
}


export default App;