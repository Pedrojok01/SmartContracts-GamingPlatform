# ToDo list:

## Features to be added

- [x] Factory contract
- [x] Game contract
- [x] Handle player stats
  - [x] update
  - [x] reset
- [x] Handle Login session
- [x] Pay Manager
- [x] Weekly tournament reward + distrib
- [ ] L3P fee for factory deployment?
- [ ] Decide NFT attributes
- [ ] Decide Piggy Bank / Friend & Family
- [ ] Decide high price tournament based on NFT / L3P balance?
- [ ] Session Manager contract for Asynchronous PvP

## Improvements to be done

- [x] Fix RewardStructure.sol
- [ ] Improve storage for gas saving
- [ ] Add getter functions
- [x] Unit tests (NFT tests missing)

# Advanced Sample Hardhat Project

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
