import React from "react";
import { useHistory } from "react-router-dom";
import { sendEmail } from "../../common/utils";
import { PrimaryButtonSmall } from "../Common/Buttons";
import { Input } from "../Common/Input";
import "./RegisterVendor.css";

const sendDataToSQL = (data, onSuccess) => {
  console.log(data);
  fetch("http://localhost:3000/vendor-register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("RESPONSE:", data);

      if (data.errorCode === 409) {
        alert("This Email is already registered");
      } else {
        onSuccess();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const RegisterVendor = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [expertise, setExpertise] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [vendorName, setVendorName] = React.useState("");
  const [serviceType, setServiceType] = React.useState("");
  const [minServiceFee, setMinServiceFee] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  return (
    <form class="form-vendor">
      <div class="form-row">
        <label class="form-label" for="name">
          First Name
        </label>
        <Input
          type="text"
          name="name"
          placeholder="First Name"
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div class="form-row">
        <label class="form-label" for="name">
          Last Name
        </label>
        <Input
          type="text"
          name="name"
          placeholder="Last Name"
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div class="form-row">
        <label class="form-label" for="email">
          Email
        </label>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div class="form-row">
        <label class="form-label" for="email">
          Phone number
        </label>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div class="form-row">
        <label class="form-label" for="expertise">
          Expertise
        </label>
        <Input
          type="tel"
          name="expertise"
          placeholder="Expertise"
          id=""
          required
          onChange={(e) => {
            setExpertise(e.target.value);
          }}
        />
      </div>
      <div class="form-row">
        <label class="form-label" for="description">
          Description
        </label>
        <Input
          type="text"
          name="description"
          placeholder="Description"
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div class="form-row">
        <label class="form-label" for="vendorName">
          Vendor name
        </label>
        <Input
          type="text"
          name="vendorName"
          placeholder="Vendor name"
          required
          onChange={(e) => {
            setVendorName(e.target.value);
          }}
        />
      </div>
      <div class="form-row">
        <label class="form-label" for="type_service">
          Type of service
        </label>
        <Input
          type="text"
          name="type_service"
          placeholder="Type of service"
          required
          onChange={(e) => {
            setServiceType(e.target.value);
          }}
        />
      </div>
      <div class="form-row">
        <label class="form-label" for="minimum_service_fee">
          Minimum Service Fee
        </label>
        <Input
          type="text"
          name="minimum_service_fee"
          placeholder="Minimum Service Fee"
          required
          onChange={(e) => {
            setMinServiceFee(e.target.value);
          }}
        />
      </div>

      <div class="form-row">
        <label class="form-label" for="password">
          Password
        </label>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div class="form-row submit-button">
        <PrimaryButtonSmall
          text="Submit"
          className="form-submit"
          onClick={(e) => {
            if (
              !firstName ||
              !lastName ||
              !phone ||
              !email ||
              !expertise ||
              !description ||
              !vendorName ||
              !serviceType ||
              !minServiceFee ||
              !password
            ) {
              return;
            }
            sendDataToSQL(
              {
                firstName,
                lastName,
                phone,
                email,
                expertise,
                description,
                vendorName,
                serviceType,
                minServiceFee,
                password,
              },
              () => {
                history.push("/sign-in");

                sendEmail({
                  email: email,
                });
              }
            );

            e.preventDefault();
            e.stopPropagation();
          }}
        />
      </div>
    </form>
  );
};
