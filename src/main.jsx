import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// // static import
import App from "./App.jsx";
import { AppContextProvider } from "./context/index.jsx";
import Loader from "./components/loader/Loader.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <AppContextProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="colored"
          progressClassName="toastProgress"
          bodyClassName="toastBody"
        />
      </AppContextProvider>
    </BrowserRouter>
  </Suspense>
);
