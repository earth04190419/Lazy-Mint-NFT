// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./lib/verifyIPFS.sol";

contract Test {
    function storeData(bytes32 _data) external returns (string memory ipfsHash) {
        bytes memory encoded = verifyIPFS.toBase58(abi.encodePacked(_data));
        ipfsHash = string(abi.encodePacked(encoded)); // **** How do I add the "Qm" to this ? (maybe I can make another chainlnik call recursively which will allow me to also get the hash function dynamically)
    }
}