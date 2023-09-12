import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1700,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
function Login() {
  if (
    localStorage.getItem("token") &&
    localStorage.getItem("token") != null
  ) {
    window.location.replace("/home")
  }  
  const [email, setEmail] = useState("");
  const submitLogin = () => { 
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("token") == null
    ) {
      if (email && email != null) {
        var data = new URLSearchParams();
        data.append("email", email);
        fetch("https://students.trungthanhweb.com/api/checkLoginhtml", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data,
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("token", JSON.stringify(data.apitoken));
            Toast.fire({
              icon: "success",
              title: "Signed in successfully",
            })
            .then(window.location.replace("/home"))
          });
      }
    }
  };

  return (
    <div>
      {/* <Navbar /> */}

      <div className="row container mt-5 m-auto">
        <div className="col-md-9">
          <input
            type="Email"
            className="form-control"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary w-100" onClick={submitLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
