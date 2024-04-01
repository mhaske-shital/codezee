import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { login } from "../redux/apiHelper";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const token = await login(values);
        console.log("Token:", token);
        toast.success("Login successful");
        navigate("/user");
      } catch (error) {
        console.error("Login failed:", error.message);
        toast.error("Login failed. Please check your credentials.");
      }
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6 d-none d-md-block bg-image"
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1456782892/photo/secure-access-to-personal-information-of-network-users-data-protection-and-secured-internet.webp?b=1&s=170667a&w=0&k=20&c=uYzUcjJYFY_fHVRmeIQZ3Qtb93vTq838YaiFD7pUrCY=)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh", // Adjust height for responsiveness
          }}
        ></div>
        <div className="col-md-6 p-5 d-flex align-items-center">
          <div className="w-100">
            <h1 className="mb-4 text-center">Sign in</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                  id="email"
                  placeholder="Email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  id="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="invalid-feedback">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <button className="btn btn-primary w-100 mb-3" type="submit">
                Sign in
              </button>
              <div className="d-flex justify-content-between">
                <RouterLink to="/ForgotPassword" className="link-primary">
                  Forgot password?
                </RouterLink>
                <RouterLink to="/register" className="link-primary">
                  Don't have an account? Sign Up
                </RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
