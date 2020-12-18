const Queue = require("./Queue");

class Sockets {
  constructor(io, props = {}) {
    this.io = io;
    this.queue = new Queue();

    this.addSocketEvents();
  }

  addSocketEvents() {
    this.io.on("connection", (socket) => {
      console.log("Socket client connected.");
      const emitUpdateData = () => {
        this.io.emit("update-data", {
          payload: {
            nextExpendableTicket: this.queue.nextNumber,
            queueData: this.queue.lastTenAttendedTickets,
          },
        });
      };

      socket.emit("connection-message", {
        msg: "Welcme to server!",
        date: new Date(),
      });
      emitUpdateData();

      socket.on("client-message", (data) => {});

      socket.on("expend-ticket", () => {
        this.queue.pushTicket();
        emitUpdateData();
      });

      socket.on("call-next-ticket", ({ payload }) => {
        this.queue.callNextPendingTicket(payload.desktopNumber);
        emitUpdateData();
      });
    });
  }
}

module.exports = Sockets;
