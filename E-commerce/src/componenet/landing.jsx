import call from "./images/Vector (11).png";
import email from "./images/Vector (12).png";
import settings from "./images/icn settings icn-xs (1).png";
import message from "./images/icn settings icn-xs (2).png";
import FB from "./images/a.png";
import X from "./images/icn settings icn-xs.png";
import dropdown from "./images/Vector (13).png";
import humanicon from "./images/icn settings icn-xs (3).png";
import search from "./images/icn settings icn-xs (4).png";
import search1 from "./images/icn settings icn-xs (5).png";
import search2 from "./images/icn settings icn-xs (6).png";

function Landing() {
  return (
    <div>
      <nav>
        <div className="nav-bar">
          <div>
            <img src={call} alt="" />
          </div>
          <h6>(225) 555-0118</h6>
          <div>
            <img id="email" src={email} alt="" />
          </div>
          <h6>michelle.rivera@example.com</h6>
        </div>
        <h6 id="nav-bar-h">Follow Us and get a chance to win 80% off</h6>
        <div id="follow">
          <h6>Follow Us &nbsp; :</h6>
          <div className="follow-image">
            <img className="follow-image-1" src={X} alt="" />
            <img className="follow-image-1" src={settings} alt="" />
            <img className="follow-image-1" src={FB} alt="" />
            <img className="follow-image-1" src={message} alt="" />
          </div>
        </div>
      </nav>
      <div className="navbar-light">
        <div>
          <h3>Bandage</h3>
        </div>
        <div className="inner-navbar-light-1">
          <ul>
            <li>Home</li>
            <li>
              Shop <img src={dropdown} alt="" />
            </li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>{" "}
        </div>
        <div className="inner-navbar-light">
          <button className="navbar-BTN">
            <img src={humanicon} alt="" /> &nbsp;Login / Register
          </button>
          <ul>
            <li>
              <img src={search} alt="" />
            </li>
            <li>
              <img src={search1} alt="" />
            </li>
            <li>
              <img src={search2} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Landing;
