import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import entradaTexto32 from '../../../../styles/img/capitulosPics/entradaTexto32.jpg';
import entradaTexto32b from '../../../../styles/img/capitulosPics/entradaTexto32b.jpg';
import entradaTexto32c from '../../../../styles/img/capitulosPics/entradaTexto32c.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class EntradaTexto32 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery programacion desarrollo codigo aprender" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Entrada de Texto en un Formulario - Aprender codigo con Codeando Html Css JavaScript bootstrap jQuery</title>
						</Helmet>
					</div>
					<nav className="vertical_nav">
					<div className="left_section menu_left">
						<div className="left_section" style={{margin: "10px"}}>
							<MenuTutorialHtml />
						</div>
					</div>
					</nav>
					<div className="body__Capitulos">
						<h1 className="h1__tituloCapitulos">Entrada de Texto</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si queremos crear un campo de entrada en un{' '}
							<code>&lt;formulario&gt;</code>, necesitaremos la ayuda del elemento{' '}
							<code>&lt;formulario&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El elemento <code>&lt;input&gt;</code> tiene un atributo
							de tipo que determina cómo se representa en la página web y qué tipo de datos puede aceptar.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El primer valor para el atributo de tipo que vamos a
							explorar es "texto". Cuando creamos un elemento <code>&lt;input&gt;</code> con type =
							"text", genera un campo de texto en el que los usuarios pueden escribir. También es
							importante que incluyamos un atributo de nombre para <code>&lt;input&gt;</code>: sin el
							atributo de nombre, la información en <code>&lt;input&gt;</code> no se enviará cuando se
							envíe el <code>&lt;formulario&gt;</code>.
						</p>
						<br />
						<div style={{ margin: '10px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="550"
								height="200"
								alt="Introduccion a los formularios Html. Este es un codigo de ejemplo de un formulario sencillo."
								data-caption="Introduccion a los formularios Html. Este es un codigo de ejemplo de un formulario sencillo."
								src={entradaTexto32}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuando se carga inicialmente, será un cuadro de texto
							vacío:
						</p>
						<br />
						<div style={{ margin: '2px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="620"
								height="150"
								alt="Asi aparece cuando escribimos en el campo de texto"
								data-caption="Asi aparece cuando escribimos en el campo de texto"
								src={entradaTexto32b}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Después de que los usuarios escriban en el elemento{' '}
							<code>&lt;input&gt;</code>, el valor del atributo value se convierte en lo que se escribe en
							el campo de texto. El valor del atributo de valor se combina con el valor del atributo de
							nombre y se envía como texto cuando se envía el formulario. Por ejemplo, si un usuario
							escribió "detalles importantes" en el campo de texto creado por nuestro elemento{' '}
							<code>&lt;input&gt;</code>.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cuando se envía el formulario, el texto: "primer campo
							de texto = detalles importantes" se envía a /example.html porque el valor del atributo de
							nombre es "primer campo de texto" y el valor del valor es "detalles importantes" ".
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;También podríamos asignar un valor predeterminado para
							el atributo de valor para que los usuarios tengan un campo de texto precargado cuando vean
							por primera vez el formulario representado de esta manera:
						</p>
						<div style={{ margin: '2px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="720"
								height="150"
								alt="Asi aparece cuando escribimos en el campo de texto"
								data-caption="Asi aparece cuando escribimos en el campo de texto"
								src={entradaTexto32c}
							/>
						</div>
						<br />
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¡Es hora de poner este conocimiento en práctica!</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EntradaTexto32;
