import Router from "./routes/Router";
import { Toaster } from "react-hot-toast";
import { thunkFetchUser, thunkGetShop } from "./reduxStore/AuthSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "./utils/local-storage";
import { thunkGetCart } from "./reduxStore/CartSlice";
import socket from "./configs/socket";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
  const authShop = useSelector((state) => state.auth.authShop);
  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          dispatch(thunkFetchUser());
          dispatch(thunkGetCart());
        }
      } catch (err) {
        console.log(err.response?.data);
      }
    };
    fetchMe();
  }, [dispatch]);

  useEffect(() => {
    if (auth?.id) {
      socket.auth = {userId: auth.id}
      socket.connect();
    }
    return () => {
      socket.disconnect();
    };
  }, [auth]);

  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
