import React, { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./profile.css";
import { Link } from "react-router-dom";

function FormTextExample() {
  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    const images = [
      "https://img.freepik.com/free-photo/3d-rendered-illustration-tiger-cartoon-character-isolated-white-background_1142-36687.jpg?w=1380&t=st=1701590595~exp=1701591195~hmac=a13b13e983d60d5978c876a87ce821834d25ebb5ac32578e205862b43a23950e",
      "https://img.freepik.com/free-psd/3d-rendering-wild-animal_23-2149962429.jpg?w=1380&t=st=1701591075~exp=1701591675~hmac=0165618a166e4f85dc32c04dd93df757fa7520df1c9df462b826a82c822a254f",
      "https://img.freepik.com/free-photo/3d-view-adorable-pet-cat_52683-117184.jpg?w=1380&t=st=1701590699~exp=1701591299~hmac=e993eb43d3a51c9e9d848f559edaa038130a4b9ffc08c89364329ef6758f3599",
      "https://img.freepik.com/free-photo/fun-3d-cartoon-white-labrador-retriever_183364-118245.jpg?w=1060&t=st=1701590990~exp=1701591590~hmac=7c3a959edf3c2dfc1c5f908bd99e4b8f35f0a84ec143bce63176dab5750bfa60",
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    setProfileImage(randomImage);
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col xs={6} md={4} className="mx-auto mt-5">
            <Link className="nav-link  edit " to="login">
              change your access data{" "}
            </Link>
            <Image
              className="w-25"
              src={profileImage}
              roundedCircle
              style={{ boxShadow: "0px 10px 10px 2px rgba(0, 0, 0, 0.6)" }}
            />
          </Col>
        </Row>
      </Container>
     
        <div className="underlay">
          <div className=" text-center justify-content-center  ">
            <h1 className=" text fw-bold mx-3 " id="lastname">
              Polizzotto
            </h1>
            <h1 className="  text fw-bold" id="firstname">
              Emanuele
            </h1>
            <br />
            <h1 className=" text  mt-4 fw-bold ">
              {" "}
              Username: <h2 id="username"> emignox</h2>
            </h1>

            <h1 className=" text mt-5 fw-bold ">
              {" "}
              email:{" "}
              <h3 id="email" className=" ">
                emanuele971@icloud.com
              </h3>
            </h1>
          </div>
      <div className="d-flex justify-content-center mb-5 mt-5">
        <button className="registration  mb-5" type="submit">
          Detete this profile
        </button>
      </div>
      </div>

      <Footer />
    </>
  );
}

export default FormTextExample;
