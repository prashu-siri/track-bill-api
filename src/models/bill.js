class Bill {
    constructor(id, amount, date, status,  type) {
        this.id = id;
        this.amount = amount;
        this.date = date;
        this.status = status;
        this.type = type;
    }
}

module.exports = Bill;