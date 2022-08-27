/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Game",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Game__factory>;
    getContractFactory(
      name: "GameFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GameFactory__factory>;
    getContractFactory(
      name: "IGame",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGame__factory>;
    getContractFactory(
      name: "LevelLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LevelLib__factory>;
    getContractFactory(
      name: "RewardStructure",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RewardStructure__factory>;
    getContractFactory(
      name: "PaymentManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymentManager__factory>;
    getContractFactory(
      name: "MultiTransfer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiTransfer__factory>;
    getContractFactory(
      name: "TestL3P",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestL3P__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Game",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Game>;
    getContractAt(
      name: "GameFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GameFactory>;
    getContractAt(
      name: "IGame",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGame>;
    getContractAt(
      name: "LevelLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LevelLib>;
    getContractAt(
      name: "RewardStructure",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RewardStructure>;
    getContractAt(
      name: "PaymentManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymentManager>;
    getContractAt(
      name: "MultiTransfer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiTransfer>;
    getContractAt(
      name: "TestL3P",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestL3P>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}