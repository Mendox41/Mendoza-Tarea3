let titulo = document.getElementById("titulo");
let texto = titulo.textContent;
let texto2 = "Mi CV";
let flg = true;

function escribirTexto() {
  titulo.textContent = ""
    titulo.classList.add("maquinar");
    let i = 0;
  let interval = setInterval(function() {
    titulo.textContent += texto[i];
    i++;
    if (i >= texto.length) {
      clearInterval(interval);
      setTimeout(borrarTexto, 1500);
      flg = true;
    }
  }, 150);
}

function escribirTexto2() {
  titulo.textContent = ""
  titulo.classList.add("maquinar2");
  let i = 0;
  let interval = setInterval(function() {
    titulo.textContent += texto2[i];
    i++;
    if (i >= texto2.length) {
      clearInterval(interval);
      setTimeout(borrarTexto, 1500);
      flg = false;
    }
  }, 150);
}

function borrarTexto() {
  let i = texto.length - 1;
  let interval = setInterval(function() {
    titulo.textContent = titulo.textContent.slice(0, -1);
    i--;
    if (i < 1) {
      titulo.textContent = "";
      clearInterval(interval);
      if (flg) {
        titulo.classList.remove("maquinar");
        setTimeout(escribirTexto2, 300);
      } else {
        titulo.classList.remove("maquinar2");
        setTimeout(escribirTexto, 300)
      }
    }
  }, 75);
}

escribirTexto();

