import { useState } from 'react';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import Web3Modal from 'web3modal';
import Image from 'next/image';
import { create as IPFSHTTPClient } from 'ipfs-http-client';

const projectId = '2EFZSrxXvWgXDpOsDrr4cQosKcl';
const ProjectSecret = 'b84c6cb2eec9c4536a0b6424ca709f9d';

const auth =
  'Basic ' + Buffer.from(projectId + ':' + ProjectSecret).toString('base64');

const client = IPFSHTTPClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

const style = {
  wrapper: `
    relative
    w-1/2
    flex flex-col
    pb-4
    bg-white
    rounded-lg
    border-2 border-blue-500
    shadow-lg
  `,
  form: `
    p-4
    flex flex-col
    gap-4
    items-center
    bg-opacity-70
    backdrop-filter backdrop-blur-lg
  `,
  button: `
    font-bold
    mt-4
    bg-pink-500
    text-white
    rounded
    py-2 px-6
    shadow-lg
    transition-all
    duration-300
    hover:bg-pink-600
    hover:shadow-xl
  `,
};

import { marketplaceAddress } from '../config';
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';

export default function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' });
  const router = useRouter();

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://sal-dapp.infura-ipfs.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  async function uploadToIPFS() {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) return;
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://sal-dapp.infura-ipfs.io/ipfs/${added.path}`;
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      return url;
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  async function listNFTForSale() {
    const url = await uploadToIPFS();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();

    /* next, create the item */
    const price = ethers.utils.parseUnits(formInput.price, 'ether');
    let contract = new ethers.Contract(
      '0xc1e6ddf8eED76c0D6CFC901B38CCBB7F3501c66a',
      NFTMarketplace.abi,
      signer
    );
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();
    let transaction = await contract.createToken(url, price, { value: listingPrice });
    await transaction.wait();
    alert('Successfully created NFT');
    router.replace('/marketplace');
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={style.wrapper}>
        <div className={style.form}>
          <div className="flex flex-col items-center">
            <input
              placeholder="Asset Name"
              className="border rounded p-4 mb-4 w-full"
              onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
            />
            <textarea
              placeholder="Asset Description"
              className="border rounded p-4 mb-4 w-full"
              onChange={(e) => updateFormInput({ ...formInput, description: e.target.value })}
            />
            <input
              placeholder="Asset Price in Eth"
              className="border rounded p-4 mb-4 w-full"
              onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}
            />
            <input
              type="file"
              name="Asset"
              className="my-4"
              accept="image/*"
              onChange={onChange}
            />
            {fileUrl && <Image src={fileUrl} height="45" width="55" />}
            <button
              onClick={listNFTForSale}
              className={style.button}
            >
              Create NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
