import "./index.css";
import FormInput from "../../components/formInput";
import Heading from "../../components/heading";
import Text from "../../components/text";
import contactModel from "../../models/contact.model";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <Heading level={2}>{contactModel.heading}</Heading>
          <Text>{contactModel.text}</Text>
        </div>

        <div>
          <div className="row">
            <FormInput placeholder="First Name" />
            <FormInput placeholder="Last Name" />
          </div>
          <FormInput placeholder="Phone Number" style="full" />
          <FormInput
            placeholder="What Service are you interested in?"
            style="full"
          />
          <button
            type="submit"
            className="btn"
            onClick={() => {
              console.log("clicked");
            }}
          >
            SUBMIT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
