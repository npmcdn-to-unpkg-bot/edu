  
 
var {Grid,Row, Col, Button} = ReactBootstrap;
var {Router, Route, Link, browserHistory, IndexRoute, hashHistory  } = RouterReact;

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

 /*  modulo 2 / banner  */
var Modulo2 = React.createClass({ 
   render: function() {
      return(
          <Row>
            <Col xs={9} md={9} > 
                  <h1>Capacitacion online</h1>
                  <h3>Verdadera formación de competencias laborales</h3>
                  <h4>empieza hoy a aprender, y al final pagas por tu diploma</h4>
                   <Button bsStyle="info" href="cursos.php">Ver costos diplomas</Button>
               </Col>
            </Row>   
      )
   },
}) 


/*  modulo 3 / banner  */
var Modulo3 = React.createClass({ 
   render: function() {
      return(
          <Row>
            <Col xs={12} md={12}>   
                  <h2> Cursos mas vistos en programación</h2>
               </Col>   
            <Col xs={4} md={4}  >   
                  <div className="btn-warning">
                     <i className="devicon-javascript-plain"></i>
                     <h3>Aplicaciones web javascript</h3>
                     <p>Curso Gratuito</p>
                     <p>Tiempo 4 semanas</p>
                     <Button bsStyle="default" href="cursos.php">Ver Curso</Button>
                  </div> 
               </Col>
               <Col xs={4} md={4}>
               <div  className="btn-success">
                     <i className="devicon-php-plain"></i>  
                  <h3>Aplicaciones web Php</h3>
                   <p>Curso Gratuito</p>
                     <p>Tiempo 4 semanas</p>
                   <Button bsStyle="default" href="cursos.php">Ver Curso</Button>
               </div> 
               </Col>
               <Col xs={4} md={4}>  
                  <div className="btn-danger" >
                     <i className="devicon-nodejs-plain"></i>
                  <h3>Aplicaciones web Node.js</h3>
                  <p>Curso Gratuito</p>
                  <p>Tiempo 4 semanas</p>
                   <Button bsStyle="default" href="cursos.php">Ver Curso</Button>
               </div>
               </Col>
            <Col xs={12} md={12}>   
                  <h2> Cursos mas vistos sistemas de gestion</h2>
               </Col>   
               <Col xs={4} md={4}>  
                  <div className="btn-success" >
                     <i className="fa fa-heartbeat" aria-hidden="true"></i>
                  <h3>Sistema de seguridad y salud en el trabajo</h3>
                  <p>Curso Gratuito</p>
                  <p>Tiempo 3 semanas</p>
                   <Button bsStyle="default" href="cursos.php">Ver Curso</Button>
               </div>
               </Col>
               <Col xs={4} md={4}>  
               <div className="btn-info" >
                     <i className="fa fa-spinner" aria-hidden="true"></i>
                  <h3>Sistema de Gestion de la Calidad</h3>
                  <p>Curso Gratuito</p>
                  <p>Tiempo 5 semanas</p>
                   <Button bsStyle="default" href="cursos.php">Ver Curso</Button>
                   </div>
               </Col>
               <Col xs={4} md={4}>  
               <div className="btn-warning" >
                     <i className="fa fa-envira" aria-hidden="true"></i>
                  <h3>Sistema de Gestion Ambiental</h3>
                  <p>Curso Gratuito</p>
                  <p>Tiempo 4 semanas</p>
                   <Button bsStyle="default" href="cursos.php">Ver Curso</Button>
                   </div>
               </Col>
            </Row>   
      )
   },
}) 

 /*  modulo 4 / costos  */
var Modulo4 = React.createClass({ 
   render: function() {
      return(
          <Row>
            <Col xs={12} md={12} >  
                  <h4>Capacitate totalmente gratis, y paga por tu certificación</h4>
                   <Button bsStyle="info" href="cursos.php">Ver costos diplomas</Button>
               </Col>
            </Row>   
      )
   },
}) 

/*  modulo 5 / nosotros  */
var Modulo5 = React.createClass({ 
   render: function() {
      return(
          <Row>
            <Col xs={6} md={6} className="btn-success">  
                  <h4>POR QUE ELEGIR A EDUPLATT, ES TU MEJOR OPCIÓN</h4>
                  <p>En Eduplatt llevas tu hoja de vida a otro nivel, te ayudamos a logras tus objetivos</p><br/><br/><br/><br/>
                  <Button bsStyle="default" href="cursos.php">Conoce a eduplatt</Button>

               </Col>
               <Col xs={6} md={6}  className="btn-info" >   
                  <h4>REGISTRATE HOY A TODO NUESTRO CATALOGO DE CURSOS PREMIUM</h4>
                  <p>Cursos Programación:</p>
                     <Button bsStyle="default" href="cursos.php">59.900 / Mes</Button>
                     <Button bsStyle="default" href="cursos.php">599.000 / Año</Button>
                  <br/><br/><br/>
                  <p>Cursos sistemas de gestión:</p>
                     <Button bsStyle="default" href="cursos.php">59.900 / Mes</Button>
                     <Button bsStyle="default" href="cursos.php">599.000 / Año</Button>
                  
                  
               </Col>
            </Row>   
      )
   },
}) 


/*  modulo 6 / footer  */
var Modulo6 = React.createClass({ 
   render: function() {
      return(
          <Row>
               <Col xs={3} md={3} > 
               <h5>PROXIMOS CURSOS</h5>
               <ul>
                  <li>Android</li>
                  <li>Aplicaciones Isomorficas</li>
                  <li>Aplicaciones moviles ionic</li>
               </ul>
               </Col>
               <Col xs={3} md={3} > 
               <h5>NOSOTROS</h5>
               <ul>
                  <li>Historia</li>
                  <li>Docentes</li>
                  <li>Trabaja con nosotros</li>
               </ul>
               </Col>
               <Col xs={3} md={3} > 
               <h5>QUIENES TRABAJAN CON NOSOTROS</h5>
               <ul>
                  <li>Universidad Andes</li>
                  <li>EDX</li>
                  <li>Universidad stanford</li>
               </ul> 
               </Col>
               <Col xs={3} md={3} > 
                  <h5>CONTACTANOS</h5>
               <ul>
                  <li>envianos tus comentarios</li>
                  <li>Direccion: calle 134 n xx - xx</li>
                  <li>Telefono: 7238833</li>
               </ul>
               </Col>
            </Row>   
      )
   },
}) 


class App extends React.Component {
  render() {
    return(
      <div>
        <ul>
          <li><Link to="/" >Home </Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/posts" >Posts</Link></li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Route path="/" component={Modulo1} />
  </Router>
, document.getElementById('menu'));


ReactDOM.render(<Modulo1 />,document.getElementById('header'));
ReactDOM.render(<Modulo2 />,document.getElementById('container'));
ReactDOM.render(<Modulo3 />,document.getElementById('cursos'));
ReactDOM.render(<Modulo4 />,document.getElementById('costos'));
ReactDOM.render(<Modulo5 />,document.getElementById('nosotros'));
ReactDOM.render(<Modulo6 />,document.getElementById('footer'));




if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
   var distance = 300;
    
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}