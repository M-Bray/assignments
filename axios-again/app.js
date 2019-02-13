axios.get('https://api.vschool.io/Mikey/todo').then(function (res, req) {
  const div = document.getElementById('root');
  const p = document.createElement('div');
  p.innerText = res.data;
  div.appendChild(p);
});

