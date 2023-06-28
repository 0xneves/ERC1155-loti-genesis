import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Some Test", async function () {
  let LotiGenesis: Contract;
  let owner: SignerWithAddress;

  before(async () => {
    const [signer] = await ethers.getSigners();
    owner = signer;

    const Factory = await ethers.getContractFactory("LotiGenesis", signer);

    const Contract = await Factory.deploy();

    LotiGenesis = await Contract.deployed();
  });

  it("Should mint then burn", async function () {

    console.log(LotiGenesis.address)

    await LotiGenesis.mint(owner.address, 0, 643);
    await LotiGenesis.mint(owner.address, 1, 300);
    await LotiGenesis.mint(owner.address, 2, 1000);
    
    
  });
  
  it("Should setURI", async function () {
    
    await LotiGenesis.setURI(0, "ipfs://QmTSMy3j6kabUEovScm7BKP8PMdmydaSBXmvsedWr1trGu/");
    await LotiGenesis.setURI(1, "ipfs://QmcftQjrujmAm3yjynDtcWf2qUJppopm5zuJoiJpSMyFpK/");
    await LotiGenesis.setURI(2, "ipfs://Qmd6cka814UjH6HEBgK8RhVcH57BgBYS4eqqEB9RB9yeia/");
  
  });

});
