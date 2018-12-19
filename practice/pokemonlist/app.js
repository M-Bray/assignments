//Promise
var axios = require("axios");
axios.get("https://api.vschool.io/pokemon")
    .then(response => console.log(response.data))
    .catch(err => console.log(" CODE:247\n Sorry notSorry()"));