import React, { Component } from 'react';
import Bg from './bg.jpg';

class Header extends Component {
  render() {
    return (
      <div>
        
    <header className="header header-inverse h-fullscreen pb-20 bg-fixed"  style={{backgroundImage: `url(${Bg})`}} data-overlay="1">
      <div className="container">

        <div className="row h-full">
          <div className="col-12 col-lg-12 align-self-center">

            <h1>Nomadic adalah komunitas sosial platform publishing untuk berbagi <br /> ide dan cerita menarik.</h1>
            <br />
            <h5 className="fw-200" style={{color: 'yellow'}}>Jadilah yang pertama saat live dan dapatkan <span className="mark-border">merchandise</span> menarik.</h5>

            <br />
              <form className="form-inline form-glass form-round validate" action="https://nomadic.us12.list-manage.com/subscribe/post?u=7fec1c62237dd99713d389aaf&amp;id=cd7740a835"  rel="noopener noreferrer" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"  novalidate >
              <div className="input-group w-full">
                <input type="text" name="EMAIL" className="form-control required email" placeholder="Masukan Email Anda" id="mce-EMAIL" />
                <span className="input-group-btn">
                  <button className="btn btn-success" type="submit"  id="mc-embedded-subscribe">Subscribe now<i className="ti-arrow-right fs-9 ml-8"></i></button>
                </span>
              </div>
            </form>


          </div>

          <br /><br /><br />
          
          <div className="social social-boxed social-rounded social-inverse text-center ml-10">
            <a className="social-facebook" href="https://www.facebook.com/nomadic.co.id"  target="_blank"  rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a className="social-twitter" href="https://twitter.com/NomadicId" target="_blank"  rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            <a className="social-instagram" href="https://www.instagram.com/nomadicoid" target="_blank"  rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
          </div>

        </div>

      </div>
    </header>
       
      </div>
    );
  }
}

export default Header;
