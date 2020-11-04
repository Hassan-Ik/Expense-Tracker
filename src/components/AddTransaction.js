import React, {useState, useContext} from 'react';

import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) =>{
        e.preventDefault();
        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>
                Add New Transaction
            </h3>
            <hr></hr>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description" className="label">
                        Description
                    </label>
                    <input type="text" 
                            placeholder="Detail of Transaction" 
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                      ></input>
                </div>
                <div className="form-control">
                    <label htmlFor="transactionammount">
                        Transaction Amount
                    </label>
                    <input  type="number"
                            placeholder="PKR Value of Transaction"
                            id="transactionamount"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}