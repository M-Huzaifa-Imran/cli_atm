import inquirer from "inquirer";

let myBalance = 10000; // dollar
let myPin = 3639;

let pinAnswer = await inquirer.prompt(
    {
        name: "pin",
        type: "number",
        message: "Enter your PIN:"
    }
);

// 3639 == pinAnswer.pin

if (pinAnswer.pin === myPin) {
    console.log("Welcome to your account!");

    let actionAns = await inquirer.prompt(
        {
            type: "list",
            name: "action",
            message: "Choose an action:",
            choices: ["check balance", "withdraw" ]
        }
    )

    console.log(actionAns);
    

    if (actionAns.action === "withdraw") {
        let amountAns = await inquirer.prompt(
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        );

        myBalance -= amountAns.amount
        console.log("your new balance is = ", myBalance);

    }

    else if (actionAns.action === "check balance") {

        console.log("your balance is = ", myBalance);

    }
}

else {
    console.log("Invalid PIN. Please try again.");
}