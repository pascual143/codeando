import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <div>
					<Helmet>
						<meta charSet="utf-8" />
						<meta name="description" content="Codeando, aprender lenguages de programacion" /> 
    					<meta name="keywords" content="HTML, CSS, XML, JavaScript, PHP, bootstrap, jQuery" />
						{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						<title>Codeando</title>
						<title>Aprender a programar con codeando</title>
					</Helmet>
				</div>
                <div>
                    {/* <!-- Header Start --> */}
						<header className="header clearfix">
							<button type="button" id="toggleMenu" className="toggle_menu">
								<i className="uil uil-bars" />
							</button>
							<button id="collapse_menu" className="collapse_menu">
								<i className="uil uil-bars collapse_menu--icon " />
								<span className="collapse_menu--label" />
							</button>
							<div className="main_logo" id="logo">
								<a href="/">
									<img src="images/logo.svg" alt="logo" />
								</a>
								<a href="/">
									<img className="logo-inverse" src="images/ct_logo.svg" alt="logo" />
								</a>
							</div>
							{/* <div className="top-category">
								<div className="ui compact menu cate-dpdwn">
									<div className="ui simple dropdown item">
										<a href="/" className="option_links p-0" title="categories">
											<i className="uil uil-apps" />
										</a>
										<div className="menu dropdown_category5">
											<a href="/" className="item channel_item">
												Html
											</a>
											<a href="/" className="item channel_item">
												Css
											</a>
											<a href="/" className="item channel_item">
												JavaScript
											</a>
											<a href="/" className="item channel_item">
												Jquery
											</a>
											<a href="/" className="item channel_item">
												Bootstrap
											</a>
											<a href="/" className="item channel_item">
												React
											</a>
										</div>
									</div>
								</div>
							</div> */}
							<div className="search120">
								<div className="ui search">
									<div className="ui left icon input swdh10">
										<input
											className="prompt srch10"
											type="text"
											placeholder="Search for Tuts Videos, Tutors, Tests and more.."
										/>
										<i className="uil uil-search-alt icon icon1" />
									</div>
								</div>
							</div>
							
						</header>
						{/* <!-- Header End --> */}
                </div>
            </Fragment>
        )
    }
}


