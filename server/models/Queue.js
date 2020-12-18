const Ticket = require("./Ticket");

class Queue {
  constructor() {
    this.nextNumber = 1;
    this.queueData = [];
  }

  get lastTenAttendedTickets() {
    return this.queueData.filter((t) => t.attended).slice(-10);
  }

  pushTicket() {
    this.queueData.push(new Ticket(this.nextNumber));
    this.nextNumber++;
  }

  callNextPendingTicket(desktopNumber) {
    const nextTicket = this.queueData.find((t) => !t.attended);
    nextTicket && nextTicket.callFromDesktop(desktopNumber);
    return nextTicket ? nextTicket.number : null;
  }
}

module.exports = Queue;
