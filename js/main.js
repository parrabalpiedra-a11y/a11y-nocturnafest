  var frases = [
    'Tres noches de música frente al mar',
    'Más de 20 artistas en tres escenarios',
    'Fase 2: quedan muy pocas entradas',
    'Trae a tu gente y vive el eclipse'
  ];
  var n = 0;
  setInterval(function () {
    n = (n + 1) % frases.length;
    document.getElementById('banner').textContent = frases[n];
  }, 2000);

  var objetivo = new Date('2027-07-09T19:00:00+02:00').getTime();
  function cuenta() {
    var d = Math.max(0, objetivo - Date.now());
    var dd = Math.floor(d / 864e5), hh = Math.floor(d / 36e5) % 24, mm = Math.floor(d / 6e4) % 60, ss = Math.floor(d / 1e3) % 60;
    document.getElementById('cd-d').textContent = dd;
    document.getElementById('cd-h').textContent = ('0' + hh).slice(-2);
    document.getElementById('cd-m').textContent = ('0' + mm).slice(-2);
    document.getElementById('cd-s').textContent = ('0' + ss).slice(-2);
  }
  cuenta(); setInterval(cuenta, 1000);

  var resto = 299;
  setInterval(function () {
    if (resto <= 0) {
      ['nombre', 'correo', 'telefono', 'codigo', 'dia', 'mes', 'anio'].forEach(function (id) { document.getElementById(id).value = ''; });
      document.getElementById('contador').textContent = 0;
      total = 0;
      resto = 299;
    } else {
      resto--;
    }
    document.getElementById('reloj').textContent = Math.floor(resto / 60) + ':' + ('0' + resto % 60).slice(-2);
  }, 1000);

  function ir(id) { document.getElementById(id).scrollIntoView({ behavior: 'smooth' }); }
  function panel(abrir) { document.getElementById('panel').style.display = abrir ? 'block' : 'none'; }
  function irMovil(id) { panel(false); ir(id); }

  function sumar(el, x) {
    var num = el.parentNode.querySelector('.num');
    num.textContent = Math.max(1, Math.min(6, parseInt(num.textContent, 10) + x));
  }
  var total = 0;
  function anadir(el) {
    total += parseInt(el.parentNode.querySelector('.num').textContent, 10);
    document.getElementById('contador').textContent = total;
  }

  function fav(el) {
    var svg = el.querySelector('svg');
    svg.setAttribute('fill', svg.getAttribute('fill') === '#3b2a6b' ? '#ff3d8b' : '#3b2a6b');
  }

  function filtrar(el, dia) {
    document.querySelectorAll('.dia').forEach(function (p) { p.classList.remove('activa'); });
    el.classList.add('activa');
    document.querySelectorAll('.card').forEach(function (c) {
      c.classList.toggle('oculta', dia !== 'todo' && c.dataset.dia !== dia);
    });
  }

  function abrir(el) {
    var r = el.nextElementSibling;
    r.style.display = r.style.display === 'block' ? 'none' : 'block';
    el.querySelector('span').textContent = r.style.display === 'block' ? '−' : '+';
  }

  function pagar() {
    var ids = ['nombre', 'correo', 'telefono', 'codigo', 'dia', 'mes', 'anio'];
    var todoBien = true;
    ids.forEach(function (id) {
      var campo = document.getElementById(id);
      if (campo.value.trim() === '') { campo.classList.add('mal'); todoBien = false; }
      else { campo.classList.remove('mal'); }
    });
    document.getElementById('ok').style.display = todoBien ? 'block' : 'none';
  }
