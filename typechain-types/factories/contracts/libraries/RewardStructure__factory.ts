/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RewardStructure,
  RewardStructureInterface,
} from "../../../contracts/libraries/RewardStructure";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "x",
        type: "uint8",
      },
    ],
    name: "getRewardStructure",
    outputs: [
      {
        internalType: "uint8[10]",
        name: "rewards",
        type: "uint8[10]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6102d461003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063dc5ab5821461003a575b600080fd5b61004d61004836600461023f565b610063565b60405161005a9190610269565b60405180910390f35b61006b610220565b8160ff16600a148061008057508160ff166005145b8061008e57508160ff166003145b6100f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f696e76616c69642076616c756500000000000000000000000000000000000000604482015260640160405180910390fd5b8160ff16600a0361015a5750506040805161014081018252601f815260146020820152600f91810191909152600a606082015260086080820152600660a0820152600460c0820152600360e08201526002610100820152600161012082015290565b8160ff166005036101bc5750506040805161014081018252602d815260196020820152600f91810191909152600a606082015260056080820152600060a0820181905260c0820181905260e08201819052610100820181905261012082015290565b8160ff1660030361021b5750604080516101408101825260328152601e60208201526014918101919091526000606082018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201525b919050565b604051806101400160405280600a906020820280368337509192915050565b60006020828403121561025157600080fd5b813560ff8116811461026257600080fd5b9392505050565b6101408101818360005b600a81101561029557815160ff16835260209283019290910190600101610273565b5050509291505056fea2646970667358221220c6527cf56bb5e2cf90e87320212756bac65faebec080b36029af2ee633f621a964736f6c63430008100033";

type RewardStructureConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RewardStructureConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RewardStructure__factory extends ContractFactory {
  constructor(...args: RewardStructureConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RewardStructure> {
    return super.deploy(overrides || {}) as Promise<RewardStructure>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RewardStructure {
    return super.attach(address) as RewardStructure;
  }
  override connect(signer: Signer): RewardStructure__factory {
    return super.connect(signer) as RewardStructure__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardStructureInterface {
    return new utils.Interface(_abi) as RewardStructureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardStructure {
    return new Contract(address, _abi, signerOrProvider) as RewardStructure;
  }
}