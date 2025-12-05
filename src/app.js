// app.js
export function sumar(a, b) {
  return a + b;
}

export function agregarItem(texto) {
  const lista = document.getElementById('lista');
  if (!lista) return;
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}
