import { useState } from "react";
import { increment } from "../assets/appSlice";
import { useDispatch } from "react-redux";
import { useGetPostsQuery } from "../assets/apiSlice";
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
import heroimage from "./images/media bg-cover.png";
import heroimage1 from "./images/media bg-cover (1).png";
import heroimage2 from "./images/media bg-cover (2).png";
import heroimage3 from "./images/media bg-cover (3).png";
import book from './images/bx_bxs-book-reader.png'
import carbonBook from './images/carbon_book.png'
import arrow from './images/uil_arrow-growth.png'

function Landing() {
  const { data, error, isLoading } = useGetPostsQuery();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [visibleProducts, setVisibleProducts] = useState(10);

  const incrementHandler = (e) => {
    e.preventDefault();
    dispatch(increment(input));
    setInput("");
  };

  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + 10);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
          </ul>
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

      <div className="hero-section">
        <div className="hero-image">
          <div>
            <div className="inner-hero inner-hero-1">
              <h6>
                <span className="items">Items</span>
              </h6>
              <h2>FURNITURE</h2>
              <h6>Read</h6>
            </div>
            <img src={heroimage} alt="" />
          </div>
        </div>
        <div>
          <div>
            <div className="inner-hero">
              <h6>
                <span className="items">Items</span>
              </h6>
              <h3>FURNITURE</h3>
              <h6>Read</h6>
            </div>
            <img id="inner-hero-img" src={heroimage1} alt="" />
          </div>
          <div className="inner-hero-section">
            <div>
              <div className="inner-hero">
                <h6>
                  <span className="items">Items</span>
                </h6>
                <h3>FURNITURE</h3>
                <h6>Read</h6>
              </div>
              <img src={heroimage2} alt="" />
            </div>
            <div id="hero-1">
              <div className="inner-hero">
                <h6>
                  <span className="items">Items</span>
                </h6>
                <h3>FURNITURE</h3>
                <h6>Read</h6>
              </div>
              <img src={heroimage3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section>
        <div>
          <h4>Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>

        {/* <ul className="product-grid">
          {data && data.products && data.products.map((product) => ( 
             <li key={product.id}>
               <img className="section-images" src={product.images} alt={product.title} /> 
              <h5>{product.title}</h5>
               <p >{product.description}</p> 
             <p>Category: {product.category}</p>
             <p>Price: ${product.price}</p>
               <p>Discount: {product.discountPercentage}%</p> 
                <p>Rating: {product.rating}</p>
               <p>Stock: {product.stock}</p>
              <p>Tags: {product.tags.join(', ')}</p>  
             </li>
           ))}
     </ul>  */}

        <ul className="product-grid">
          {data &&
            data.products &&
            data.products.slice(0, visibleProducts).map((product) => (
              <li key={product.id} className="product-item">
                <img
                  className="section-images"
                  src={product.images[0]}
                  alt={product.title}
                />
                <h5>{product.title}</h5>
                <p> {product.category}</p>
                <div id="product-amount">
                <p id="product-price">${product.price}</p>
                <p id="discount">{product.discountPercentage}%</p>
                </div>
              </li>
            ))}
        </ul>

        {data && data.products && visibleProducts < data.products.length && (
          <button className="view-more-btn" onClick={handleViewMore}>
            LOAD MORE PRODUCTS
          </button>
        )}
      </section>

      <div>
        <h4>Featured Products</h4>
        <h3>THE BEST SERVICES</h3>
        <p>Problems trying to resolve the conflict between </p>
        <div>
            <img src={book} alt="" />
            <h3>Easy Wins</h3>
            <p>Get your best looking smile now!</p>
        </div>
        <div>
            <img src={carbonBook} alt="" />
            <h3>Concrete</h3>
            <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
        </div>
        <div>
            <img src={arrow} alt="" />
            <h3>Hack Growth</h3>
            <p>Overcame any hurdle or any other problem.</p>
        </div>
     </div>
    </div>
  );
}

export default Landing;
