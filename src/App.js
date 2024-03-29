import React, { Fragment } from 'react';
import './styles/css/App.css';

//Routing
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components Manual
import Home from './components/Home.js';
import About from './components/About.js';
import Tutorial from './components/layouts/Tutorial.js';
import Videos from './components/layouts/Videos.js';
// import Nav from './components/layouts/Nav.js';
import Explora from './components/layouts/Explora.js';
import Header from './components/Header';
import Footer from './components/layouts/Footer';
// import HomeFeatures from './components/Home/HomeFeatures.js';

//Components Manual Html
import IntroHtml from './components/Tutorial/Html/Html';
import MenuTutorialHtml from './components/MenusTutorial/Html/menuTutorialHtml';
import queEsHtml from './components/Tutorial/Html/CapitulosHtml/queEsHtml';
import AnatomiaHtml from './components/Tutorial/Html/CapitulosHtml/anatomiaHtml';
import NormasStandar from './components/Tutorial/Html/CapitulosHtml/normasStandard3';
import EtiquetaHtml from './components/Tutorial/Html/CapitulosHtml/etiquetaHtml4';
import EstructuraHtml from './components/Tutorial/Html/CapitulosHtml/estructuraHtml5';
import Divs from './components/Tutorial/Html/CapitulosHtml/divs6';
import Head from './components/Tutorial/Html/CapitulosHtml/head7';
import Title from './components/Tutorial/Html/CapitulosHtml/title8';
import Headings from './components/Tutorial/Html/CapitulosHtml/headings9';
import Atributos from './components/Tutorial/Html/CapitulosHtml/atributos10';
import Texto from './components/Tutorial/Html/CapitulosHtml/texto11';
import EstilosTexto from './components/Tutorial/Html/CapitulosHtml/estilosTexto12';
import SaltosLinea from './components/Tutorial/Html/CapitulosHtml/saltosLinea13';
import ListasNoOrdenadas from './components/Tutorial/Html/CapitulosHtml/listasNoOrdenadas14';
import ListasOrdenadas from './components/Tutorial/Html/CapitulosHtml/listasOrdenadas15';
import Imagenes from './components/Tutorial/Html/CapitulosHtml/imagenes16';
import VideosHtml from './components/Tutorial/Html/CapitulosHtml/videos17';
import AnclasHyperlinks from './components/Tutorial/Html/CapitulosHtml/anclasHyperlinks19';
import EnlacePagina from './components/Tutorial/Html/CapitulosHtml/enlacePagina20';
import EnlaceOtra from './components/Tutorial/Html/CapitulosHtml/enlaceOtra21';
import ImagenesHyperlink from './components/Tutorial/Html/CapitulosHtml/imagenesHyperlinks22';
import Tabla from './components/Tutorial/Html/CapitulosHtml/tabla23';
import TablasEncabezados24 from './components/Tutorial/Html/CapitulosHtml/tablasEncabezados24';
import BordesTablas25 from './components/Tutorial/Html/CapitulosHtml/bordesTablas25';
import ExpandiendoColumnas26 from './components/Tutorial/Html/CapitulosHtml/expandiendoColumnas26';
import EnsanchandoFilas27 from './components/Tutorial/Html/CapitulosHtml/ensanchandoFilas27';
import CuerpoTabla28 from './components/Tutorial/Html/CapitulosHtml/cuerpoTabla28';
import CabezaTabla29 from './components/Tutorial/Html/CapitulosHtml/cabezaTabla29';
import FooterTabla30 from './components/Tutorial/Html/CapitulosHtml/footerTabla30';
import IntroduccionFormularios31 from './components/Tutorial/Html/CapitulosHtml/introduccionFormularios31';
import EntradaTexto32 from './components/Tutorial/Html/CapitulosHtml/entradaTexto32.js';
import AgregarEtiqueta33 from './components/Tutorial/Html/CapitulosHtml/agregarEtiqueta33';
import EntradaContrasena34 from './components/Tutorial/Html/CapitulosHtml/entradaContrasena34';
import EntradaNumeros35 from './components/Tutorial/Html/CapitulosHtml/entradaNumeros35.js';
import RangoEntrada36 from './components/Tutorial/Html/CapitulosHtml/rangoEntrada36';
import EntradaVerificacion37 from './components/Tutorial/Html/CapitulosHtml/entradaVerificacion37';
import EntradaRadio38 from './components/Tutorial/Html/CapitulosHtml/entradaRadio38';
import ListaDesplegable39 from './components/Tutorial/Html/CapitulosHtml/listaDesplegable39';
import EntradaDataList from './components/Tutorial/Html/CapitulosHtml/entradaDatalist40';
import ElementoAreaTexto41 from './components/Tutorial/Html/CapitulosHtml/elementoAreaTexto41';
import ValidacionFormularios42 from './components/Tutorial/Html/CapitulosHtml/validaciónFormularios42';
import RequerirEntrada43 from './components/Tutorial/Html/CapitulosHtml/requerirEntrada43';
import EstablecerMinMax44 from './components/Tutorial/Html/CapitulosHtml/establecerMinMax44';
import LongitudTexto45 from './components/Tutorial/Html/CapitulosHtml/longitudTexto45';
import CoincidirPatron46 from './components/Tutorial/Html/CapitulosHtml/coincidirPatron46';
import SemanticoHtml47 from './components/Tutorial/Html/CapitulosHtml/semanticoHtml47';
import MainYPiePagina48 from './components/Tutorial/Html/CapitulosHtml/mainYPiePagina48';
import ArticuloYSeccion49 from './components/Tutorial/Html/CapitulosHtml/articuloYSeccion49';
import Aside50 from './components/Tutorial/Html/CapitulosHtml/aside50';
import FigureFigcaption51 from './components/Tutorial/Html/CapitulosHtml/figureFigcaption51';

