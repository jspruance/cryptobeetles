
const { ethers } = require("hardhat")

async function main() {
  const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles")
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBEET")

  try {
    await cryptoBeetles.deployed()
    console.log(`Success! Contract deployed to ${cryptoBeetles.address}`)
  } catch(err) {
    console.log(`deployment error: ${err.message}`)
  }
  
  // CID from Pinata for json metadata file
  try {
    const newItemId = await cryptoBeetles.mint("https://ipfs.io/ipfs/QmVqNB7W23HsfzNktYq2ZxUSq6SNR93Cew4r29FTGAEoQT")
    console.log(`NFT succesfully minted! :::: ${newItemId}`)
  } catch(err) {
    console.log(`minting error: ${err.message}`)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });
