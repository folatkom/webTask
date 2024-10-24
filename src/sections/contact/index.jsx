import "./index.css";
import FormInput from "../../components/formInput";
import Heading from "../../components/heading";
import Text from "../../components/text";
import contactModel from "../../models/contact.model";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
  });

  const submitMessage = () => {
    return (
      <>
        <Text>
          Nice to meet you {formData.firstName} {formData.lastName}!
        </Text>
        <Text>
          We are thrilled to have a chat with you about {formData.service}.
        </Text>
        <Text>We will reach you at {formData.phone} within 24 hours.</Text>
      </>
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast(submitMessage, {
      position: "top-left",
      className: "toast-message",
      progressClassName: "toast-progress-bar",
    });
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      service: "",
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <Heading level={2}>{contactModel.heading}</Heading>
          <Text>{contactModel.text}</Text>
        </div>

        <form name="form" onSubmit={handleSubmit}>
          <div className="row">
            <FormInput
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <FormInput
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <FormInput
            name="phone"
            placeholder="Phone Number"
            style="full"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <FormInput
            name="service"
            placeholder="What Service are you interested in?"
            style="full"
            value={formData.service}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">
            SUBMIT NOW
          </button>
        </form>
      </div>
      <ToastContainer autoClose={4000} />
    </div>
  );
};

export default Contact;
