import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faSearch,
  faShoppingCart,
  faUserFriends,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App ">
      <nav class="navbar navbar-expand-lg navbar-light container">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            BrandName
          </a>
          <div className="d-flex">
            {" "}
            <div className="d-md-none  d-flex mt-3 ">
              <FontAwesomeIcon className="icons " icon={faSearch} />
              <FontAwesomeIcon className="icons" icon={faShoppingCart} />
            </div>
            <button
              class="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex justify-content-center  align-items-center d-md-flex d-none ">
            <div>
              <p className="fw-bold text-center mt-3 me-3 ">Login</p>
            </div>
            <div>
              {" "}
              <button className="btn btn-primary fw-bolder ">
                Become a member
              </button>
            </div>
          </div>
        </div>
      </nav>
      <section id="main" className="main">
        <div className="container ">
          <div className="">
            <h1 className="fw-bold fs-1 mb-5">
              Creating a Beautifull & Usefull Solutitons
            </h1>
            <p>
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>{" "}
          </div>
          <div className="mt-5">
            {" "}
            <button className="btn btn-primary me-4">Get Quote Now</button>
            <button className="btn btn-outline-primary">Learn More</button>
          </div>
        </div>
      </section>
      <section id="product">
        <div className="container">
          {" "}
          <div>
            {" "}
            <h1 className="fw-bold fs-1 mb-5">
              Creating a Beautifull & Usefull Solutitons
            </h1>
            <p>
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>{" "}
          </div>
        </div>

        <div className="container-fluid text-center">
          {" "}
          <div className="row  d-flex justify-content-center">
            <div className="col cards col-lg-4  col-sm-12 text-start d-flex p-3 m-2  align-items-center">
              <div className="me-3">
                {" "}
                <FontAwesomeIcon className="users" icon={faUserFriends} />
              </div>
              <div className=" m-2">
                <h4 className="fw-bold titles">Investment Trading</h4>
                <p className="subtitle">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
            <div className="col cards col-lg-4  col-sm-12 text-start d-flex  m-2  p-3 align-items-center">
              <div className="me-3">
                {" "}
                <FontAwesomeIcon className="users" icon={faUserFriends} />
              </div>
              <div className=" m-2">
                <h4 className="fw-bold titles">Investment Trading</h4>
                <p className="subtitle">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
            <div className="col cards col-lg-4  col-sm-12 text-start d-flex p-3 m-2 align-items-center">
              <div className="me-3">
                {" "}
                <FontAwesomeIcon className="users" icon={faUserFriends} />
              </div>
              <div className=" m-2">
                <h4 className="fw-bold titles">Investment Trading</h4>
                <p className="subtitle">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
            <div className="col cards col-lg-4  col-sm-12 text-start d-flex p-3 m-2 align-items-center">
              <div className="me-3">
                {" "}
                <FontAwesomeIcon className="users" icon={faUserFriends} />
              </div>
              <div className=" m-2">
                <h4 className="fw-bold titles">Investment Trading</h4>
                <p className="subtitle">
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clientsay">
        <div className="container">
          <div className="">
            {" "}
            <h1 className="fw-bold fs-1 mb-5">
              Creating a Beautifull & Usefull Solutitons
            </h1>
            <p>
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>{" "}
          </div>
          <div className="row"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
