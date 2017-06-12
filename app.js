// BUDGET CONTROLLER
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //this is bad!!    
    //    var allExpenses = [];
    //    var allIncomes = [];
    //    var totalExpenses = 0;

    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    }

})();


// UI CONTROLLER
var UIController = (function () {
    // its a closures.

    var setupEventListeners = function () {
        return DOMstrings;
    }

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
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

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });
    };


    var ctrlAddItem = function () {


        // 1. Get the field input data
        var input = UICtrl.geInput();
        console.log(input)
        // 2. Add the item to the budget controller

        // 3. Add the iten to the UI

        // 4. Calculate the budget

        //5. Display the budget on the UI

    };

    return {
        init: function () {
            setupEventListeners();
        }
    }


})(budgetController, UIController);

controller.init(); //IEFI
dsdsd
//test