
//Q-1
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }

};

// Q-2
var createCounter = function(n) {

    return function() {
        return n++;
    };
};