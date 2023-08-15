import ValidateCpf from "./validar-cpf.js";

const cpf = document.querySelector("#cpf");
const validateCpf = new ValidateCpf(cpf).start();

const verifyCpf = new ValidateCpf();

console.log(validateCpf);
