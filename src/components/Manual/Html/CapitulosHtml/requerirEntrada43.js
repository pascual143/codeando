import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import requerirEntrada43 from '../../../../styles/img/capitulosPics/requerirEntrada43.jpg';
import requerirEntrada43b from '../../../../styles/img/capitulosPics/requerirEntrada43b.jpg';

class RequerirEntrada43 extends Component {
	render() {
		return (
			<Fragment>
				<div className="body__Capitulos">
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    						<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery" />
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
							<title>Codeando</title>
							<title>Requerir Entrada de Formulario</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Requerir una entrada - Input Request</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A veces tenemos campos en nuestros{' '}
							<code>&lt;input&gt;</code>s que no son opcionales, es decir, debe haber información
							proporcionada antes de que podamos enviarla. Para hacer cumplir esta regla, podemos agregar
							el atributo requerido a un elemento <code>&lt;input&gt;</code>. Tomar como ejemplo:
						</p>
						<br />
						<div style={{ margin: 'auto', width: '60%' }}>
							<img
								className="materialboxed"
								width="650"
								height="500"
								alt="Campo requirido se utilizar para obligar a los usuarios a escribir en el campo de texto sin dejarlo vacio"
								data-caption="Campo requirido se utilizar para obligar a los usuarios a escribir en el campo de texto sin dejarlo vacio"
								src={requerirEntrada43}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Esto muestra un cuadro de texto, y si intentamos enviar
							el <code>&lt;formulario&gt;</code> sin completarlo, recibimos este mensaje:
						</p>
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="450"
								height="200"
								alt="Campo requirido se utilizar para obligar a los usuarios a escribir en el campo de texto sin dejarlo vacio"
								data-caption="Campo requirido se utilizar para obligar a los usuarios a escribir en el campo de texto sin dejarlo vacio"
								src={requerirEntrada43b}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El estilo del mensaje varía de un navegador a otro, la
							imagen de arriba muestra el mensaje en un navegador Chrome. También continuaremos mostrando
							estos mensajes tal como aparecen en Chrome en ejercicios posteriores.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default RequerirEntrada43;
