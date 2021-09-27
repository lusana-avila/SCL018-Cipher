import cipher from './cipher.js';

document.getElementById("cifrar").addEventListener("click", textcipher);

function textcipher() {
    const textoCifrar = document.getElementById("mensaje").value;
    const numeroDesplazamiento = parseInt(document.getElementById("desplazamiento").value);
    const textoCifrado = cipher.encode (numeroDesplazamiento,textoCifrar,);
    document.getElementById("resultado").value = textoCifrado;

  }

  document.getElementById("descifrar").addEventListener("click", textdecipher);

  function textdecipher() {
      const textoDescifrar = document.getElementById ("mensaje").value;
      const numeroDesplazamiento = parseInt(document.getElementById("desplazamiento").value);
      const textoDescifrado = cipher.decode (numeroDesplazamiento,textoDescifrar,);
      document.getElementById("resultado").value = textoDescifrado;
      
  }

  






  
