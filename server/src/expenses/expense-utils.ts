import { Request, Response } from "express";
import { Database } from "sqlite";
import { Expense } from "../types";

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
    try {
        // Type casting the request body to the expected format.
        const { id, cost, description } = req.params
 
        if(!id){
            return res.status(400).send({error: "Missing required parameter: id"});
        }

        if((db.get('SELECT id FROM expenses WHERE id=?;', id)) === null) {
            return res.status(404).send({ error: "Expense not found" });
        }
    
        db.run('DELETE FROM expenses WHERE id=?;', id);
        res.status(204).send();

    } catch (error) {
        return res.status(400).send({ error: `Expense could not be deleted, + ${error}` });
    };



}

export async function getExpenses(req: Request, res: Response, db: Database) {

    const data = await db.all('SELECT * FROM expenses');
    res.status(200).send({ "data": data });
        

}