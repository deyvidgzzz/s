// cápturar evento de subimt no form
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value); 

    if (!peso) { 
setResultado('Peso Inválido', false);
return;
    }
    if (!altura) { 
        setResultado('Altura Inválido', false);
        return;
    }
    const imc = getIMC (peso, altura);
    const NivelImc = getNivelImc (imc);

    const msg = `Seu IMC é ${imc} (${NivelImc}).`;


    setResultado (msg, true);
    // Continua o código...

});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
'Obesidade grau 1', 'Obesidade grau 2', 'Obesiade grau 3'];

 if (imc >= 39.9)return nivel [5];


 if (imc >= 34.9)return nivel [4];


 if (imc >= 29.9)return nivel [3];


 if (imc >= 24.9)return nivel [2];


 if (imc >= 18.5)return nivel [1];


 if (imc < 18.5) return nivel [0];


}

function getIMC (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function criaP () {
    const p = document.createElement ('p');
   return p;
}

function setResultado (msg, Isvalide) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg ;

    const p = criaP ();

    if (Isvalide) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = (msg)
resultado.appendChild

}