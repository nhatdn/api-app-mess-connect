const axios = require("axios");

axios
  .get("https://api-app-mess-connect.herokuapp.com/accounts/nhat")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
