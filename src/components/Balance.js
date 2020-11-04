import React, {useContext} from 'react';

// import the Global State
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    
    const {transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc, item) => (acc += item),0).toFixed(2);

    return (
        <div className="balance">
            <h3>
               Current Balance 
            </h3>
            <h3 id="balance">Rs 120000</h3>
        </div>
    );
}