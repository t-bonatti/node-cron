'use strict';

const EventEmitter = require('events');

class Task extends EventEmitter{
    constructor(execution){
        super();

        if(typeof execution !== 'function'){
            throw 'execution must be a function';
        }

        this.execute = (now) => Promise.resolve(execution(now))
            .then((value) => this.emit('task-finished', value));
    }
}

module.exports = Task;

