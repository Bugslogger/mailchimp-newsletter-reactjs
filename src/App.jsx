import MailchimpSubscribe from "react-mailchimp-subscribe";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [url, seturl] = useState("");

  function Checkurl(subscribe, email) {
    if (url) {
      subscribe(email);
      return;
    }

    toast.error("please enter your mailchimp url!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <div
      style={{ width: "100%" }}
      className="d-flex flex-column justify-centent-center align-items-center"
    >
      <div
        style={{ width: "100%" }}
        className="px-5 py-3 d-flex position-fixed justify-content-between flex-row text-light"
      >
        <span className="fs-5">MailChimp Newsletter Subscription</span>
        <div className="">
          <a href="https://github.com/Bugslogger/mailchimp-newsletter-reactjs">
            github
          </a>
          <a href="https://www.youtube.com/@bugslogger">youtube</a>
        </div>
      </div>
      <div
        style={{ width: "100%" }}
        className="vh-100 d-flex justify-content-center align-item-center"
      >
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <>
              <Form
                submit={(email) => Checkurl(subscribe, email)}
                seturl={seturl}
              />
              {status === "success" &&
                toast.success("Subscribed!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                })}
              {status === "error" &&
                toast.error("something went wrong!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                })}
              {status === "sending" &&
                toast.warn("Subscribing...", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                })}
            </>
          )}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
