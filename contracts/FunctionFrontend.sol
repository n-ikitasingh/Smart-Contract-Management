// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract FunctionFrontend {
    address payable public owner;
    uint256 public balance;

    event Deposit(uint256 amount);
    event Withdraw(uint256 amount);

    constructor(uint256 initBalance) payable {
        owner = payable(msg.sender);
        balance = initBalance;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }

    function deposit(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can deposit");
        uint256 previousBalance = balance;
        balance += amount;
        assert(balance == previousBalance + amount);
        emit Deposit(amount);
    }

    function withdraw(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can withdraw");
        require(balance >= amount, "Insufficient balance");
        uint256 previousBalance = balance;
        balance -= amount;
        assert(balance == previousBalance - amount);
        emit Withdraw(amount);
    }

    function doubleBalance() public view returns (uint256) {
        return balance * 2;
    }

    function halfBalance() public view returns (uint256) {
        return balance / 2;
    }
}
