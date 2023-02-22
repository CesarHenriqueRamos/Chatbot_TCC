//chamado as bibliotecas
const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");
//estanciando a variavel cliente
const client = new Client();
//gerando um qrcode
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
//validando a conecção do whatsapp
client.on("ready", () => {
  console.log("Seu Whatsapp foi conectado!");
});

client.initialize();

//foi criado a variavel nome
var namePeaple = "@_TSawesd*";
var tamanhoPizza = "";
var saborPizza = "";
var saborBebida = "";
var tamanhoBebida = "";

client.on("message", (message) => {
  //verifica se a mensagem que ele recebeu foi essa
  if (message.body === "Eu tenho interesse em fazer meu pedido") {
    //se apresenta
    client.sendMessage(message.from, "Olá, sou o Pizzaiolo, da Alcapone");
    //pergunda o nome do cliente
    setTimeout(() => {
      client.sendMessage(
        message.from,
        "Para continuarmos poderia me informar seu nome?"
      );
    }, 1000);
    //valida se o nome é valido
  } else if (
    message.body !== null &&
    message.body.toLowerCase() == "menu inicial"
  ) {
    client.sendMessage(
      message.from,
      "Menu:\n->Fazer pedido\n->Acompanhar Pedido"
    );
    //
  } else if (
    message.body !== null &&
    message.body !== "Eu tenho interece em conhecer a Ramos Tecnology" &&
    namePeaple === "@_TSawesd*"
  ) {
    //quanrda o nome do cliente
    namePeaple = message.body;
    // da as boas vindas
    client.sendMessage(message.from, `Olá, ${namePeaple}`);
    //menu principau
    client.sendMessage(
      message.from,
      "Menu:\n->Fazer pedido\n->Acompanhar Pedido\n->Ver Pedido"
    );
  } else if (
    message.body !== null &&
    message.body.toLowerCase() == "fazer pedido"
  ) {
    client.sendMessage(
      message.from,
      "Menu:\n->Pizzas\n->Bebidas\n->Menu inicial"
    );
    //Menu de pedidos
  } else if (message.body !== null && message.body.toLowerCase() == "pizzas") {
    client.sendMessage(
      message.from,
      "Menu:\n->Tamanho da Pizza\n->Sabor da Pizza\n->menu inicial"
    );
  } else if (
    (message.body !== null &&
      message.body.toLowerCase() == "tamanho da pizza") ||
    message.body.toLowerCase() == "tamanho pizza"
    //tamanho das pizzas
  ) {
    client.sendMessage(
      message.from,
      "Menu:\n->Pequena - 4 pedaços\n->Media - 8 pedaços\n->Grande - 12 pedaços\n->Menu inicial"
    );
  } else if (
    message.body !== null &&
    message.body.toLowerCase() === "pequena"
  ) {
    tamanhoPizza = "Pequena";
    client.sendMessage(
      message.from,
      "Menu:\n->Tamanho da Pizza\n->Sabor da Pizza\n->menu inicial"
    );
  } else if (message.body !== null && message.body.toLowerCase() === "media") {
    tamanhoPizza = "Media";
    client.sendMessage(
      message.from,
      "Menu:\n->Tamanho da Pizza\n->Sabor da Pizza\n->menu inicial"
    );
  } else if (message.body !== null && message.body.toLowerCase() === "grande") {
    tamanhoPizza = "Grande";
    client.sendMessage(
      message.from,
      "Menu:\n->Tamanho da Pizza\n->Sabor da Pizza\n->menu inicial"
    );
    //Sabor de Pizza
  } else if (
    message.body !== null &&
    message.body.toLowerCase() === "sabor da pizza"
  ) {
    client.sendMessage(
      message.from,
      "Menu:\n->frango\n->Vegetariana\n->Doce\n->Menu inicial"
    );
  } else if (message.body !== null && message.body.toLowerCase() === "frango") {
    saborPizza = "Frango";
    client.sendMessage(
      message.from,
      "Menu:\n->Pizzas\n->Bebidas\n->Menu inicial"
    );
    //sabor da Pizza
  } else if (
    message.body !== null &&
    message.body.toLowerCase() === "vegetariana"
  ) {
    saborPizza = "Vegetariana";
    client.sendMessage(
      message.from,
      "Menu:\n->Pizzas\n->Bebidas\n->Menu inicial"
    );
  } else if (message.body !== null && message.body.toLowerCase() == "doce") {
    saborPizza = "Doce";
    client.sendMessage(
      message.from,
      "Menu:\n->Pizzas\n->Bebidas\n->Menu inicial"
    );
    //menu das bebidas
  } else if (message.body !== null && message.body.toLowerCase() === "bebida") {
    client.sendMessage(
      message.from,
      "Menu:\n->Sabor da Bebida\n->Tamanho da Bebida\n->Menu inicial"
    );
    //menu e opção de sabores de bebidas
  } else if (
    message.body !== null &&
    message.body.toLowerCase() === "sabor da bebida"
  ) {
    client.sendMessage(message.from, "Menu:\n->Coca\n->Sprite\n->Menu inicial");
  } else if (message.body !== null && message.body.toLowerCase() == "coca") {
    saborBebida = "Coca";
  } else if (message.body !== null && message.body.toLowerCase() == "sprite") {
    saborBebida = "Sprite";
    //menu e opção do tamanho para bebida
  } else if (
    message.body !== null &&
    message.body.toLowerCase() === "tamanho da bebida"
  ) {
    client.sendMessage(message.from, "Menu:\n->2L\n->600ml\n->Menu inicial");
  } else if (message.body !== null && message.body.toLowerCase() == "2l") {
    tamanhoBebida = "2L";
  } else if (message.body !== null && message.body.toLowerCase() == "600ml") {
    tamanhoBebida = "600ml";
    //Ver o pedido
  } else if (
    message.body !== null &&
    message.body.toLowerCase() == "ver pedido"
  ) {
    client.sendMessage(
      message.from,
      "Seu Pedido é " + tamanhoPizza
        ? "Uma Pizza " + tamanhoPizza + " de " + saborPizza
        : "" + tamanhoBebida
        ? " uma " + saborBebida + " de " + tamanhoBebida
        : ""
    );
  }
});
