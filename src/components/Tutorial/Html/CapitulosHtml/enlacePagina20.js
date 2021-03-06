import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import enlacePagina20 from '../../../../styles/img/capitulosPics/enlacePagina20.jpg';
import enlacePagina20b from '../../../../styles/img/capitulosPics/enlacePagina20b.jpg';
import MenuTutorialHtml from '../../../MenusTutorial/Html/menuTutorialHtml';

class EnlacePagina extends Component {
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
							<title>Enlaces a una página en el mismo sitio web - Aprende codigo con Codeando Html Css JavaScript Bootstrap jQuery</title>
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
						<h1 className="h1__tituloCapitulos">Enlaces a una página en el mismo sitio web</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Puede usar una ruta relativa para vincular a páginas en
							el mismo sitio web.
						</p>
						<div style={{ margin: '50px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="500"
								height="150"
								alt="Enlaces a una pagina en el mismo sitio web"
								data-caption="Enlaces a una pagina en el mismo sitio web"
								src={enlacePagina20b}
							/>
						</div>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El ejemplo anterior iría al archivo de ejemplo en el
							directorio raíz (/) del servidor.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si este enlace estaba en http://example.com, los
							siguientes dos enlaces llevarían al usuario a la misma ubicación.
						</p>
						<br />
						<div style={{ margin: '50px', textAlign: 'center' }}>
							<img
								className="materialboxed"
								width="550"
								height="150"
								alt="Enlaces a una pagina en el mismo sitio web"
								data-caption="Enlaces a una pagina en el mismo sitio web"
								src={enlacePagina20}
							/>
						</div>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ambos ejemplos anteriores irían al archivo de página en
							el directorio raíz de example.com.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EnlacePagina;
