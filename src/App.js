import Router from "./routes/Router";
import { thunkFetchUser } from "./reduxStore/AuthSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "./utils/local-storage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          dispatch(thunkFetchUser());
        }
      } catch (err) {
        console.log(err.data?.response);
      }
    };
    fetchMe();
  }, [dispatch]);

  return <Router />;
}

export default App;
