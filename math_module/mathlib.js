module.exports = {
    add: function(num1, num2) { 
         console.log(num1 + " plus " + num2 + " equals: " + (num1 + num2));
    },
    multiply: function(num1, num2) {
        console.log(num1 + " times " + num2 + " equals: " + (num1 * num2));
    },
    square: function(num) {
        console.log(num + " squared is: " + (num * num));
    },
    random: function(num1, num2) {
        console.log("ooh! A random number between " + num1 + " and " + num2 + " is: " + (Math.floor(Math.random() * (num2-num1+1) + num1)));
    }
};

