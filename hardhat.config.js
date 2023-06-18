
require ('@nomiclabs/hardhat-waffle');

task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "polygon",
  networks:{
    hardhat:{},
    polygon :{
      url : "https://polygon-mumbai.infura.io/v3/95688893704a4d5bac083296c3547383",
      accounts: ["8de377277b10cfdb63f8030bf13a092dfba5e4b8b96bff9c5f95386e96115e5a"]
    }
  }
};