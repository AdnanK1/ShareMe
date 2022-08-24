import { useNavigate } from "react-router-dom";
import shaveVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleCallBackResponse(res) {
    console.log("Encoded JWT ID Token:" + res.credential);
    var userObject = jwtDecode(res.credential);
    console.log(userObject);
    setUser(userObject);
    navigate("/");
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "402261517686-1erlaei7ptknrfs79q0v4r518h89pp36.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          className="w-full h-full object-cover"
          src={shaveVideo}
          type="videp/mp4"
          loop
          controls={false}
          muted
          autoPlay
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} width="130px" alt="logo" />
        </div>
        <div className="shadow-2x1">
          <div id="signInDiv"></div>
        </div>
      </div>
    </div>
  );
};
