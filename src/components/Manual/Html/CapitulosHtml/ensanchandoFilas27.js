import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import ensanchandoFilas27 from '../../../../styles/img/capitulosPics/ensanchandoFilas27.jpg';

class EnsanchandoFilas27 extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Codeando</title>
							<title>Ensanchando Filas</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1 className="h1__tituloCapitulos">Ensanchando Filas</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Los datos también pueden abarcar varias filas utilizando
							el atributo rowspan.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El atributo rowspan se usa para datos que abarcan varias
							filas (tal vez un evento continúa durante varias horas en un día determinado). Acepta un
							número entero (mayor o igual a 1) para denotar el número de filas que atraviesa.
						</p>
						<br />
						<div style={{ margin: 'auto', width: '50%' }}>
							<img
								className="materialboxed"
								width="500"
								height="350"
								alt="Ensanchando las filas"
								data-caption="Ensanchando las filas"
								src={ensanchandoFilas27}
							/>
						</div>
						<br />
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el ejemplo anterior, hay cuatro filas:</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La primera fila contiene una celda vacía y los dos
							encabezados de columna.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La segunda fila contiene el encabezado de la fila
							Mañana, junto con Trabajo, que abarca dos filas debajo de la columna Sábado. La entrada
							"Relajarse" abarca tres filas debajo de la columna del domingo.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La tercera fila solo contiene el encabezado de la fila
							Tarde.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;La cuarta fila solo contiene la entrada Cena, ya que
							"Relajarse" se extiende en la celda al lado.
						</p>
						<br />
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si desea ver cómo el navegador interpreta el código
							anterior, no dude en copiarlo y pegarlo en el editor de código para comprenderlo un poco
							mejor.
						</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default EnsanchandoFilas27;
