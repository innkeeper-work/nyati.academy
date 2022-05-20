import React from "react";
import { Link } from "react-router-dom";
import nyatilogo from "../images/nyatilogo.png";
import aboutimage from "../images/aboutimage.png";
import heroimage2 from "../images/heroimage2.png";
import team from "../images/team.jpg";
import webdevv from "../images/webdevv.jpg";
import software from "../images/software.jpg";
import data from "../images/data.jpg";
import cloud from "../images/cloud.png";
import {
  FacebookIcon,
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../pages/Icons";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <TeamSection /> */}
      <Footer />
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mx-2">
      <div className="container-fluid px-2">
        <a href="/" className="navbar-brand ms-2">
          {" "}
          <img src={nyatilogo} className="" alt="" />
        </a>
        <button
          className="navbar-toggler btn"
          type=""
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDarkDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link active mx-3"
                aria-current="page"
                style={{ color: "#000" }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link active mx-3"
                aria-current="page"
                style={{ color: "#000" }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link mx-3"
                style={{ color: "#000" }}
              >
                Contact
              </a>
            </li>
            <Link to="" className="mx-3 mt-2" style={{ color: "#732929" }}>
              <LinkedInIcon />
            </Link>

            <Link
              to="https://www.instagram.com/nyatiacademy/"
              className="mx-3 mt-2"
              style={{ color: "#732929" }}
            >
              <InstagramIcon />
            </Link>

            <Link to="" className="mx-3 mt-2" style={{ color: "#732929" }}>
              <FacebookIcon />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
const HeroSection = () => {
  return (
    <div class="container px-4 py-3">
      <div class="row align-items-center g-5 py-1">
        <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
          <h1
            class="display-5 fw-bold mainHeading lh-1 mb-3 d-xl-block d-lg-block d-md-none d-sm-block d-block"
            // style={{ color: "#732929" }}
          >
            Nyati <br></br>Talent Academy
          </h1>
          <h2 class="lh-1 mb-3 mainHeading d-xl-none d-lg-none d-md-block d-sm-none d-none">
            Nyati <br></br>Talent Academy
          </h2>
          <p class="lead">Human and Technical Skills for the Future of Work</p>
          {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">

          </div> */}
        </div>
        <div class="col-lg-5 col-md-5 col-sm-10 col-xs-10 px-5">
          <img src={heroimage2} class="d-block mx-lg-auto img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div
      className="container-fluid py-5"
      id="about"
      style={{ backgroundColor: "#FFF5DA" }}
    >
      <div className="row d-flex flex-row-reverse justify-content-around">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="my-lg-5">
            <div className="card-body">
              <h3 className="card-title">About Us</h3>
              <p className="card-text">
                Nyati Talent Academy (Nyati) is established to respond to the
                Junior developer/Entry level Tech Talent gap, especially in the
                Start-up Ecosysytem. Nyati focuses on attitude training and
                personal developmemt that leads to improved performance at work
                and in the private lives of the Trainees.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-10 col-xs-10 px-5 mt-4">
          <div className="">
            <img src={aboutimage} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="">
            <img
              src={software}
              alt=""
              width="100px"
              height="100px"
              className="rounded-circle ms-3 border border-light border-5"
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>Software Development</b>
              </h5>
              <p className="card-text">
                This course gives students experiennce in designing,
                implemeting,testing and debugging large problems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="">
            <img
              src={cloud}
              alt=""
              width="100px"
              height="100px"
              className="rounded-circle ms-3 border border-light border-5"
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>Cloud Computing</b>
              </h5>
              <p className="card-text">
                This course introduces students to the basics of cloud computing
                and software development for cloud platforms.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="">
            <img
              src={data}
              alt=""
              width="100px"
              height="100px"
              className="rounded-circle ms-3 border border-light border-5"
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>Data Analysis</b>
              </h5>
              <p className="card-text">
                This course introduces students to the fundamentals of data
                analysis, and the tools that are utilized to perform daily
                roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const TeamSection = () => {
//   return (
//     <div className="container my-5">
//       <h5 className="text-center">Our Team</h5>
//       <div className="row pt-4">
//         <div className="col-lg-4 col-md-6 col-sm-12">
//           <div className="card h-100">
//             <img src={team} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <p className="card-text">Name</p>
//               <h5 className="card-title">Role</h5>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 col-sm-12">
//           <div className="card h-100">
//             <img src={team} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <p className="card-text">Name</p>{" "}
//               <h5 className="card-title">Role</h5>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 col-sm-12">
//           <div className="card h-100">
//             <img src={team} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <p className="card-text">Name</p>
//               <h5 className="card-title">Role</h5>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid"
        id="contact"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
      >
        <footer className="py-4">
          <div className="row d-flex justify-content-center px-5">
            <div className="col-lg-3 col-md-4">
              <img src={nyatilogo} className="card-img-top" alt="..." />
            </div>

            <div className="col-lg-3 col-md-4">
              <h5>
                <b>Menu</b>
              </h5>

              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-black">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#about" className="nav-link p-0 text-black">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-md-4">
              <h5>
                <b>Contact Info</b>
              </h5>
              <p>362, Herbert Macaulay street, Yaba, Lagos.</p>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="tel:+2348173633236"
                    className="nav-link p-0 text-black"
                  >
                    +2348173633236
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="mailto:hello@nyati.academy"
                    className="nav-link p-0 text-black"
                  >
                    hello@nyati.academy
                  </a>
                </li>
                <div>
                  <div className="d-flex">
                    {" "}
                    <Link to="" className="mx-2" style={{ color: "#732929" }}>
                      <FacebookIcon />
                    </Link>
                    <Link
                      to="https://www.instagram.com/nyatiacademy/"
                      className="mx-2"
                      style={{ color: "#732929" }}
                    >
                      <InstagramIcon />
                    </Link>
                    <Link to="" className="mx-2" style={{ color: "#732929" }}>
                      <LinkedInIcon />
                    </Link>
                  </div>{" "}
                </div>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
