import React,{useContext} from 'react';

//Import Transaction Component
import {Transaction} from './Transaction';
// Import The Global State
import { GlobalContext } from '../context/GlobalState';

export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <hr></hr>
            <ul className="list">
                {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction}/>
                
                ))}
            </ul>

        </div>
    )
}