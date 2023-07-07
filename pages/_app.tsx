import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../logic/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import localFont from "next/font/local";

function MyApp({ Component, pageProps }) {
  // const myFont = localFont({ src: "../public/fonts/CircularStd-Black.otf" });
  return (
    <div className={""}>
      <Provider store={store}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
