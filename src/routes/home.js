import React from "react"
import ReactDOM from "react-dom"

/*  modulo 1 / header */
var Modulo1 = React.createClass({ 
   render: function() {
      return(
          <Row>
            <Col xs={3} md={3} > 
                  <img src="img/logo_final.png" className="img-responsive" />
               </Col>
               <Col xs={6} md={6} componentClass="nav" xsOffset={3} >   
               <ul>
                   <li>
                        <Button bsStyle="link" href="cursos.php">Cursos</Button>
                   </li>
                    <li>
                        <Button bsStyle="link" href="cursos.php">Blog</Button>
                   </li> 
                   <li>
                         <Button bsStyle="info" href="cursos.php">Login</Button>
                   </li> 
                    <li className="btn btn_login">
                         <Button bsStyle="success" href="cursos.php">Inscribirse</Button>
                   </li> 
               </ul>
               </Col>
            </Row>   
      )
   },
    
}) 