import React from "react";
import { PrimaryButtonSmall } from "../Common/Buttons";
import { Input } from "../Common/Input";
import "./RegisterCustomer.css";

const sendDataToSQL = (data) => {
  console.log(data);
  fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  });
};

export const RegisterCustomer = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  return (
    <form action="/" class="form-vendor">
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

      <div class="form-row submit-button">
        <PrimaryButtonSmall
          text="Continue"
          isInverted={false}
          onClick={(e) => {
            if (!firstName || !lastName || !phone || !email) {
              return;
            }
            sendDataToSQL({
              firstName,
              lastName,
              phone,
              email,
            });

            // e.preventDefault();
            // e.stopPropagation();
          }}
        />
        {/* <input
          type="submit"
          className="form-submit"
          value="Continue"
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
              !availability
            ) {
              return;
            }
            sendDataToSQL({
              firstName,
              lastName,
              phone,
              email,
              expertise,
              description,
              vendorName,
              serviceType,
              minServiceFee,
              availability,
            });

            // e.preventDefault();
            // e.stopPropagation();
          }}
        /> */}
      </div>
    </form>
  );
};
