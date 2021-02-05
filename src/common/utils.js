export const sendEmail = (data, onSuccess) => {
  console.log(data);
  fetch("http://localhost:3000/send-email/", {
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

      onSuccess();
      // if (data.errorCode === 409) {
      //   alert("This Email is already registered");
      // } else {
      //   onSuccess();
      // }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
