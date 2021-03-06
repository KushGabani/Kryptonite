// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address to, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string twitter;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(
        address payable receiver,
        uint amount,
        string memory twitter,
        string memory message,
        string memory keyword
    ) public {

        // add transaction to the blockchain
        transactionCount++;

        // msg.sender is always present in every method of the contract by default
        transactions.push(
            TransferStruct(
                msg.sender,
                receiver,
                amount,
                twitter,
                message,
                block.timestamp,
                keyword
            )
        );

        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyword
        );
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        // return all transactions
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        // return the number of transactions
        return transactionCount;
    }
}