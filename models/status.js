const Identity = require("./index").Identity;

exports.Status = class Status {
    constructor(name){
        this.id = Identity.ID++;
        this.name = name;
    }
}