import { Response } from 'express';

// Function to get the budget
export function getBudget(res: Response, budget: number) {
    res.status(200).send({ "data": budget });
}

// Function to update the budget
export function updateBudget(res: Response, body: any, budget: { amount: number }) {
    // TO DO: Implement updateBudget function
    console.log(body);
    const amount = body;
    // console.log(amount);
    // if(amount === undefined || typeof amount !== 'number' || amount < 0){
    //     return res.status(400).send({ error: "Invalid budget amount"});

    // }
    budget.amount = amount;
    return res.status(200).send({ message: "Budget updated successfully", budget});
}
