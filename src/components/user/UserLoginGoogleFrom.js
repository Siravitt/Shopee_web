import { useEffect } from "react";
import jwt_decode from "jwt-decode";

export default function UserLoginGoogleFrom() {
  // ++++++++++++++++ google Login +++++++++++++++
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "290992676461-dvnikrasslpdfokfa79bvlc35g1km8k9.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  // ++++++++++++++++ END google Login +++++++++++++++

  return <div id="signInDiv"></div>;
}
