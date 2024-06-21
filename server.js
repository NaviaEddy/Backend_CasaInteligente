const app = require("./app");

const PORT = process.env.PORT || 3000;

const startServer = (port) => {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(server);
    });
  });
};

startServer(PORT)
  .then((server) => {
    console.log(`Server is running on port ${PORT}`);
  })
  .catch((error) => {
    console.error(`Error starting the server: ${error}`);
  });