//components Manual Css
import IntroCss from './components/Tutorial/Css/Css';
import QueEsCss from './components/Tutorial/Css/CapitulosCss/queEsCss';
import AgregarEstilos2 from './components/Tutorial/Css/CapitulosCss/agregarEstilos2';
import CreandoNormas3 from './components/Tutorial/Css/CapitulosCss/creandoNormas3';
import SelectoresCss4 from './components/Tutorial/Css/CapitulosCss/selectoresCss4';
import Backgrounds5 from './components/Tutorial/Css/CapitulosCss/backgrounds5';
import Centering6 from './components/Tutorial/Css/CapitulosCss/centering6';
import BoxModel7 from './components/Tutorial/Css/CapitulosCss/boxModel7';
import Margenes8 from './components/Tutorial/Css/CapitulosCss/margenes8';
import Paddings9 from './components/Tutorial/Css/CapitulosCss/paddings9';
import Borders10 from './components/Tutorial/Css/CapitulosCss/borders10';
import Overflow11 from './components/Tutorial/Css/CapitulosCss/overflow11';
import Float12 from './components/Tutorial/Css/CapitulosCss/float12';
import Typography13 from './components/Tutorial/Css/CapitulosCss/typography13';
import Flexbox14 from './components/Tutorial/Css/CapitulosCss/flexbox14';
import Color15 from './components/Tutorial/Css/CapitulosCss/color15';
import Opacity16 from './components/Tutorial/Css/CapitulosCss/opacity16';
import Posicionamiento17 from './components/Tutorial/Css/CapitulosCss/posicionamineto17';
import Display18 from './components/Tutorial/Css/CapitulosCss/display18';
import Align19 from './components/Tutorial/Css/CapitulosCss/align19';
import Pseudoclasses20 from './components/Tutorial/Css/CapitulosCss/pseudoclasses20';
import Grid22 from './components/Tutorial/Css/CapitulosCss/grid22';
import Tablas23 from './components/Tutorial/Css/CapitulosCss/tablas23';
import Transiciones24 from './components/Tutorial/Css/CapitulosCss/transiciones24';
import Animaciones25 from './components/Tutorial/Css/CapitulosCss/animaciones25';
import Tranformaciones2D26 from './components/Tutorial/Css/CapitulosCss/tranformaciones2D26';


