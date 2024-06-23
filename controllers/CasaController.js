const { initializeBoard, 
  isBoardReady, 
  getServoVentana, 
  getServoPuerta,
  getServoGaraje,
  getServoTranca,
  getLedDormitorio1,
  getLedDormitorio2,
  getLedSala} = require("../config/PlacaConfig");

initializeBoard()
  .then(() => {
    console.log("Board and servos initialized successfully");
  })
  .catch(error => {
    console.error("Error initializing board:", error);
    process.exit(1); 
  });

exports.AbrirVentana = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let servoventana = getServoVentana();

  servoventana.to(95);
  setTimeout(() => {
    servoventana.to(90);
    res.status(200).send({ message: "Ventana Abierta" });
  }, 600);
};

exports.CerrarVentana = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let servoventana = getServoVentana();

  servoventana.to(80);
  setTimeout(() => {
    servoventana.to(90);
    res.status(200).send({ message: "Ventana Cerrada" });
  }, 600);
};

exports.AbrirPuerta = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let servopuerta = getServoPuerta();

  servopuerta.to(100);
  setTimeout(() => {
    servopuerta.to(90);
    res.status(200).send({ message: "Puerta Abierta" });
  }, 600);
};

exports.CerrarPuerta = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let servopuerta = getServoPuerta();

  servopuerta.to(80);
  setTimeout(() => {
    servopuerta.to(90);
    res.status(200).send({ message: "Puerta Cerrada" });
  }, 650);
};

exports.AbrirGaraje = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let servogaraje = getServoGaraje();

  servogaraje.to(100);
  setTimeout(() => {
    servogaraje.to(90);
    res.status(200).send({ message: "Garaje Abierto" });
  }, 1000);
};

exports.CerrarGaraje = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let servogaraje = getServoGaraje();

  servogaraje.to(80);
  setTimeout(() => {
    servogaraje.to(90);
    res.status(200).send({ message: "Puerta Cerrada" });
  }, 850);
};

exports.AbrirTranca = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let servotranca = getServoTranca();

  servotranca.to(100);
  setTimeout(() => {
    servotranca.to(90);
    res.status(200).send({ message: "Tranca levantada" });
  }, 500);
};

exports.CerrarTranca = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let servotranca = getServoTranca();

  servotranca.to(78);
  setTimeout(() => {
    servotranca.to(90);
    res.status(200).send({ message: "Tranca Bajada" });
  }, 450);
};

exports.EncenderDormitorio1 = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }
  let dormitorio1 = getLedDormitorio1();
  if(dormitorio1){
    dormitorio1.on();
    return res.status(200).send({ message: "Led dormitorio 1 encendido" });
  }
  
};

exports.ApagarDormitorio1 = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let dormitorio1 = getLedDormitorio1();

  if(dormitorio1){
    dormitorio1.off();
    return res.status(200).send({ message: "Led dormitorio 1 apagado" });
  }
};

exports.EncenderDormitorio2 = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }
  let dormitorio2 = getLedDormitorio2();
  if(dormitorio2){
    dormitorio2.on();
    return res.status(200).send({ message: "Led dormitorio 2 encendido" });
  }
  
};

exports.ApagarDormitorio2 = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let dormitorio2 = getLedDormitorio2();
  if(dormitorio2){
    dormitorio2.off();
    return res.status(200).send({ message: "Led dormitorio 2 apagado" });
  }
};

exports.EncenderSala = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }
  let sala = getLedSala();
  if(sala){
    sala.on();
    return res.status(200).send({ message: "Led sala encendido" });
  }
  
};

exports.ApagarSala = (req, res) => {
  if (!isBoardReady()) {
    return res.status(500).send({ message: "Board not ready" });
  }

  let sala = getLedSala();

  if(sala){
    sala.off();
    return res.status(200).send({ message: "Led sala apagado" });
  }
};