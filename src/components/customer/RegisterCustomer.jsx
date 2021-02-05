import React from "react";
import { sendEmail } from "../../common/utils";
import { PrimaryButtonSmall } from "../Common/Buttons";
import { Input } from "../Common/Input";
import "./RegisterCustomer.css";

const sendDataToSQL = (data, onSuccess) => {
  console.log(data);
  fetch("http://localhost:3000/customer-register/", {
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
      onSuccess && onSuccess();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const RegisterCustomer = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");

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
          text="Continue"
          onClick={(e) => {
            if (!firstName || !lastName || !phone || !email || !password) {
              return;
            }
            alert("123");
            sendDataToSQL(
              {
                firstName,
                lastName,
                phone,
                email,
                password,
              },
              () => {
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
