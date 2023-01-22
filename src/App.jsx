import MailchimpSubscribe from "react-mailchimp-subscribe";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";

function App() {
  const url =
    "https://gmail.us14.list-manage.com/subscribe/post?u=ad7cf24c916c1cd937b1700de&amp;id=cb5d887614&amp;f_id=001b95e0f0";

  return (
    <div className="App">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <>
            <Form submit={(email) => subscribe(email)} />
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
