class Sockets {
  constructor(io, props = {}) {
    this.io = io;

    this.addSocketEvents();
  }

  addSocketEvents() {
    this.io.on("connection", (socket) => {
      console.log("Socket client connected.");
      socket.emit("connection-message", {
        msg: "Welcme to server!",
        date: new Date(),
      });

      socket.on("client-message", (data) => {});
    });
  }
}

module.exports = Sockets;
