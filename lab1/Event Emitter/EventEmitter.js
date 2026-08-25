import {EventEmitter} from 'node:events'

const sayHi = (name) => {
    console.log(`${name} logged in`);
};

const task = new EventEmitter();

task.once("greet", () => {
    console.log("System started");
});
task.on("greet", sayHi);
task.on("greet", (name) => {
    console.log(`${name} starts working`);
});
task.on("greet", (name) => {
    console.log(`${name} Logged out`);
});
task.once("exit", (name) => {
    console.log(`System shutdown by ${name}`);
})


task.emit("greet", "Devashish");
console.log();
task.off("greet", sayHi); //must have function named 
task.emit("greet", "Devu");
console.log();
task.emit("exit", "Manager"); //execute only once
console.log();
task.emit("exit", "Employee"); //won't execute
console.log("total listener", task.listenerCount("greet"));
task.removeAllListeners("greet");