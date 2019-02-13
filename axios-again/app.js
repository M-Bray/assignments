const axios = require('axios');

axios.get('https://api.vschool.io/Mikey/todo').then(function(res, req) {
  const div = document.getElementById('root');
  div.appendChild(res.data);
});

