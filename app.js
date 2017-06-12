// BUDGET CONTROLLER
var budgetController = (function () {



})();


// UI CONTROLLER
var UIController = (function () {
    // its a closures.
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn';
    };

    return {
        geInput: function () {

            return {

                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp.
                description: description = document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };

        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function (bungetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = function () {


        // 1. Get the field input data
        var input = UICtrl.geInput();
        console.log(input)
        // 2. Add the item to the budget controller

        // 3. Add the iten to the UI

        // 4. Calculate the budget

        //5. Display the budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);