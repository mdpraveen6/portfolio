import "./footer.css";

function Footer() {
  return (
    <div className="end">
      <div className="getinfo">
        {/* Each anchor now has a valid href attribute */}
        <span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram text-5xl"></i>
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/praveen-md" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </span>
        <span>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdpraveen94@gmail.com&su=Mail from Portfolio" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a>
        </span>
      </div>
      <div className="copyright">
        <h2>
          <i className="fa-regular fa-copyright" style={{ color: "white" }}></i> 2026. All rights reserved.
        </h2>
      </div>
    </div>
  );
}

export default Footer;