// <div className="header_right">
// 								<ul>
// 									{/* <li>
// 										<a href="create_new_course.html" className="upload_btn" title="Create New Course">
// 											Create New Course
// 										</a>
// 									</li> */}
// 									<li>
// 										<a href="shopping_cart.html" className="option_links" title="cart">
// 											<i className="uil uil-shopping-cart-alt" />
// 											<span className="noti_count">2</span>
// 										</a>
// 									</li>
// 									<li className="ui dropdown">
// 										<a href="/" className="option_links" title="Messages">
// 											<i className="uil uil-envelope-alt" />
// 											<span className="noti_count">3</span>
// 										</a>
// 										<div className="menu dropdown_ms">
// 											<a href="/" className="channel_my item">
// 												<div className="profile_link">
// 													<img src="images/left-imgs/img-6.jpg" alt="img-6" />
// 													<div className="pd_content">
// 														<h6>Zoena Singh</h6>
// 														<p>
// 															Hi! Sir, How are you. I ask you one thing please explain it
// 															this video price.
// 														</p>
// 														<span className="nm_time">2 min ago</span>
// 													</div>
// 												</div>
// 											</a>
// 											<a href="/" className="channel_my item">
// 												<div className="profile_link">
// 													<img src="images/left-imgs/img-5.jpg" alt="img-5" />
// 													<div className="pd_content">
// 														<h6>Joy Dua</h6>
// 														<p>
// 															Hello, I paid you video tutorial but did not play error 404.
// 														</p>
// 														<span className="nm_time">10 min ago</span>
// 													</div>
// 												</div>
// 											</a>
// 											<a href="/" className="channel_my item">
// 												<div className="profile_link">
// 													<img src="images/left-imgs/img-8.jpg" alt="img-8" />
// 													<div className="pd_content">
// 														<h6>Jass</h6>
// 														<p>Thanks Sir, Such a nice video.</p>
// 														<span className="nm_time">25 min ago</span>
// 													</div>
// 												</div>
// 											</a>
// 											<a className="vbm_btn" href="instructor_messages.html">
// 												View All <i className="uil uil-arrow-right" />
// 											</a>
// 										</div>
// 									</li>
// 									<li className="ui dropdown">
// 										<a href="/" className="option_links" title="Notifications">
// 											<i className="uil uil-bell" />
// 											<span className="noti_count">3</span>
// 										</a>
// 										<div className="menu dropdown_mn">
// 											<a href="/" className="channel_my item">
// 												<div className="profile_link">
// 													<img src="images/left-imgs/img-1.jpg" alt="img-1" />
// 													<div className="pd_content">
// 														<h6>Rock William</h6>
// 														<p>
// 															Like Your Comment On Video{' '}
// 															<strong>How to create sidebar menu</strong>.
// 														</p>
// 														<span className="nm_time">2 min ago</span>
// 													</div>
// 												</div>
// 											</a>
// 											<a href="/" className="channel_my item">
// 												<div className="profile_link">
// 													<img src="images/left-imgs/img-2.jpg" alt="img-2" />
// 													<div className="pd_content">
// 														<h6>Jassica Smith</h6>
// 														<p>
// 															Added New Review In Video{' '}
// 															<strong>Full Stack PHP Developer</strong>.
// 														</p>
// 														<span className="nm_time">12 min ago</span>
// 													</div>
// 												</div>
// 											</a>
// 											<a href="/" className="channel_my item">
// 												<div className="profile_link">
// 													<img src="images/left-imgs/img-9.jpg" alt="img-9" />
// 													<div className="pd_content">
// 														<p>
// 															{' '}
// 															Your Membership Approved <strong>Upload Video</strong>.
// 														</p>
// 														<span className="nm_time">20 min ago</span>
// 													</div>
// 												</div>
// 											</a>
// 											<a className="vbm_btn" href="instructor_notifications.html">
// 												View All <i className="uil uil-arrow-right" />
// 											</a>
// 										</div>
// 									</li>
// 									<li className="ui dropdown">
// 										<a href="/" className="opts_account" title="Account">
// 											<img src="images/hd_dp.jpg" alt="hd-dp" />
// 										</a>
// 										<div className="menu dropdown_account">
// 											<div className="channel_my">
// 												<div className="profile_link">
// 													<img src="images/hd_dp.jpg" alt="hd-dp" />
// 													<div className="pd_content">
// 														<div className="rhte85">
// 															<h6>Joginder Singh</h6>
// 															<div className="mef78" title="Verify">
// 																<i className="uil uil-check-circle" />
// 															</div>
// 														</div>
// 														<span>gambol943@gmail.com</span>
// 													</div>
// 												</div>
// 												<a href="my_instructor_profile_view.html" className="dp_link_12">
// 													View Instructor Profile
// 												</a>
// 											</div>
// 											<div className="night_mode_switch__btn">
// 												<a href="/" id="night-mode" className="btn-night-mode">
// 													<i className="uil uil-moon" /> Night mode
// 													<span className="btn-night-mode-switch">
// 														<span className="uk-switch-button" />
// 													</span>
// 												</a>
// 											</div>
// 											<a href="instructor_dashboard.html" className="item channel_item">
// 												Cursus dashboard
// 											</a>
// 											<a href="membership.html" className="item channel_item">
// 												Paid Memberships
// 											</a>
// 											<a href="setting.html" className="item channel_item">
// 												Setting
// 											</a>
// 											<a href="help.html" className="item channel_item">
// 												Help
// 											</a>
// 											<a href="feedback.html" className="item channel_item">
// 												Send Feedback
// 											</a>
// 											<a href="sign_in.html" className="item channel_item">
// 												Sign Out
// 											</a>
// 										</div>
// 									</li>
// 								</ul>
// 							</div>