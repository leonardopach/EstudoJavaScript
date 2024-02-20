const nome = prompt("Digite seu nome completo: ");
document.body.innerHTML += `O seu nome e: ${nome} <br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras<br />`;
document.body.innerHTML += `A segunda letra do seu nome e ${nome.charAt(1)}`;
