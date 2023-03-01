import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { thunkGoogleLogin } from "../../reduxStore/AuthSlice";
import { useDispatch } from "react-redux";

export default function UserLoginGoogleFrom() {
  const dispatch = useDispatch();
  // const handleSubmitForm = e => {
  //   try{
  // e.preventDefault()
  // dispatch(thunkGoogleLogin(token))

  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  // ++++++++++++++++ google Login +++++++++++++++
  function handleCallbackResponse(response) {
    dispatch(thunkGoogleLogin(response.credential));
    // console.log("Encoded JWT ID token:" + response.credential);
    // var userObject = jwt_decode(response.credential);
    // console.log(userObject);
  }

  useEffect(() => {
    /* global google */
    window?.google.accounts.id.initialize({
      client_id:
        "290992676461-dvnikrasslpdfokfa79bvlc35g1km8k9.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    window?.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }, []);

  // ++++++++++++++++ END google Login +++++++++++++++

  return <div id="signInDiv"></div>;
}
