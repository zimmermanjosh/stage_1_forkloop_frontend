import "./Footer.css";
import logger from "../../utils/logger.jsx";

let date = new Date().getFullYear();

const Footer = () => {
  logger("Footer");

  return (
    <footer className="footer">
      <p>Developed by Joshua Zimmerman</p>
      <p>© {date}</p>
    </footer>
  );
};
export default Footer;