//Componentes Manual JavaScript
import QueEsJavascript from './components/Tutorial/Javascript/CapitulosJavascript/queEsJavascript1';
import AnadirJavascript2 from './components/Tutorial/Javascript/CapitulosJavascript/anadirJavascript2';
import OutputJavascript3 from './components/Tutorial/Javascript/CapitulosJavascript/outputJavaScript3';
import TipoDatos4 from './components/Tutorial/Javascript/CapitulosJavascript/tipoDatos4';
import Number5 from './components/Tutorial/Javascript/CapitulosJavascript/tipoDatos4';


// Componentes JavaScript
import IntroJavascript from './components/Tutorial/Javascript/Javascript';



// Components CheapSheet
import CheapSheetHtml from './components/CheapSheet/CheapSheetHtml';
import MenuApuntesHtml from './components/CheapSheet/MenuApuntes/menuApuntesHtml';
import RefHtml from './components/CheapSheet/RefHtml/refHtml';
import RefDoctype from './components/CheapSheet/RefHtml/refDoctype';
import RefHead from './components/CheapSheet/RefHtml/refHead';
import RefMeta from './components/CheapSheet/RefHtml/refMeta';
import RefTitle from './components/CheapSheet/RefHtml/refTitle';
import RefBody from './components/CheapSheet/RefHtml/refBody';
import RefHeadings from './components/CheapSheet/RefHtml/refHeadings';
import RefParagraph from './components/CheapSheet/RefHtml/refParagraph';
import RefAgregarEtiquetas from './components/CheapSheet/RefHtml/refAgregarEtiquetas';
import refAnclas from './components/CheapSheet/RefHtml/refAnclas';
import RefArticuloSeccion from './components/CheapSheet/RefHtml/refArticuloSeccion';
import RefAside from './components/CheapSheet/RefHtml/refAside';
import RefAtributos from './components/CheapSheet/RefHtml/refAtributos';
import MenuTutorialCss from './components/MenusTutorial/Css/menuTutorialCss';
import CheapSheetCss from './components/CheapSheet/CheapSheetCss';
// import MenuApuntesCss from './components/CheapSheet/MenuApuntes/menuApuntesCss';


