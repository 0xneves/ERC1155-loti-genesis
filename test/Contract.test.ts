import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Some Test", async function () {
  let Iguassu: Contract;
  let owner: SignerWithAddress;

  before(async () => {
    const [signer] = await ethers.getSigners();
    owner = signer;

    const Factory = await ethers.getContractFactory("TopBusinessIguassu", signer);

    const Contract = await Factory.deploy();

    Iguassu = await Contract.deployed();
  });

  it("Should mint then burn", async function () {

    await Iguassu.mint(owner.address, 1, 1);

    await Iguassu.burn(owner.address, 1, 1);

    await Iguassu.mintBatch(owner.address, [1,2,3], [1,2,3]);

    await Iguassu.burnBatch(owner.address, [1,2,3], [1,2,3]);
  
  });

  it("Should setURI", async function () {

    await Iguassu.setURI("https://example.com/");
  
  });

});
