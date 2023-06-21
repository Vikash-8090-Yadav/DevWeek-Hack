import { useState } from 'react';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";


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


import { marketplaceAddress } from '../config';
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json';

export default function CreateItem() {
  const [Uploading, setuploading] = useState(false);
	const [uploaded, setuploaded] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' });
  const router = useRouter();

  async function onChange(e) {
    e.preventDefault();
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
		setuploading(true);
    const { name, description, price } = formInput;


    if( !name){
      toast.warn("Asset Name filed is empty");
    }
    else if(description == ""){
      toast.warn("Asset description filed is empty");
    }
    else if(price== ""){
      toast.warn("Price filed is empty");
    }
    else if(uploaded == false){
      toast.warn("Files upload required");
    }
    else if(uploaded == false){
      toast.warn("Files upload required");
    }


    if (!name || !description || !price || !fileUrl) return;
    /* first, upload to IPFS */
    
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });

    try {
      const added = await client.add(data);
      const url =  `https://sal-dapp.infura-ipfs.io/ipfs/${added.path}`;
      /* after file is uploaded to IPFS, return the URL to use it in the transaction */
      
      return url;
    } catch (error) {
      toast.warn("Error uploading image");
      console.log('Error uploading file: ', error);
    }
  
    setuploading(false);
		setuploaded(true);
		 
		toast.success("Files uploaded sucessfully");
  }
  
  async function listNFTForSale(e) {
    e.preventDefault();


    




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
    toast.success("Files uploaded sucessfully");
    router.replace('/marketplace');
  }

  return (
    <div className="flex pr-42 justify-center items-center h-screen">
      <div className="ml-22 add-conatiner">
				<h2 className="bg-cyan-600 bg-gradient-to-r from-indigo-500 rounded-3xl font-extrabold  text-white">
					Add my Items 
				</h2>
				<div className="form-container ">
					<form>
						<div className="inpiut-name ">
            <input
              placeholder="Asset Name"
              className="border rounded p-4 mb-4 w-full"
              onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
            />
							
              <textarea
              placeholder="Asset Description"
              className="border rounded p-4  mb-4 w-full"
              onChange={(e) => updateFormInput({ ...formInput, description: e.target.value })}
            />
							
						</div>
						<div className="inpiut-name">
            <input
              placeholder="Asset Price in Eth"
              className="border rounded p-4 mb-4 w-full"
              onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}
            />
						</div>
						<div className="ml-8">
							<label className="block text-sm font-medium text-gray-700 name1">
								Select Image
							</label>
							<div className="mt-1 flex items-center">
								<span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
									<svg
										className="h-full w-full text-gray-300"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
                    
										<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
									</svg>
								</span>
                <input
              type="file"
              name="Asset"
              className="ml-3 form-control blockw-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-non "
              accept="image/*"
              onChange={onChange}
            />
                        
								{" "}
							</div>
						</div>
						
             {Uploading == true ? (
								<button className="button">
									<TailSpin color="#fff" height={20} />
								</button>
							) : uploaded == false ? (
								<button
								className="rounded-xl bg-gradient-to-r from-indigo-500 button"
                onClick={listNFTForSale}
							>
								SELL MY ITEM 
							</button>
							) : (
								<button
									style={{ cursor: "no-drop" }}
									className="button"
								>
									Files uploaded sucessfully
								</button>
							)}
						{/* <div className="inpiut-name">
							<button
								className="rounded-xl bg-gradient-to-r from-indigo-500 button"
                onClick={listNFTForSale}
							>
								ADD EMPLOYEE
							</button>
						</div> */}
					</form>
				</div>
			</div>
    </div>
  );
}
