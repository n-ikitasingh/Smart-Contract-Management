# Smart-Contract-Management

Smart Contract Management is a blockchain-based project that demonstrates the integration of a simple smart contract with a frontend application. The project includes a Solidity smart contract with multiple functions to manage a balance, and a Next.js frontend that interacts with the contract using MetaMask.

## Project Structure

- **Smart Contract:** A Solidity contract that includes functions for managing a balance (deposit, withdraw, get balance, double balance, and half balance).
- **Deployment Script:** A script to deploy the smart contract to a local blockchain using Hardhat.
- **Frontend Application:** A Next.js application that connects to MetaMask, interacts with the smart contract, and displays the balance values.

## Features

### Smart Contract Functions:

- `getBalance()`: Returns the current balance.
- `doubleBalance()`: Returns double the current balance.
- `halfBalance()`: Returns half the current balance.
- `deposit(uint256 _amount)`: Increases the balance by the specified amount.
- `withdraw(uint256 _amount)`: Decreases the balance by the specified amount.

### Frontend:

- Connect to MetaMask wallet.
- Display current balance, double balance, and half balance.
- Perform deposit and withdraw operations.

## Installation and Setup

### Prerequisites

- Node.js
- MetaMask extension for your browser

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/n-ikitasingh/Smart-Contract-Management.git
   ```

2. **Install Dependencies**

   Inside the project directory, in the terminal type:

   ```bash
   npm i
   ```

3. **Open Additional Terminals**

   Open two additional terminals in your VS Code.

4. **Start the Hardhat Node**

   In the second terminal, type:

   ```bash
   npx hardhat node
   ```

5. **Deploy the Smart Contract**

   In the third terminal, type:

   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

6. **Update Contract Address**

   In `pages/index.js`, replace the placeholder with your deployed contract address:

   ```javascript
   const contractAddress = "YOUR_CONTRACT_ADDRESS";
   ```

7. **Start the Frontend Application**

   Back in the first terminal, type:

   ```bash
   npm run dev
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Open the Application**

   Navigate to [http://localhost:3000](http://localhost:3000).

2. **Connect MetaMask**

   Click the "Connect MetaMask Wallet" button to connect your MetaMask account.

3. **Interact with the Contract**

   - View your current balance, double balance, and half balance.
   - Use the "Deposit 1 ETH" and "Withdraw 1 ETH" buttons to interact with the contract.
