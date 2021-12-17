const styleses = {};
document
  .querySelectorAll('link[rel=stylesheet]')
  .forEach((s, idx) => (styleses[idx] = s));
const datas = [];
Object.keys(styleses).forEach((idx) => {
  const a = document.createElement('a');
  a.href = styleses[idx].href;
  datas.push([
    styleses[idx],
    a.hostname,
    a.pathname.split('/').pop(),
    styleses[idx].media,
  ]);
});

let hohoho = document.createElement('div');
hohoho.style = 'display: grid';
let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.appendChild(tbody);
let tr = document.createElement('tr');
tbody.appendChild(tr);
let th = document.createElement('th');
tr.appendChild(th);
th.append('action');
th = document.createElement('th');
tr.appendChild(th);
th.append('media');
th = document.createElement('th');
tr.appendChild(th);
th.append('host');
th = document.createElement('th');
tr.appendChild(th);
th.append('name');

datas.forEach((d) => {
  let tr = document.createElement('tr');
  tbody.appendChild(tr);

  let td = document.createElement('td');
  tr.appendChild(td);

  let button = document.createElement('button');
  button.innerText = 'Turn off';
  button.onclick = (e) => {
    if (e.target.innerText === 'Turn off') {
      d[0].media = 'lol';
      e.target.innerText = 'Revert';
    } else {
      d[0].media = d[3];
      e.target.innerText = 'Turn off';
    }
  };
  td.appendChild(button);

  td = document.createElement('td');
  tr.appendChild(td);
  td.append(d[0].media);

  td = document.createElement('td');
  tr.appendChild(td);
  td.append(d[1]);

  td = document.createElement('td');
  tr.appendChild(td);
  let a = document.createElement('a');
  a.href = d[0].href;
  a.innerText = d[2];
  td.appendChild(a);
});

hohoho.appendChild(table);
document.body.prepend(hohoho);
