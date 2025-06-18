let pessoa = {
  nome: "Xandão",
  idade: 45, // em cada perna
  altura: 1.8,
  cargo: "Professor de web II",
};

let mulher = {
  nome: "Cidinha do pix",
  idade: 40,
  altura: 2.1,
  cargo: "do job tá ligado né pai",
  lavar_louca: () => {
    console.log("lavando os pratos");
  },
  lavar_roupa: () => {
    console.log("lavando a roupa");
  },
};

let carro = {
  modelo: "Pegeout",
  ano: 2008,
  cor: "cinza",
  ir_no_mecanico: (modelo) => {
    console.log(`${modelo} indo ao mecanico`);
  },
};

let usuario = [
  { nome: "Jotinha", idade: 19, altura: 1.8, senha: "root" },
  { nome: "Amaral", idade: 19, altura: 1.8, senha: "toor" },
  { nome: "Xandão", idade: 19, altura: 1.8, senha: "undefined" },
];
// console.log(pessoa.nome);
// mulher.lavar_louca();
// carro.ir_no_mecanico("Pegeout");
// for (let i = 0; i < usuario.length; i++) {
//   console.log(usuario[i].nome);
//   console.log(usuario[i].idade);
//   console.log(usuario[i].altura);
//   console.log(usuario[i].senha);
// }

let carros = [
  {
    modelo: "Impala 67",
    ano: 1967,
    cor: "All black",
    descricao: "V8 bebendo mais q AA",
  },
  {
    modelo: "Fiat uno Mile",
    ano: 2000,
    cor: "com escada e de firma",
    descricao: "Eu sou a velocidade",
  },
  {
    modelo: "Parati surf",
    ano: 2010,
    cor: "Red",
    descricao: "Mais rebaixado q o Santos FC",
  },
  {
    modelo: "Monza tubarão",
    ano: 1998,
    cor: "Azul mairinho",
    descricao: "Vidro elético",
  },
];

for (let i = 0; i < carros.length; i++) {
  console.log(carros[i].modelo);
  console.log(carros[i].ano);
  console.log(carros[i].cor);
  console.log(carros[i].descricao);
}

function templateString(nome, segundoNome, idade) {
  console.log(`Meu nome é ${nome} ${segundoNome} e eu tenho ${idade} de idade`);
}

templateString("little", "hair", 19);
