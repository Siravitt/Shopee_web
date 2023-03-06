import Router from "./routes/Router";
import { Toaster } from "react-hot-toast";
import { thunkFetchUser } from "./reduxStore/AuthSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAccessToken } from "./utils/local-storage";
import { thunkGetCart } from "./reduxStore/CartSlice";

function App() {
  const dispatch = useDispatch();

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

  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
