const ethers = require('ethers');

console.log("fuck")

// Create a new private key and show on console log as a string
function main() {
    const privateKey = ethers.utils.randomBytes(32);
    const privateKeyHex = ethers.utils.hexlify(privateKey);

	console.log(privateKeyHex);
}

main();
