import React from 'react'
import Image from "next/image";
// import Coffee from "../public/Images/Coffee.png"
import { Button } from "antd";
import { Modal, Input, Tooltip } from 'antd'
import { ethers } from 'ethers';
import Web3Modal from 'web3modal'
import { ConfigProvider } from 'antd';
import { useState } from 'react'
const Support = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [polygonAmount, setPolygonAmount] = useState();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateAmount = (e) => {
    setPolygonAmount(e.target.value);
  };

  const connectToMetamask = async () => {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    if (address && signer && provider) {
      requestPolygonTransaction(signer, address, provider)
    } else {
      console.log("ERROR couldn't connect to metamask")
    }
  }

  const requestPolygonTransaction = async (signer, address, provider) => {
    alert(address);
    // check validity of addresses
    if (
      !ethers.utils.isAddress(address) 
    ) {
      console.log('ERROR invalid wallet addresses provided')
    await  Modal.error({
    title: 'Oops transaction failed!',
    content: 'Dont forget to check the Console for better underswtanding',
  
  });
      return
    }
  

    const transactionParameters = {
      from: address ,
      
      
      to: "0xeE467Cae5d6461FB1783c15bD9Da43d63048ffb0", 
      data: '0x',
      value: ethers.utils.parseEther(polygonAmount),
      gasLimit: ethers.utils.hexlify(210000),
      gasPrice: ethers.utils.hexlify(parseInt(await provider.getGasPrice())),
    }

    try {
  const transaction = await signer.sendTransaction(transactionParameters);
  setIsModalOpen(false);
  await transaction.wait();
  await Modal.success({
    title: 'Tx Success!',
     content: 'Thank You So Much !!',
  });
} catch (e) {
  console.log('failed!')
 await  Modal.error({
    title: 'Oops transaction failed!',
    content: 'please double check the amount  and try again ,Dont forget to check the Console for better underswtanding',
    
  
  });
}
  }
  return (
    <>
      <div name = "contact" className = "support w-full p-4">
        <div className = "flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
            <div className = "pb-8">
                <p className = "text-4xl font-bold text-white text-center flex items-center justify-center">Buy me a
                 
                </p>
                <p className = "py-6 text-center text-white text-xl font-semibold">Submit the form below to buy me a coffee.</p>
            </div>

            <div className = "flex justify-center items-center">
                <form className = "flex flex-col w-full md:w-1/2">
                    <input type = "text" name = "name" placeholder = "Enter your name" className = "p-2 bg-transparent border-2 border-dark rounded-md focus:outline-none text-dark" />
                    <input type = "email" name = "email" placeholder = "Enter your email" className = "my-6 p-2 bg-transparent border-2 border-white rounded-md focus:outline-none text-white" />
                    <textarea placeholder = "Enter your Message" name = "message" rows = "8" className = "p-2 bg-transparent border-2 border-white rounded-md focus:outline-none text-white" />
                    <Button  className = "px-6 py-6 bg-gradient-to-b from-cyan-500 to-blue-500 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-150 text-white  font-semibold" type="primary"   onClick={() => setIsModalOpen(true)}>Buy me a Coffee</Button>
                    <Modal
                  title="Salaray"
                  visible={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={[
                  <button className = "px-6 py-3 bg-gradient-to-b from-cyan-500 to-blue-500 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-150 text-white font-semibold" key="submit" type="primary" onClick={connectToMetamask}>
                  Submit
                  </button>,
                  ]}
                  >
                  
                  
                <p>Enter amount in polygon MATIC youd like to send</p>
                  <Input
                  prefix=""
                  value={polygonAmount}
                  onChange={updateAmount}
                  placeholder="50"
                  suffix="matic"
                />
            </Modal>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Support