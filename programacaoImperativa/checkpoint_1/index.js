function micro(op, sec) {
  let tPipoca = 10;
  let tMacarrao = 8;
  let tCarne = 15;
  let tFeijao = 12;
  let tBrigadeiro = 8;

  function calc(defaultTime, userTime) {
    if (userTime > 3 * defaultTime) {
      console.log("Kabumm");
    } else if (userTime > 2 * defaultTime) {
      console.log("comida queimou");
    } else if (userTime < defaultTime) {
      console.log("Tempo insuficiente");
    } else {
      console.log("Prato pronto, bom apetite!!!");
    }
  }

  switch (op) {
    case 1:
      calc(tPipoca, sec);
      break;
    case 2:
      calc(tMacarrao, sec);
      break;
    case 3:
      calc(tCarne, sec);
      break;
    case 4:
      calc(tFeijao, sec);
      break;
    case 5:
      calc(tBrigadeiro, sec);
      break;
    default:
      console.log("Prato inexistente");
      break;
  }
}

micro(1, 10);
micro(2, 10);
micro(3, 10);
micro(4, 10);
micro(5, 10);
micro(9, 10);
