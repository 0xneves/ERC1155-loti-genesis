// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";

contract LotiGenesis is ERC1155URIStorage, Ownable {
    // Token name
    string private _name = "Loti Genesis";

    // Token symbol
    string private _symbol = "LOTI";

    constructor() ERC1155("") {}

    function name() public view virtual returns (string memory) {
        return _name;
    }

    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    function setApprovalForAll(
        address operator,
        bool approved
    ) public virtual override {
        if (operator != owner()) {
            revert("Loti Genesis: Can only approve contract owner.");
        }

        super.setApprovalForAll(operator, approved);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory
    ) public virtual override {
        if (to != owner()) {
            revert("Loti Genesis: Can only transfer to contract owner.");
        }

        super.safeTransferFrom(from, to, id, amount, "");
    }

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory
    ) public virtual override {
        if (to != owner()) {
            revert("Loti Genesis: Can only transfer to contract owner.");
        }

        super.safeBatchTransferFrom(from, to, ids, amounts, "");
    }

    function setURI(uint256 tokenId, string memory newURI) public onlyOwner {
        _setURI(tokenId, newURI);
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount
    ) public onlyOwner {
        _mint(account, id, amount, "");
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, "");
    }
}
