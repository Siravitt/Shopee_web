import { useEffect } from "react";
import { thunkGoogleLogin } from "../../reduxStore/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UserLoginGoogleFrom() {
  const navigate = useNavigate();

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
    navigate("/");
  }

  useEffect(() => {
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
