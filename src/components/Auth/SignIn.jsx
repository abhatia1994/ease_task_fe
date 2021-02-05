import React from "react";
import { Input } from "../Common/Input";
import { PrimaryButtonSmall } from "../Common/Buttons";

const sendDataToSQL = (data, onSuccess) => {
  console.log(data);
  fetch("http://localhost:3000/signin/", {
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

export const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div class="form-vendor">
      <div class="form-row">
        <label class="form-label" for="email">
          Email
        </label>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
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
          text="Sign In"
          onClick={(e) => {
            if (!email || !password) {
              return;
            }

            sendDataToSQL({
              email: email,
              password: password,
            });
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      </div>
    </div>
  );
};
