import { useGetPostsQuery } from "../assets/apiSlice";
import { Link } from "react-router-dom";
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
import none1 from "./images/icn arrow-right icn-xs.png";
import link from "./images/link.png";
import couch from "./images/unsplash_QANOF9iJlFs.png";
import colmed from './images/col-md-2.png'
import colmed1 from './images/col-md-2 (1).png'
import colmed2 from './images/col-md-2 (2).png'
import colmed3 from './images/col-md-2 (3).png'
import colmed4 from './images/col-md-2 (4).png'
import colmed5 from './images/col-md-2 (5).png'
import facebook from "./images/facebook.png";
import instagram from "./images/ant-design_instagram-outlined.png";
import twitter from "./images/twitter.png";


function Product() {
  const { data: products, error, isLoading } = useGetPostsQuery();

  return (
    <div>
      <nav className="product-nav">
        <div className="product-nav-bar">
          <div>
            <img src={call} alt="" />
          </div>
          <h6>(225) 555-0118</h6>
          <div>
            <img id="product-email" src={email} alt="" />
          </div>
          <h6>michelle.rivera@example.com</h6>
        </div>
        <h6 id="product-nav-bar-h">
          Follow Us and get a chance to win 80% off
        </h6>
        <div id="product-follow">
          <h6>Follow Us &nbsp; :</h6>
          <div className="product-follow-image">
            <img className="follow-image-1" src={X} alt="" />
            <img className="follow-image-1" src={settings} alt="" />
            <img className="follow-image-1" src={FB} alt="" />
            <img className="follow-image-1" src={message} alt="" />
          </div>
        </div>
      </nav>

      <div className="product-navbar-light">
        <div className="product-navbar-light-1">
          <div>
            <h3>Bandage</h3>
          </div>
          <div className="product-inner-navbar-light-1">
            <ul>
              <li>Home</li>
              <li>
                Shop <img src={dropdown} alt="" />
              </li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </div>
          <div className="product-inner-navbar-light">
            <button className="product-navbar-BTN">
              <img src={humanicon} alt="" /> &nbsp;Login / Register
            </button>
            <ul>
              <li>
                <img src={search} alt="" />
              </li>
              <li>
                <Link to="/landing">
                  <img src={search1} alt="" />
                </Link>
              </li>
              <li>
                <img src={search2} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="home">
        <div className="inner-home">
          <ul>
            <li>
              Home <img src={none1} alt="" />
            </li>
          </ul>
          <h6>Shop</h6>
        </div>
      </div>

      <div></div>

      <div className="product-discription-2">
        <ul>
          <li>Description</li>
          <li>Additional Information</li>
          <li>
            Reviews <img src={link} alt="" />
          </li>
        </ul>
      </div>

      <div>
        <div className="container">
          <div className="container-row">
            <div className="card">
              <h3>the quick fox jumps over </h3>
              <div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div>
                <p id="inner-card">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <div>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
            </div>

            <div className="card-img">
              <img src={couch} alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="BESTSELLER-PRODUCTS">
        <div className="BESTSELLER-PRODUCT-1">
          <h3>BESTSELLER PRODUCTS</h3>
          {isLoading && <p>Loading...</p>}
        {error && <p>Error loading products</p>}
          {products && (
            <div className="product-products-grid">
              {products.products.slice(0, 8).map((product) => (
                <div key={product.id} className="product-product-item">
                  <img
                    className="product-section-images"
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <h5>{product.title}</h5>
                  <p  id="product-product-category">{product.category}</p>
                  <div id="product-product-amount">
                    <p id="product-product-price">${product.price}</p>
                    <p id="product-discount">{product.discountPercentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="cliants">
        <div className="cliants-1">
            <img src={colmed} alt="" />
            <img src={colmed1} alt="" />
            <img src={colmed2} alt="" />
            <img src={colmed3} alt="" />
            <img src={colmed4} alt="" />
            <img src={colmed5} alt="" />
        </div>
      </div>

      <div className="bandage">
        <h3>Bandage</h3>
        <div>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>

      <footer>
        <div className="inner-footer">
            <div className="inner-footer-1">
              <h5>Company Info</h5>
              <a href="">
                <p>About Us</p>
              </a>
              <a href="">
                <p>Carrier</p>
              </a>
              <a href="">
                <p>We are hiring</p>
              </a>
              <a href="">
                <p>Blog</p>
              </a>
            </div>
            <div className="inner-footer-1">
              <h5>Legal</h5>
              <a href="">
                <p>About Us</p>
              </a>
              <a href="">
                <p>Carrier</p>
              </a>
              <a href="">
                <p>We are hiring</p>
              </a>
              <a href="">
                <p>Blog</p>
              </a>
            </div>
            <div className="inner-footer-1">
              <h5>Features</h5>
              <a href="">
                <p>Business Marketing</p>
              </a>
              <a href="">
                <p>User Analytic</p>
              </a>
              <a href="">
                <p>Live Chat</p>
              </a>
              <a href="">
                <p>Unlimited Support</p>
              </a>
            </div>
            <div className="inner-footer-1">
              <h5>Resources</h5>
              <a href="">
                <p>IOS & Android</p>
              </a>
              <a href="">
                <p>Watch a Demo</p>
              </a>
              <a href="">
                <p>Customers</p>
              </a>
              <a href="">
                <p>API</p>
              </a>
            </div>
            <div className="inner-footer-1">
              <h5>Get In Touch</h5>
              <div className="input-group">
                <input
                  type="Email"
                  className="input-field"
                  placeholder="Your Email"
                />
                <button className="subscribe-btn">Subscribe</button>
              </div>
                <p id="inner-footer-1-p">Lore imp sum dolor Amit</p>
            </div>
        </div>
        <div  id="product-last-footer"><p>Made With Love By Finland All Right Reserved </p></div>
      </footer>

    </div>
  );
}

export default Product;
