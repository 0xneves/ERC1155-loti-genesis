const abi = require("../artifacts/contracts/LotiGenesis.sol/LotiGenesis.json");
import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("TestURI", async function () {

    it("Should change URI of given tokenId", async function () {
        const [signer] = await ethers.getSigners();

        const LotiGenesis = new Contract(
            "0xA35820c6174140DFafa2B3f9f46635AaB1e111f4",
            abi.abi,
            signer
        );

        await LotiGenesis.setURI(0, "ipfs://QmTSMy3j6kabUEovScm7BKP8PMdmydaSBXmvsedWr1trGu/");
        await LotiGenesis.setURI(1, "ipfs://QmcftQjrujmAm3yjynDtcWf2qUJppopm5zuJoiJpSMyFpK/");
        await LotiGenesis.setURI(2, "ipfs://Qmd6cka814UjH6HEBgK8RhVcH57BgBYS4eqqEB9RB9yeia/");
    
    });
});