'use strict';

const randomNumber = function(min, max) {
    
};

const rollDice = function() {

};

window.addEventListener('load', function () {

    const rollButton = document.getElementById('rollButon');
    
    rollButton.addEventListener('click', function (event) {
        const allDice = [].slice.call(document.querySelectorAll('[id^=\'dice\']'));
        console.log('roll clicked');
    });

});