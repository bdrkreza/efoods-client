export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="social-links">
                <a className="social-btn" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="social-btn" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="social-btn" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="social-btn" href="#">
                  <i className="fab fa-google"></i>
                </a>
                <a className="social-btn" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>

              <p className="text-center">
                <a href="#"> Privacy Policy</a> Copyright © 2020 - 2022.
                <a
                  target="_blank"
                  href="https://rk-reza.web.app/"
                  className="ms-3"
                  rel="noreferrer"
                >
                  rk-reza.app.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