function App() {
	return (
		<Router>
			<Fragment>
				<Header />
				{/* <Nav /> */}
				<Route exact path="/" component={Home} />
				<Route exact path="/Tutorial" component={Tutorial} />
				<Route exact path="/Videos" component={Videos} />
				<Route exact path="/About" component={About} />
				<Route exact path="/Explora" component={Explora} />

				{/* Routes Manual */}
				<Route exact path="/Html" component={IntroHtml} />
				<Route exact path="/Css" component={IntroCss} />
				<Route exact path="/Javascript" component={IntroJavascript} />

				{/* Routes Menus Tutorial Left HTML*/}
				<Route exact path="/MenuTutorialHtml" component={MenuTutorialHtml} />
				<Route path="/queEsHtml" component={queEsHtml} />
				<Route path="/anatomiaHtml" component={AnatomiaHtml} />
				<Route path="/normasStandard" component={NormasStandar} />
				<Route path="/etiquetaHtml" component={EtiquetaHtml} />
				<Route path="/estructuraHtml" component={EstructuraHtml} />
				<Route path="/divs" component={Divs} />
				<Route path="/head" component={Head} />
				<Route path="/title" component={Title} />
				<Route path="/headings" component={Headings} />
				<Route path="/atributos" component={Atributos} />
				<Route path="/texto" component={Texto} />
				<Route path="/estilosTexto" component={EstilosTexto} />
				<Route path="/saltosLinea" component={SaltosLinea} />
				<Route path="/listasNoOrdenadas" component={ListasNoOrdenadas} />
				<Route path="/listasOrdenadas" component={ListasOrdenadas} />
				<Route path="/imagenes" component={Imagenes} />
				<Route path="/videos" component={VideosHtml} />
				<Route path="/anclasHyperlinks" component={AnclasHyperlinks} />
				<Route path="/enlacePagina" component={EnlacePagina} />
				<Route path="/enlaceOtra" component={EnlaceOtra} />
				<Route path="/imagenesHyperlink" component={ImagenesHyperlink} />
				<Route path="/tabla" component={Tabla} />
				<Route path="/encabezadoTabla" component={TablasEncabezados24} />
				<Route path="/bordesTabla" component={BordesTablas25} />
				<Route path="/expandiendoColumnas" component={ExpandiendoColumnas26} />
				<Route path="/ensanchandoFilas" component={EnsanchandoFilas27} />
				<Route path="/cuerpoTabla" component={CuerpoTabla28} />
				<Route path="/cabezaTabla" component={CabezaTabla29} />
				<Route path="/footerTabla" component={FooterTabla30} />
				<Route path="/introduccionFormularios" component={IntroduccionFormularios31} />
				<Route path="/entradaTexto" component={EntradaTexto32} />
				<Route path="/agregarEquiteca" component={AgregarEtiqueta33} />
				<Route path="/entradaContrasena" component={EntradaContrasena34} />
				<Route path="/entradaNumeros" component={EntradaNumeros35} />
				<Route path="/rangoEntrada" component={RangoEntrada36} />
				<Route path="/entradaVerificacion" component={EntradaVerificacion37} />
				<Route path="/entradaRadio" component={EntradaRadio38} />
				<Route path="/listaDesplegable" component={ListaDesplegable39} />
				<Route path="/entradaDataList" component={EntradaDataList} />
				<Route path="/elementoAreaTexto" component={ElementoAreaTexto41} />
				<Route path="/validacionFormularios" component={ValidacionFormularios42} />
				<Route path="/requerirEntrada" component={RequerirEntrada43} />
				<Route path="/establecerMinMax" component={EstablecerMinMax44} />
				<Route path="/longitudTexto" component={LongitudTexto45} />
				<Route path="/coincidirPatron" component={CoincidirPatron46} />
				<Route path="/semanticoHtml" component={SemanticoHtml47} />
				<Route path="/piePagina" component={MainYPiePagina48} />
				<Route path="/articuloSeccion" component={ArticuloYSeccion49} />
				<Route path="/aside" component={Aside50} />
				<Route path="/figureFigcaption" component={FigureFigcaption51} />

				{/* Routes Menus Tutorial Left CSS*/}
				<Route path="/queEsCss" component={QueEsCss} />
				<Route path="/agregarEstilos" component={AgregarEstilos2} />
				<Route path="/creandoNormas" component={CreandoNormas3} />
				<Route path="/selectoresCss" component={SelectoresCss4} />
				<Route path="/backgrounds" component={Backgrounds5} />
				<Route path="/centering" component={Centering6} />
				<Route path="/boxModel" component={BoxModel7} />
				<Route path="/margenes" component={Margenes8} />
				<Route path="/paddings" component={Paddings9} />
				<Route path="/borders" component={Borders10} />
				<Route path="/overflow" component={Overflow11} />
				<Route path="/float" component={Float12} />
				<Route path="/tipografia" component={Typography13} />
				<Route path="/flexbox" component={Flexbox14} />
				<Route path="/color" component={Color15} />
				<Route path="/opacidad" component={Opacity16} />
				<Route path="/posicionamiento" component={Posicionamiento17} />
				<Route path="/display" component={Display18} />
				<Route path="/align" component={Align19} />
				<Route path="/pseudoclasses" component={Pseudoclasses20} />
				<Route path="/grid" component={Grid22} />
				<Route path="/tablas" component={Tablas23} />
				<Route path="/transiciones" component={Transiciones24} />
				<Route path="/animaciones" component={Animaciones25} />
				<Route path="/tranformaciones" component={Tranformaciones2D26} />

				{/* Routes Menus Tutorial Left JavaScript*/}
				<Route path="/queEsJavascript" component={QueEsJavascript} />
				<Route path="/anadirJavascript" component={AnadirJavascript2} />
				<Route path="/outputJavaScript" component={OutputJavascript3} />
				<Route path="/tipoDatos" component={TipoDatos4} />
				<Route path="/numberos" component={Number5} />



				{/* Routes CheapSheet HTML*/}
				<Route exact path="/CheapSheetHtml" component={CheapSheetHtml} />
				<Route exact path="/MenuApuntesHtml" component={MenuApuntesHtml} />
				<Route path="/queEsHtml" component={queEsHtml} />
				<Route path="/CheapSheet/doctype" component={RefDoctype} />
				<Route path="/CheapSheet/html" component={RefHtml} />
				<Route path="/CheapSheet/head" component={RefHead} />
				<Route path="/CheapSheet/meta" component={RefMeta} />
				<Route path="/CheapSheet/title" component={RefTitle} />
				<Route path="/CheapSheet/body" component={RefBody} />
				<Route path="/CheapSheet/headings" component={RefHeadings} />
				<Route path="/CheapSheet/paragraph" component={RefParagraph} />
				<Route path="/CheapSheet/agregarEtiquetas" component={RefAgregarEtiquetas} />
				<Route path="/CheapSheet/anclas" component={refAnclas} />
				<Route path="/CheapSheet/articulo" component={RefArticuloSeccion} />
				<Route path="/CheapSheet/seccion" component={RefArticuloSeccion} />
				<Route path="/CheapSheet/aside" component={RefAside} />
				<Route path="/CheapSheet/atributos" component={RefAtributos} />


				{/* Menu Apuntes Css */}
				<Route exact path="/CheapSheetCss" component={CheapSheetCss} />
				<Route exact path="/MenuTutorialCss" component={MenuTutorialCss} />
				<Route path="/queEsHtml" component={queEsHtml} />
				<Route path="/CheapSheet/doctype" component={RefDoctype} />
				<Route path="/CheapSheet/html" component={RefHtml} />
				<Route path="/CheapSheet/head" component={RefHead} />
				<Route path="/CheapSheet/meta" component={RefMeta} />
				<Route path="/CheapSheet/title" component={RefTitle} />
				<Route path="/CheapSheet/body" component={RefBody} />
				<Route path="/CheapSheet/headings" component={RefHeadings} />
				<Route path="/CheapSheet/paragraph" component={RefParagraph} />
				<Route path="/CheapSheet/agregarEtiquetas" component={RefAgregarEtiquetas} />
				<Route path="/CheapSheet/anclas" component={refAnclas} />
				<Route path="/CheapSheet/articulo" component={RefArticuloSeccion} />
				<Route path="/CheapSheet/seccion" component={RefArticuloSeccion} />
				<Route path="/CheapSheet/aside" component={RefAside} />
				<Route path="/CheapSheet/atributos" component={RefAtributos} />


				{/* Servicios External Link */}
				<Route
					path="/tandgo" target="_blank"
					component={() => {
						window.location.href = 'http://tandGo.org';
						return null;
					}}
				/>
        		<Route
					path="/tandgo/brandIdentity"
					component={() => {
						window.location.href = 'http://tandgo.org/digitalMarketing.html';
						return null;
					}}
				/>
				<Route
					path="/tandgo/webDesign"
					component={() => {
						window.location.href = 'http://tandgo.org/webDesign.html';
						return null;
					}}
				/>
				<Route
					path="/tandgo/webDeveloment"
					component={() => {
						window.location.href = 'http://tandgo.org/webDevelopment.html';
						return null;
					}}
				/>
				<Route
					path="/tandgo/brandIdentity"
					component={() => {
						window.location.href = 'http://tandgo.org/digitalMarketing.html';
						return null;
					}}
				/>
				<Route
					path="/tandgo/digitalMarketing"
					component={() => {
						window.location.href = 'http://tandgo.org/digitalMarketing.html';
						return null;
					}}
				/>

				<Footer />
			</Fragment>
		</Router>
	);
}

export default App;
