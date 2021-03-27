import { useState } from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";

const AuthForm = ({ type }) => {
  const fb = useFirebaseApp();

  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, ...{ [name]: value } });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    if (form.email && form.password && form.password2) {
      if (form.password === form.password2) {
        await fb
          .auth()
          .createUserWithEmailAndPassword(form.email, form.password2);
      } else {
        alert("Passwords must match");
      }
    } else {
      alert("please enter your credentials");
      return;
    }
  };

  const login = async (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      await fb.auth().signInWithEmailAndPassword(form.email, form.password);
    } else {
      alert("please enter your credentials");
    }
  };

  const { email, password, password2 } = form;

  return (
    <form
      onSubmit={type === "register" ? registerUser : login}
      autoComplete="off"
    >
      <div className="form-group">
        <label>
          Email
          <input
            className="form-control"
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Password
          <input
            className="form-control"
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
          />
        </label>
      </div>

      {type === "register" && (
        <div className="form-group">
          <label>
            Confirm Password
            <input
              className="form-control"
              onChange={handleChange}
              value={password2}
              name="password2"
              type="password"
            />
          </label>
        </div>
      )}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AuthForm;
