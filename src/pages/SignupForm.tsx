import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/redux/actionCreator/authAction";
import { AppState } from "../services/redux/stores";
import { IAuthData } from "../types";

export default function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IAuthData>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { data, status, error } = useSelector((state: AppState) => state.auth);

  const dispatch = useDispatch();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (data) {
    navigate("/");
  }

  return (
    <div className="container auth_container">
      <div className="bg"></div>
      <main className="form-signin">
        <h1 className="h3">SignUp</h1>

        {status === "error" && (
          <div className="alert alert-success" role="alert">
            {error}
          </div>
        )}

        {status === "success" && (
          <div className="alert alert-success" role="alert">
            <h1>success</h1>
          </div>
        )}
        <form>
          <div className="form-floating">
            <input
              onChange={handleOnChange}
              name="name"
              type="name"
              className="form-control"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              onChange={handleOnChange}
              name="email"
              type="email"
              className="form-control"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              onChange={handleOnChange}
              name="phone"
              type="text"
              className="form-control"
              placeholder="+0880171000000"
              required
            />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
          <div className="form-floating">
            <input
              onChange={handleOnChange}
              name="password"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                value="1"
                name="remember_me"
                id="rememberMeSwitch"
              />
              <label className="form-check-label" htmlFor="rememberMeSwitch">
                Remember me
              </label>
            </div>
          </div>
          <button
            disabled={status === "pending"}
            onClick={() => dispatch(signUp(formData))}
            className="w-100 btn btn-lg"
            type="submit"
          >
            {status === "pending" ? "loading..." : "SignUp"}
          </button>
        </form>
        <Link to="/login" className="w-100 btn btn-lg text-info" type="submit">
          Already have an account?
        </Link>
        <p className="copyright">&copy; 2021</p>
      </main>
    </div>
  );
}
