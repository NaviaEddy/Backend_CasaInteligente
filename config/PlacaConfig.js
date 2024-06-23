const { Board, Servo, Led } = require("johnny-five");

let servoVentana;
let servoPuerta;
let servoGaraje;
let servoTranca;
let ledDormitorio1;
let ledDormitorio2;
let ledSala;
let boardReady = false;

const initializeBoard = () => {
  return new Promise((resolve, reject) => {
    const board = new Board({ port: "COM6"});
    
    board.on("ready", () => {
      servoVentana = new Servo(11); // Pin 11 para el servo de la ventana
      servoPuerta = new Servo(10);  // Pin 10 para el servo de la puerta
      servoGaraje = new Servo(12);  // Pin 12 para el servo del garaje
      servoTranca = new Servo(9);  // Pin 9 para el servo de la tranca
      ledDormitorio1 = new Led(5); // Pin 5 para el led del dormitorio 1
      ledDormitorio2 = new Led(3); // Pin 3 para el led del dormitorio 2
      ledSala = new Led(7); // Pin 7 para el led de la sala
      
      if (!servoVentana || !servoPuerta || !servoGaraje || !servoTranca) {
        reject("Error initializing servos");
      } else {
        boardReady = true;
        console.log("Board ready with servos initialized");
        resolve(board);
      }
    });

    board.on("error", error => {
      reject(error);
    });
  });
};

module.exports = {
  initializeBoard,
  isBoardReady: () => boardReady,
  getServoVentana: () => servoVentana,
  getServoPuerta: () => servoPuerta,
  getServoGaraje: () => servoGaraje,
  getServoTranca: () => servoTranca,
  getLedDormitorio1: () => ledDormitorio1,
  getLedDormitorio2: () => ledDormitorio2,
  getLedSala: () => ledSala
};
