import { toast } from "react-toastify";
import React, { useState } from "react";

const Form = ({ submit }) => {
  const [email, setemail] = useState("");
  const testEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const ClickButton = () => {
    console.log("email: ", email);

    if (testEmail.test(email)) {
      submit({
        EMAIL: email,
      });
    } else {
      toast.error("please check you email box!", {
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
  };

  return (
    <div className="d-flex mx-auto justify-content-center align-items-center flex-column mb-3">
      <input
        onChange={(e) => setemail(e.target.value)}
        type="text"
        style={{ width: "350px", height: "48px" }}
        className="form-control"
        placeholder="Enter email to subscribe"
      />
      <button
        className="btn btn-outline-warning px-5 py-2 fs-5 my-3"
        type="button"
        onClick={ClickButton}
        id="button-addon2"
      >
        Button
      </button>
    </div>
  );
};

export default Form;
