import { Request, Response } from "express";
import { Database } from "sqlite";

export async function createExpenseServer(req: Request, res: Response, db: Database) {

    try {
        // Type casting the request body to the expected format.
        const { id, cost, description } = req.body as { id: string, cost: number, description: string };
 
        if (!description || !id || !cost) {
            return res.status(400).send({ error: "Missing required fields" });
        }
 
        await db.run('INSERT INTO expenses (id, description, cost) VALUES (?, ?, ?);', [id, description, cost]);
        res.status(201).send({ id, description, cost });
 
    } catch (error) {
 
        return res.status(400).send({ error: `Expense could not be created, + ${error}` });
    };
 
 }
 

export function deleteExpense(req: Request, res: Response, db: Database) {
    // TO DO: Implement deleteExpense function
    const { id, cost, description } = req.params;
    if(!id){
        return res.status(400).send({error: "Missing required parameter: id"});
    }
    const index = expenses.findIndex(expenses => expenses.id === id);
    console.log(id);
    if(index === -1){
        return res.status(404).send({ error: "Expense not found" });
    }
    expenses.splice(index, 1);
    res.status(204).send();

}

export function getExpenses(req: Request, res: Response, db: Database) {
    res.status(200).send({ "data": expenses });
}