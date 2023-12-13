function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crust =crustType;
    pizza.sauce=sauceType;
    pizza.cheese=cheeses;
    pizza.topping=toppings;
    return pizza;
}

var chicago = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"] )
console.log("You made a delicious pizza with " + chicago.crust +" crust! Mm, and it's got " + chicago.sauce + " sauce! And let's not forget the " + chicago.cheese + " cheese! Or the " + chicago.topping + " thrown on top!")

var classic = pizzaOven ("hand tossed", "marinara", ["mozzerrella", "feta",], ["mushrooms", "olives", "onions"])

function anyGivenPizza (pizzaStyle) {
    console.log("You made a delicious pizza with " + pizzaStyle.crust +" crust! Mm, and it's got " + pizzaStyle.sauce + " sauce! And let's not forget the " + pizzaStyle.cheese + " cheese! Or the " + pizzaStyle.topping + " thrown on top!")
}

var awful = pizzaOven ("powerdrilled", "foot tomatoes", "pungent French cheese", "eye of newt")
var awful2 = pizzaOven ("face massaged", "ketchup", "maggoty cheese", "normal anchovies")
anyGivenPizza (classic)
anyGivenPizza (awful)
anyGivenPizza (awful2)

var randomCrust = [
    "face massaged",
    "power drilled",
    "unwashed hands",
    "unleavened and religious",
    "gluten free"
];

var randomSauce= [
    "foot tomatoes",
    "ketchup",
    "blood of my enemies",
    "red paint",
    "red fur shed by Clifford"
];

var randomCheese = [
    "pungent French",
    "maggoty",
    "refashioned really old milk"
];

var randomToppings = [
    "normal anchovies",
    "distilled essence of Patriots football",
    "gas station jerky"
];


function randomPizza (doesntMatterWhatYouWant) {
    pizza = {};
    pizza.crust =randomCrust[(Math.floor(Math.random() * randomCrust.length))];
    pizza.sauce=randomSauce[(Math.floor(Math.random() * randomSauce.length))];
    pizza.cheese=randomCheese[(Math.floor(Math.random() * randomCheese.length))];
    pizza.topping=randomToppings[(Math.floor(Math.random() * randomToppings.length))];
    return pizza;
}

var uhOh= randomPizza("anything");
anyGivenPizza(uhOh);
