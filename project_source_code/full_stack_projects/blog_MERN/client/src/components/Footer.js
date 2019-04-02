import React from "react";

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer id="main-footer" className="bg-dark text-white p-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="lead text-center">Copyright &copy; {getYear()} Blogen</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
