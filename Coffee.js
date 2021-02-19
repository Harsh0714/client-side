const firstOrder = {                                            //Object literal 1 
    customerName: ["Harsh"],
    typeOfDrink: ["latte", "coffee", "expresso"],
    sizeOfCoffee: ["short", "tall", "grande", "venti"],
    drizzle: ["yes"],
    whippedCream: ["no"],
    sweetner: ["no"],
    coldFoam: ["no"],
    dairy: ["cream", "2% milk", "almond milk"],

    firstOrderDetails: function() {

        var drizzleTrue;                    //defining variable drizzleTrue
        var whippedCreamTrue;               //defining variable whippedCreamTrue
        var sweetnerTrue;                   //defining variable sweetnerTrue
        var coldFoamtrue;                   //defining variable coldfoamTrue

        //Nesting of If-else for the given condition to be true
        if (this.drizzle == "yes") {                                          
            drizzleTrue = "Drizzle:" + this.drizzle;
        } else{} if (this.whippedCream == "yes") {
            whippedCreamTrue = "Whipped Cream: " + this.whippedCream;
        } else{} if (this.sweetner == "yes") {
            sweetnerTrue = "Sweetner: " + this.sweetner;
        } else{} if (this.coldFoam == "yes") {
            coldFoamtrue = "Cold Foam: " + this.coldFoam;
        } else{}


        //Alert statement to display order as a alert
        alert('Thank You ' + this.customerName + ' for your order' + '\n' +
            'Here are your order details' + '\n' +
            'Name: ' + this.customerName + '\n' +
            'Type of drink: ' + this.typeOfDrink[1] + '\n' +
            'Size: ' + this.sizeOfCoffee[0] + '\n' +
            drizzleTrue + '\n' +
            whippedCreamTrue + '\n' +
            sweetnerTrue + '\n' +
            coldFoamtrue + '\n' +
            'Dairy: ' + this.dairy[2] + '\n')

    }
};

firstOrder.firstOrderDetails();                                                 //calling the object 


const secondOrder = {                                                           //object literal 2
    customerName: ["Jaspreet"],
    typeOfDrink: ["latte", "coffee", "expresso"],
    sizeOfCoffee: ["short", "tall", "grande", "venti"],
    drizzle: ["no"],
    whippedCream: ["yes"],
    sweetner: ["no"],
    coldFoam: ["no"],
    dairy: ["cream", "2% milk", "almond milk"],

    secondOrderDetails: function() {

        var drizzleTrue2;                                                       //defining variable drizzleTrue2
        var whippedCreamTrue2;                                                  //defining variable whippedCreamTrue2 
        var sweetnerTrue2;                                                      //defining variable weetnerTrue2
        var coldFoamTrue2;                                                          //defining variable coldFoamTrue2


        //Nesting of Of-else to satisfy the given confdition
        if (this.drizzle == "yes") {
            drizzleTrue2 = "Drizzle:" + this.drizzle;
        } else{} if (this.whippedCream == "yes") {
            whippedCreamTrue2 = "Whipped Cream: " + this.whippedCream;
        } else{} if (this.sweetner == "yes") {
            sweetnerTrue2 = "Sweetner: " + this.sweetner;
        } else{} if (this.coldFoam == "yes") {
            coldFoamTrue2 = "Cold Foam: " + this.coldFoam;
        } else{}

        //Alert statement to display the order
        alert('Thank You ' + this.customerName + ' for your order' + '\n' +
            'Here are your order details' + '\n' +
            'Name: ' + this.customerName + '\n' +
            'Type of drink: ' + this.typeOfDrink[2] + '\n' +
            'Size: ' + this.sizeOfCoffee[1] + '\n' +
            drizzleTrue2 + '\n' +
            whippedCreamTrue2 + '\n' +
            sweetnerTrue2 + '\n' +
            coldFoamTrue2 + '\n' +
            'Dairy: ' + this.dairy[1] + '\n')

    }
};

secondOrder.secondOrderDetails();                                                   //Calling the object