const Queue = require("./Queue");

class Room {
  constructor(io, totalDesktops = 1, props = {}) {
    this.io = io;
    this.queue = new Queue();
    this.desktopsStatus = {};
    for (let i = 0; i <= totalDesktops; i++) {
      this.desktopsStatus[i] = null;
    }

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
            desktopsStatus: this.desktopsStatus,
          },
        });
      };

      socket.emit("connection-message", {
        msg: "Welcome to server!",
        date: new Date(),
      });
      socket.emit("update-data", {
        payload: {
          nextExpendableTicket: this.queue.nextNumber,
          queueData: this.queue.lastTenAttendedTickets,
          desktopsStatus: this.desktopsStatus,
        },
      });

      socket.on("client-message", (data) => {});

      socket.on("expend-ticket", () => {
        this.queue.pushTicket();
        emitUpdateData();
      });

      socket.on("call-next-ticket", ({ payload }) => {
        const { desktopNumber } = payload;
        const ticketNumber = this.queue.callNextPendingTicket(desktopNumber);
        this.desktopsStatus[desktopNumber] = ticketNumber;
        emitUpdateData();
      });
    });
  }
}

module.exports = Room;
