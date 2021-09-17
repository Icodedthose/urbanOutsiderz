import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar.js';
import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_martians, set_how_many_martians] = useState(1)

  const [martianContract, setMartianContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [martianPrice, setMartianPrice] = useState(0)

  useEffect( async() => { 

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "rinkeby"){alert("Nice try bro. You are on the " + network+ " network. Change network to rinkeby to test the smart contract with pixel art or you won't be able to do anything here for the moment. See you on October 1st!")} });  
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

//

  async function signOut() {
    setSignedIn(false)
  }
  
  async function callContractData(wallet) {
     //let balance = await web3.eth.getBalance(wallet);//
     //setWalletBalance(balance)//
    const martianContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setMartianContract(martianContract)

    const salebool = await martianContract.methods.saleIsActive().call() 
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await martianContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const martianPrice = await martianContract.methods.martianPrice().call() 
    setMartianPrice(martianPrice)
   
  }
  
  async function mintMartian(how_many_martians) {
    if (martianContract) {
 
      const price = Number(martianPrice)  * how_many_martians 

      const gasAmount = await martianContract.methods.mintUrbanMartian(how_many_martians).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      martianContract.methods
            .mintUrbanMartian(how_many_martians)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };


  return (
    <div id="bodyy" className="font-roboto antialiased bg-black">
      <Head>
        <title>UrbanMartians</title>
        <link rel="icon" href="/images/favicon.jpg"/>

        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content="UrbanMartians" key="ogtitle" />
        <meta property="og:description" content="The Martians are an inclusive, androgynous society of carefully crafted 3D NFTs Living in the Ethereum Universe" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://urbanmartians.net/" key="ogurl"/>
        <meta property="og:image" content="https://urbanmartians.net/images/welcome2.png" key="ogimage"/>
        <meta property="og:site_name" content="https://urbanmartians.net/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="urbanmartians.net" key="twdomain" />
        <meta property="twitter:url" content="https://urbanmartians.net/" key="twurl" />
        <meta name="twitter:title" content="UrbanMartians" key="twtitle" />
        <meta name="twitter:description" content="The Martians are an inclusive, androgynous society of carefully crafted, collecticle 3D NFTs Living in the Ethereum Universe" key="twdesc" />
        <meta name="twitter:image" content="https://urbanmartians.net/images/welcome2.png" key="twimage" />
      </Head>


      <div >
          
            <Navbar/>
             
          </div>


  <div className="px-4 py-8" id="minter">
    <div className="max-w-xl items-center bg-gray-300 rounded-lg mx-auto  p-16 text-center">
    <a className=""><img src="../images/mintpage.png"  width="600" alt="" /></a>  <br/>
    <h1 className="text-5xl font-larh mb-2 font-marker">Minting Page</h1>
   <div className=" inline-block md:w-2/3 w-4/5 text-sm">
    <br/>
    <br/>
            {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline  py-2  shadow-lg hover:bg-blue-500 hover:-gray-100">Connect to Metamask</button>
            :
            <button onClick={signOut} className="montserrat items-center inline-block border-2 border-black bg-white border-opacity-100 no-underline  shadow-sm hover:bg-blue-500 hover:text-gray-100 ">Wallet Connected:</button>}
                
          <div className=" border-b-2 py-8">
            
            <div className="flex flex-col items-center">
              <div className="inline-block text-sm text-allign">
              {walletAddress}</div>
                <span className="inline-block text-3xl text-allign bg-gray-300 rounded-lg  my-1 "><br/>TOTAL OUTSIDERZ MINTED:  <span className="text-indigo-500  text-med"><pre/> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 3000<br/><br/></span></span>

                <div id="mint" className="   ">
                  <span className=" text-4xl text-black  bg-grey-lighter rounded rounded-r-none  font-bold">GIMME...<br/><br/></span>
                  
                  <input 
                                      type="number" 
                                      min="1"
                                      max="5"
                                      value={how_many_martians}
                                      onChange={ e => set_how_many_martians(e.target.value) }
                                      name="" 
                                      className=" pl-4 text-4xl  pl-2 inline bg-grey-lighter  rounded text-grey-darkest  font-bold"
                                  />
                  
                  <span className="flex text-4xl text-black items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold"><br/>OUTSIDERZ!<br/></span>
    
                </div><br/>
                {saleStarted ? 
                 <button onClick={() => mintMartian(how_many_martians)} className=" text-2xl border-6 bg-indigo-500  text-white hover:text-black p-2 ">MINT {how_many_martians} Outsiderz for {(martianPrice * how_many_martians) / (10 ** 18)} ETH + GAS</button>        
                  : <button className="  text-xl border-6 bg-indigo-500   text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
            
              } 
          </div>
          </div>      
            </div> 
            </div>
        </div>
     </div>  
    
    )
  }