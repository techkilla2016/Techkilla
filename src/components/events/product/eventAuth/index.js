import { useState } from "react";
import "./event-auth.scss";

const DEFAULT_DATA = {
  eventNumber: "",
  password: "",
};

export default function EventAuth({
  isProductLoading,
  getEventDataAndCheckAuth,
  setAuthFormData,
}) {
  const [formData, setFormData] = useState(DEFAULT_DATA);

  // handle change form data
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex-col-center EventAuth">
      <h1 className="title">Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAuthFormData(formData);
          const isLoggedIn = getEventDataAndCheckAuth(formData);
          isLoggedIn === true && setFormData(DEFAULT_DATA);
        }}
        className="flex-col-center form"
      >
        <input
          className="input"
          type="text"
          value={formData.eventNumber}
          name="eventNumber"
          onChange={handleChange}
          placeholder="Enter your Event Number"
          required
        />
        <input
          className="input"
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <button type="submit" disabled={isProductLoading} className="submitBtn">
          Login
        </button>
      </form>
    </div>
  );
}
