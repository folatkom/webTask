import "./index.css";
import FormInput from "../../components/formInput";
import Heading from "../../components/heading";
import Text from "../../components/text";
import contactModel from "../../models/contact.model";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
  });

  const submitMessage = `Nice to meet you ${formData.firstName} ${formData.lastName}!\nWe're thrilled to have a chat with you about ${formData.service}.\nWe will reach you on ${formData.phone} within 24 hours.`;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(submitMessage);
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
            />
            <FormInput
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <FormInput
            name="phone"
            placeholder="Phone Number"
            style="full"
            value={formData.phone}
            onChange={handleChange}
          />
          <FormInput
            name="service"
            placeholder="What Service are you interested in?"
            style="full"
            value={formData.service}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
