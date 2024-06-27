/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generadorDominio() {
    let pronombres = ["El", "La"];
    let sustantivos = ["Edificio", "Cabaña"];
    let adjetivos = ["genial", "impresionante", "espectacular"];
    let dominios = [];

    pronombres.forEach(pronombre => {
      sustantivos.forEach(sustantivo => {
        adjetivos.forEach(adjetivo => {
          let dominio = pronombre + sustantivo + adjetivo + ".com";
          dominios.push(dominio);
        });
      });
    });

    return dominios;
  }

  let pruebaDominios = generadorDominio();
  console.log(pruebaDominios);
  document.getElementById("dominios").innerText = generadorDominio();
};
