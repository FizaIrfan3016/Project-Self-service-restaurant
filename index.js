#! /usr/bin/env node
// All imported packages
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
// Making a neontitle for program
async function start() {
    let neonTitle = chalkanimation.rainbow("\n *Welcome to the self order restaurant * \n");
    await sleep();
    neonTitle.stop();
}
// calling the function
await start();
// Create a menu list 
async function again() {
    // Create a title menu
    async function start1() {
        let menuTitle = chalkanimation.neon("\n ..MENU.. \n");
        await sleep();
        menuTitle.stop();
    }
    // call the menu function
    await start1();
    // Menu list      
    const orderMenu = await inquirer.prompt([
        {
            name: "dish",
            type: "list",
            message: "Select the item from menu!",
            choices: [
                "Starter",
                "Main course",
                "Beverages",
                "Juices",
                "Desserts",
                "Addiional items"
            ]
        }
    ]);
    // Using switch case for order menu.
    switch (orderMenu.dish) {
        case "Starter":
            const starterDishes = await inquirer.prompt([
                {
                    name: "d1",
                    type: "list",
                    message: "Select the ",
                    choices: [
                        "Nachos",
                        "Fries regular",
                        "Fries jumbo",
                        "Regular sandwich",
                        "Special sandwich"
                    ]
                }
            ]);
            if (starterDishes.d1 === "Nachos") {
                console.log(chalk.cyan.bold("You have to pay 250 Rs for Nachos"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.black.bgWhite.bold("Insert the card for payment!"));
                    console.log(chalk.red.bgGray.bold("Thank You. Have a nice day!"));
                }
                else {
                    console.log(chalk.blueBright.bold("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (starterDishes.d1 === "Fries regular") {
                console.log(chalk.cyan.bgGrey.bold("You have to pay 150 Rs for Fries regular!"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.red.bgWhite.bold("Insert the card for payment!"));
                    console.log(chalk.cyan.bgBlackBright.bold("Thank You. Have a nice day!"));
                }
                else {
                    console.log(chalk.greenBright.italic("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (starterDishes.d1 === "Fries jumbo") {
                console.log(chalk.red.italic("You have to pay 250 Rs for Fries jumbo"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.cyan.italic("Insert the card for payment!"));
                    console.log(chalk.blue.bold("Thank You. Have a nice day!"));
                }
                else {
                    console.log(chalk.gray.bgWhite.italic("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (starterDishes.d1 === "Regular sandwich") {
                console.log(chalk.blueBright.bold("You have to pay 200 Rs for Regular sandwich."));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.yellowBright.italic("Insert the card for payment!"));
                    console.log(chalk.cyanBright.bold("Thank You. Have a nice day!"));
                }
                else {
                    console.log(chalk.blue.italic("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (starterDishes.d1 === "Special sandwich") {
                console.log(chalk.redBright.bold("You have to pay 250 Rs for Special sandwich"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.gray.bgWhite.bold("Insert the card for payment!"));
                    console.log(chalk.yellow.italic("Thank You. Have a nice day!"));
                }
                else {
                    console.log(chalk.blackBright.bgCyanBright.italic("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            break;
        case "Main course":
            console.log("Select Your main course");
            const mainCourse = await inquirer.prompt([
                {
                    name: "d2",
                    type: "list",
                    message: "Select Your main course please!",
                    choices: [
                        "Chicken manchurian",
                        "Alferedo pasta",
                        "Chicken Stack",
                        "Chicken Briyani",
                        "Beef Briyani",
                        "Mutton karahi",
                        "Chicken karahi",
                        "White karahi"
                    ]
                }
            ]);
            if (mainCourse.d2 === "Chicken manchurian") {
                console.log(chalk.cyanBright.bold("Your have to pay 1250 Rs for chicken manchurian."));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.redBright.italic("Insert the card for payment!"));
                    console.log(chalk.cyan.bold.bgWhite("You paid successfully. Enjoy the food. Have a nice day!"));
                }
                else {
                    console.log(chalk.blueBright.italic("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (mainCourse.d2 === "Alferedo pasta") {
                console.log(chalk.yellow.bold("You have to pay 1150 Rs for Alferedo pasta"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.red.italic("Insert the card for payment!"));
                    console.log(chalk.blueBright.italic("You paid successfully. Enjoy the food. Have a nice day!"));
                }
                else {
                    console.log(chalk.redBright.bgCyan.bold("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (mainCourse.d2 === "Chicken Stack") {
                console.log(chalk.cyan.bold("You have to pay 2500 Rs for chicken stack"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.yellowBright.italic("Insert the card for payment!"));
                    console.log(chalk.blue.bgGreenBright.bold("You paid successfully. Enjoy the food. Have a nice day!"));
                }
                else {
                    console.log(chalk.blue.italic("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (mainCourse.d2 === "Chicken Briyani") {
                console.log(chalk.cyan.bgGrey.bold("You have to pay 150 Rs for chicken briyani"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.blue.bold("Insert the card for payment!"));
                    console.log(chalk.cyanBright.bold("You paid successfully. Enjoy the food. Have a nice day!"));
                }
                else {
                    console.log(chalk.yellow.italic("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (mainCourse.d2 === "Beef Briyani") {
                console.log(chalk.redBright.bold("You have to pay 250 Rs for beef briyani"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.blueBright.bgWhite.italic("Insert the card for payment!"));
                    console.log(chalk.yellowBright.italic("You paid successfully. Enjoy the food. Have a nice day!"));
                }
                else {
                    console.log(chalk.cyanBright.italic("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (mainCourse.d2 === "Mutton karahi") {
                console.log(chalk.blue.bold("You have to pay 1550 Rs for mutton karahi"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.green.bold("Insert the card for payment!"));
                    console.log(chalk.blue.italic("You paid successfully. Enjoy the food. Have a nice day"));
                }
                else {
                    console.log(chalk.black.bgBlue.bold("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (mainCourse.d2 === "Chicken karahi") {
                console.log(chalk.red.italic("You have to pay 1050 Rs for chicken karahi"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.blueBright.bold("Insert the card for payment!"));
                    console.log(chalk.cyan.bold("You paid successfully. Enjoy the food. Have a nice day!"));
                }
                else {
                    console.log(chalk.blue.italic("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            else if (mainCourse.d2 === "White karahi") {
                console.log(chalk.yellowBright.bold("You have to pay 1250 Rs for white karahi"));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.cyanBright.italic("Insert the card for payment!"));
                    console.log(chalk.redBright.bold("You paid successfully. Enjoy the food. Have a nice day!"));
                }
                else {
                    console.log(chalk.blue.bold("Your cash payment is complete. Enjoy the food. Have a nice day!"));
                }
            }
            break;
        case "Beverages":
            console.log(chalk.redBright.bold("Select the beverages!"));
            const drinks = await inquirer.prompt([
                {
                    name: "d3",
                    type: "list",
                    message: "Select the drinks!",
                    choices: ["Cola", "Marinda", "Sprite", "Pakola", "Mineral water"]
                }
            ]);
            if (drinks.d3 === "Cola") {
                console.log(chalk.blueBright.bold("You have to pay 100 RS for cola by cash!"));
                console.log(chalk.cyan.italic("Enjoy the drink. Have a nice day."));
            }
            else if (drinks.d3 === "Marinda") {
                console.log(chalk.blue.bold("You have to pay 100 RS for Marinda by cash!"));
                console.log(chalk.redBright.italic("Enjoy the drink. Have a nice day."));
            }
            else if (drinks.d3 === "Sprite") {
                console.log(chalk.blue.bold("You have to pay 100 RS for Sprite by cash!"));
                console.log(chalk.redBright.italic("Enjoy the drink. Have a nice day."));
            }
            else if (drinks.d3 === "Pakola") {
                console.log(chalk.blue.bold("You have to pay 100 RS for pakola by cash!"));
                console.log(chalk.redBright.italic("Enjoy the drink. Have a nice day."));
            }
            else {
                console.log(chalk.blue.bold("You have to pay 100 RS for mineral water by cash!"));
                console.log(chalk.redBright.italic("Enjoy the drink. Have a nice day."));
            }
            break;
        case "Juices":
            console.log(chalk.cyanBright.bold("Select the juices!"));
            const juice = await inquirer.prompt([
                {
                    name: "d4",
                    type: "list",
                    message: "Select the juices!",
                    choices: ["Pineapple", "Apple", "Orange", "Grapes", "Mix fruit", "Mango"]
                }
            ]);
            if (juice.d4 === "Pineapple") {
                console.log(chalk.cyan.bold("You have to pay 150 RS for pineapple juice by cash!"));
                console.log(chalk.yellow.italic("Enjoy the juice. Have a nice day."));
            }
            else if (juice.d4 === "Apple") {
                console.log(chalk.cyan.bold("You have to pay 150 RS for apple juice by cash!"));
                console.log(chalk.yellow.italic("Enjoy the juice. Have a nice day."));
            }
            else if (juice.d4 === "Orange") {
                console.log(chalk.cyan.bold("You have to pay 200 RS for orange juice by cash!"));
                console.log(chalk.yellow.italic("Enjoy the juice. Have a nice day."));
            }
            else if (juice.d4 === "Grapes") {
                console.log(chalk.cyan.bold("You have to pay 150 RS for grapes juice by cash"));
                console.log(chalk.yellow.italic("Enjoy the juice. Have a nice day."));
            }
            else if (juice.d4 === "Mix fruit") {
                console.log(chalk.cyan.bold("You have to pay 300 RS for mix fruit juice by cash!"));
                console.log(chalk.yellow.italic("Enjoy the juice. Have a nice day."));
            }
            else {
                console.log(chalk.cyan.bold("You have to pay 250 RS for mango juice by cash!"));
                console.log(chalk.yellow.italic("Enjoy the juice. Have a nice day."));
            }
            break;
        case "Desserts":
            console.log(chalk.redBright.bold("Select you dessert!"));
            const sweet = await inquirer.prompt([
                {
                    name: "d5",
                    type: "list",
                    message: "Select You sweet dish!",
                    choices: ["Cake", "Ice Cream", "Brownie"]
                }
            ]);
            if (sweet.d5 === "Cake") {
                console.log(chalk.blueBright.italic("You have to pay 200 RS for 1 piece of cake! "));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.cyan.italic("Insert the card for payment!"));
                    console.log(chalk.blue.bold("You paid successfully. Enjoy the dessert. Have a nice day!"));
                }
                else {
                    console.log(chalk.yellow.italic("Your cash payment is complete. Enjoy the dessert. Have a nice day!"));
                }
            }
            else if (sweet.d5 === "Ice Cream") {
                console.log(chalk.blueBright.italic("You have to pay 150 RS for 1 scoop."));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.cyan.italic("Insert the card for payment!"));
                    console.log(chalk.blue.bold("You paid successfully. Enjoy the dessert. Have a nice day!"));
                }
                else {
                    console.log(chalk.yellow.bold("Your cash payment is complete. Enjoy the dessert. Have a nice day!"));
                }
            }
            else if (sweet.d5 === "Brownie") {
                console.log(chalk.redBright.italic("You have to pay 200 RS for Brownie."));
                let payment = await inquirer.prompt([
                    {
                        name: "pay",
                        type: "list",
                        message: "Select payment method!",
                        choices: ["Card", "Cash"]
                    }
                ]);
                if (payment.pay === "Card") {
                    console.log(chalk.cyan.bold("Insert the card for payment!"));
                    console.log(chalk.blue.italic("You paid successfully. Enjoy the dessert. Have a nice day!"));
                }
                else {
                    console.log(chalk.yellow.italic("You cash payment is complete. Enjoy the dessert. Have a nice day!"));
                }
            }
            break;
        case "Addiional items":
            const addition = await inquirer.prompt([
                {
                    name: "d6",
                    type: "list",
                    message: "Add addition item in You order",
                    choices: ["Paratha", "Naan", "Chai", "Coffee", "Raita"]
                }
            ]);
            if (addition.d6 === "Paratha") {
                console.log(chalk.redBright.bold("You have to pay 30 RS for each paratha"));
            }
            else if (addition.d6 === "Naan") {
                console.log(chalk.redBright.bold("You have to pay 25 RS for each naan."));
            }
            else if (addition.d6 === "Chai") {
                console.log(chalk.redBright.bold("You have to pay 50 RS for 1 cup of chai."));
            }
            else if (addition.d6 === "Coffee") {
                console.log(chalk.redBright.bold("You have to pay 200 RS for 1 cup of coffee."));
            }
            else if (addition.d6 === "Raita") {
                console.log(chalk.redBright.bold("You have to pay 50 RS for Raita."));
            }
            break;
        default:
            console.log(chalk.blue.bgWhite.italic("You did'nt order yet!."));
            break;
    }
}
do {
    await again();
    var againstart = await inquirer
        .prompt({
        type: "input",
        name: "orderAgain",
        message: "Do you want to order more? Press y or n: "
    });
    console.log("\n");
} while (againstart.orderAgain == 'y' || againstart.orderAgain == 'Y' || againstart.orderAgain == 'yes' || againstart.orderAgain == 'YES');
