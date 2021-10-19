const connect = require('./connect')

class DataB {
    constructor(connect) {
        this.connect = connect;
    }

    findAllEmployees() {
        return this.connect.query(
            'SELECT * FROM employee.employees'
        );
    }
}

module.exports = new DataB(connect);