const hre = require("hardhat");
// const fs = require('fs');

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace")
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed();
  console.log("nftMarketplace deployed to:", nftMarketplace.address);

  // fs.writeFileSync('./config.js', `export const marketplaceAddress = "${nftMarketplace.address}"`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



//   const hre = require("hardhat");

// async function main(){
//   const allemp = await hre.ethers.getContractFactory("allemp")

//   const empadd = await allemp.deploy();

//   await empadd.deployed();
//   console.log("Factory deployed to:",empadd.address);
// }

// //  contract address( Currently in use ) : 0x5F61cAacCEe71d36D7a3d9c1dE73Db9237e04505 
// // 0x5179677c8e3B40791CFf2CB2dB4b154CE2a6C92B
// // 0x7c73D7e12b5eA8809B1261cF7b8513F6E6E5d528
// main()
// .then(()=>
//   process.exit(0))
//   .catch((error)=>{
//     console.log(error);
//     process.exit(1);
//   });