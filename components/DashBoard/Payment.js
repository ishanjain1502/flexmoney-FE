import React from "react";
import { useState } from "react";
import { API_URL } from "../../Utils/url";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const Payment = (props) => {
  const [val, setVal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function handleChange(event) {
    setVal(event.target.value);
  }

  // let token = localStorage.getItem("token")
  const PaymentFunc = async (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      let token = localStorage.getItem("token");
      localStorage.setItem("batch", val);

      try {
        const resp = await fetch(`${API_URL}/update`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: token,
          },
          body: JSON.stringify({
            email: email,
            password: password,
            Batch: val,
            status: true,
          }),
        });

        const data = await resp.json();
        if (data.data.status === true) {
          Swal.fire(
            "Good job!",
            "You Registered for a Healthy LifeStyle!",
            "success"
          );
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  if (val === true) {
    return <div>You are already Registered</div>;
  } else {
    console.log();
    return (
      <div>
        <form onSubmit={PaymentFunc}>
          <legend>What is Your Batch Selection?</legend>
          <input
            type="radio"
            name="batch_selection"
            value="A"
            onChange={handleChange}
          />
          6-7AM
          <br />
          <input
            type="radio"
            name="batch_selection"
            value="B"
            onChange={handleChange}
          />
          7-8AM
          <br />
          <input
            type="radio"
            name="batch_selection"
            value="C"
            onChange={handleChange}
          />
          8-9AM
          <br />
          <input
            type="radio"
            name="batch_selection"
            value="D"
            onChange={handleChange}
          />
          5-6PM
          <br />
          <br />
          <h4>
            Fill In Email and Password to carry out payment procedure
          </h4>{" "}
          <br />
          <label>Email</label>
          <br />
          <input
            className=" p-1 w-auto md:w-72 border-solid border-2 border-black"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            className="p-1 w-auto md:w-72 border-solid border-2 border-black"
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="password of atleast 6 characters"
            name="password"
            value={password}
            required
          />
          <br />
          <br />
          <input
            className="border-solid border-2 border-red-500 p-0.5 rounded-lg w-24 text-center text-white	bg-red-700"
            type="submit"
            value="Pay now"
          />
        </form>
      </div>
    );
  }
};

export default Payment;
