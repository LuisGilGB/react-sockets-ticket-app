const { v4: uuidV4 } = require("uuid");

class Ticket {
  constructor(number) {
    this.uuid = uuidV4();
    this.number = number;
    this.expDate = +new Date();
    this.attended = false;
    this.desktopNumber = null;
    this.callDate = null;
  }

  callFromDesktop(desktopNumber) {
    this.attended = false;
    this.desktopNumber = desktopNumber;
    this.callDate = +new Date();
  }
}

module.exports = Ticket;
