import Head from 'next/head'
import { useState } from 'react'
import Navbar from './Components/Navbar'

export default function Home() {

  return (
    <div id="bodyy" className="font-roboto antialiased bg-black">
      <Head>
        <title>UrbanOutsiderz</title>
        <link rel="icon" href="/images/logo1.png"/>

        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta property="og:title" content="UrbanOutsiderz" key="ogtitle" />
        <meta property="og:description" content="The Outsiderz are an inclusive, androgynous society of carefully crafted 3D NFTs Living in the Ethereum Universe" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://urbanoutsiderz.net/" key="ogurl"/>
        <meta property="og:image" content="https://urbanoutsiderz.net/images/welcome2.png" key="ogimage"/>
        <meta property="og:site_name" content="https://urbanoutsiderz.net/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="urbanoutsiderz.net" key="twdomain" />
        <meta property="twitter:url" content="https://urbanoutsiderz.net/" key="twurl" />
        <meta name="twitter:title" content="UrbanOutsiderz" key="twtitle" />
        <meta name="twitter:description" content="The Outsiderz are an inclusive, androgynous society of carefully crafted, collecticle 3D NFTs Living in the Ethereum Universe" key="twdesc" />
        <meta name="twitter:image" content="https://urbanoutsiderz.net/images/welcome2.png" key="twimage" />
      </Head>

    <Navbar/>
    
    <div className="px-4" id="home">
    <div className="max-w-xl bg-gray-300 rounded-lg mx-auto my-16 p-16 text-center items-">
      <a href="#ownershipPerks" className=""><img src="../images/example.gif"  width="800" alt="" /></a> <br/>
      <h1 className="text-lg font-larh mb-2 font-marker">Welcome to</h1>
      <h1 className="text-5xl font-larh mb-2 font-marker">Urban Outsiderz</h1>
      <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide"><br/>(They come in peace)</h2>
      <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide">Scroll or Click on section pictures to navigate</h2>
      <strong className="text-xl"><br/>LAUNCH DATE:<br/></strong>  
      <h1 className="text-xl font-larh mb-2"><br/>OCTOBER 1ST 2021 4:02 PM EST</h1><br/>
      <div className=" py-5 mx-auto px-auto">
      <img src="https://gifcdn.com/1i6gp3ichd6opj2d9g.gif" alt="mailtimers.com"></img>

      </div>


      <span className="text-black text-2xl montserrat"><strong><br/>TOTAL SUPPLY:<br/>3000</strong> Outsiderz.<br/><strong><br/>PRICE: 0.025 ETH </strong>each.</span>
   
     
      
    </div>
  </div>

  <div className="px-4" ID="ownershipPerks">
    <div className="max-w-xl bg-gray-300 rounded-lg mx-auto my-16 p-16 text-center">
      <a href="#whatIsUMart" className=""><img src="../images/treasure.png"  width="700" alt="" /></a><br/>
      <h1 className="text-5xl font-larh mb-2 font-marker">Ownership Perks</h1>
      <br/><h1 className="text-lg font-medium mb-2">#1 Urban Pass</h1>
      <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide">Your Outsider will function as your Urban Pass. Simple, own one at the time of a future drop and receive pre-mint access! </h2>
      <br/><h1 className="text-lg font-medium mb-2"><br/>#2 Free Licensing</h1>
      <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide"> Our NFTs come with a "whatever your heart desires" policy. You own the intellectual rights to your Urban Outsider(s)</h2>
      <br/><h1 className="text-lg font-medium mb-2"><br/>#3 Win Some ETH!</h1>
      <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide">Its initial design is based on a lottery system.<br/>(See Spacemap Tab for more info) </h2>
      <br/><h1 className="text-lg font-medium mb-2"><br/>#4 Collect and Trade!</h1>
      <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide">All Urban Outsiderz Adhere to OpenSea Metadata Standards and are collectible assets with their own rarity traits. </h2>
    </div>
</div>
<div className="px-4" id="whatIsUMart">
      <div className="max-w-xl bg-gray-300 rounded-lg mx-auto my-14 p-16 text-center">
       <a href="#roadmap" className=""><img src="../images/question.png"  width="700" alt="" /></a><br/>
       <h1 className="text-5xl font-larh mb-2 font-marker">Urban Outsiderz?</h1>
        <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide"> <br/> For the aesthete and introverted, we introduce the stylish imagery of a society of collectible, 3D-art NFTs. <br/><br/>We invite you to discover their universe through this series of Ethereum Art, expressing the joy and debauchery that is alive within ourselves.<br/><br/> These images speak to our highest potential. They are works that inspire us to dream impossible dreams and to transform our realities by leveraging illusionary technology to create a world in which we can all live freely and truly be who we want and need to be.<br/><br/> This androgynous society lives in a matrix. <br/><br/>The Urban Outsiderz are who we are. Not one being the same, coded that way.</h2>
       <br/><h1 className="text-3xl font-medium mb-2">Outsider Traits:</h1>
       <br/> <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide"> It's not complicated, we have 9 categories to worry about.</h2><br/>
       <h2 className="text-lg font-medium mb-2">#1 Head (6 types)</h2><br/>
       <h2 className="text-lg font-medium mb-2">#2 Shirt (4 types)</h2><br/>
       <h2 className="text-lg font-medium mb-2">#3 Pants (6 types)</h2><br/>
       <h2 className="text-lg font-medium mb-2">#4 Shoes (6 types)</h2><br/>
       <h2 className="text-lg font-medium mb-2">#5 Room (6 types)</h2><br/>
       <h2 className="text-lg font-medium mb-2">#6 Headgear (14 types)</h2><br/>
       <h2 className="text-lg font-medium mb-2">#7 Glasses (8 types)</h2><br/>
       <h2 className="text-lg font-medium mb-2">#8 Tattoo (3 types)</h2><br/>
       <h2 className="text-lg font-medium mb-2">#9 Accessories (3 types)</h2>

       <br/> <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide"> We feel 5,225,472 unique combinations is plenty, needing only 3000 for this introductory drop.</h2><br/>
        </div>
  
</div>
    <br/><br/><br/>
    <div className="px-4" id="roadmap">
        <div className="max-w-xl bg-gray-300 rounded-lg mx-auto my-14 p-16 text-center">
         <a href="#reveal" className=""><img src="../images/roadmap.png"  width="600" alt="" /></a><br/>
         <h1 className="text-5xl font-larh mb-2 font-marker">Spacemap</h1><br/>
         <h1 className="text-2xl font-larh mb-2"> We're Giving away <br/>25 ETH!</h1>
         <h1 className="text-sm font-larh mb-2"><br/> (No, you're not dreaming)</h1><br/>
         <h1 className="text-2xl font-medium mb-2">3 ways:</h1>
        
         <h2 className="font-medium text-xl text-black mb-4 tracking-wide"><br/>1. Reveal 1 of 10 "Rare Outsiderz" and win 1 ETH!</h2>
        
         <br/><h2 className="font-medium text-xl text-black mb-4 tracking-wide">2. Reveal 1 of 1 "Legendary Outsider" and win 5 ETH!!</h2><br/>
        
         <h2 className="font-medium text-xl text-black mb-4 tracking-wide">3. Win one of our Spacemap Giveaways!<br/></h2>

         <h1 className="text-lg font-larh mb-2"><br/>20% SOLD!<br/> </h1>
         <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide">1 ETH to one of our holders!</h2>
         <h1 className="text-lg font-larh mb-2"><br/>40% SOLD!<br/> </h1>
         <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide">2 ETH to one of our holders!</h2>
         <h1 className="text-lg font-larh mb-2"><br/>60% SOLD!<br/> </h1>
         <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide">3 ETH to one of our holders!</h2>
         <h1 className="text-lg font-larh mb-2"><br/>80% SOLD!<br/> </h1>
         <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide">URBAN MARTIANS REVEAL! <br/> "RARE AND "LEGENDARY" CONDITION WILL BE REVEALED 72 HOURS LATER<br/><br/> </h2>
         <h1 className="text-lg font-larh mb-2"><br/>100% SOLD!<br/> </h1>
         <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide">SOLD OUT!<br/> 4 ETH to one of our holders!</h2>

        <h1 className="text-2xl font-larh mb-2"><br/>The fun doesn't just end there...<br/> </h1>
        <h2 className="font-medium text-sm text-indigo-500 mb-4 tracking-wide"><br/>As an added plus, every Urban Outsider comes with its own set of unique traits, making them fully collectible & tradeable assets on OpenSea!<br/> (2.5% royalty paid to creators thereafter) </h2>
        </div>
        </div>

        <br/><br/><div className="px-4" id="reveal">
          <div className="max-w-xl bg-gray-300 rounded-lg mx-auto my-0 p-16 text-center">
            <br/> <a href="#about" className=""><img src="../images/surprise.png"  width="700" alt="" /></a>
            <h1 className="text-5xl font-larh mb-2 font-marker">Reveal Model</h1>
            <h2 className="font-medium text-sm text-indigo-500 mb-4  tracking-wide"><br/>Remember, Urban Outsiderz are introverted and are therefore hidden during the initial sale!<br/><br/> We feel that this makes the revealing an exciting, and thrilling community experience.<br/><br/>All Outsiderz will be comfortable revealing themselves once 80% have been sold (2400)<br/><br/>All you would have to do is press "refresh metadata" on Opensea once the feat is reached!<br/><br/> Reveal of "Rare" and "Legendary" conditions will then be given out 72 hours later.<br/><br/> Feeling lucky...?</h2>
            </div>
            </div>
           
            <br/>
            <br/>

          <div className="px-4" id="about">
          <div className="max-w-xl bg-gray-300 rounded-lg mx-auto my-0 p-16 text-center">
            <a href="#faq" className=""><img src="../images/info.png"  width="700" alt="" /></a><br/>
            <h1 className="text-5xl font-larh mb-2 font-marker">About Us</h1>
            <h2 className="font-medium text-sm text-indigo-500 mb-4  tracking-wide"></h2>
            <br/><h1 className="text-lg font-larh mb-2">Sup? <br/>We are a 2 person team: </h1>
            <br/><h2 className="font-medium text-sm text-indigo-500 mb-4  tracking-wide"> Urban Outsiderz was created by Coded, who has a bachelors in computer science (BCompSc) and is currently working as an independent full stack developer & graphic artist.<br/><br/> Coded is accompagnied by cYr who has extensive experience in funneling information and marketing it from his own self-made online firm.<br/><br/> <br/><br/> Both of us were brought together for our avid love of art, collectibles, and cryptocurrency (anything & everything digital for that matter). We then decided to join forces and start focusing on releasing our own stuff  </h2>
         
            <br/><div className="cards-image-mask"><img src="" width="700px" alt="" className="cards-image" /></div>
            <br/> <h3 className="my-4 text-center text-2xl ">Coded</h3>
            <a href="https://twitter.com/iCoded_" className="text-center text-2xl underline text-black"> (@iCoded)</a>

            <br/><div className="cards-image-mask"><img src="" width="700px" alt="" className="cards-image" /></div>
            <br/><h3 className="my-4 text-center text-2xl  ">cYr</h3>
            <a href="https://twitter.com/DannyCyr11" className="text-center text-2xl underline text-black"> (@DannyCyr11)</a> 

          </div>
          </div>
      <br/>
      <br/>

          <div className="px-4" id="faq">
          <div className="max-w-xl bg-gray-300 rounded-lg mx-auto my-0 p-16 text-center">
            <a href="/" className=""><img src="../images/faq1.png"  width="700" alt="" /></a>
            <h1 className="text-5xl font-larh mb-2 font-marker">faq</h1>
            <h2 className="font-medium text-sm text-indigo-500 mb-4  tracking-wide"></h2>
            <br/><h1 className="text-lg font-larh mb-2">NFwhaT?</h1>
            <br/><h2 className="font-medium text-sm text-indigo-500 mb-4  tracking-wide">An NFT, or “non-fungible token”, is a new way of tracking provenance when uploading media.<br/><br/> Minting means "from that moment on, there is an immutable record on the blockchain of when and who initiated that certain event".<br/><br/>  Compared to traditional media, it uses cryptocurrency as a technology and allows everyone to publicly see each others' collection. Each NFT collection has a programmed smart contract behind it that defines the "law" of that particular object on the blockchain.<br/><br/> This allows for revolutionairy ways of tracking soverenty. The perfect real-world example can be attributed to  owning a piece of Picasso art. Before purchasing it you would naturally want to know if it's real, so you go and get it appraised.<br/><br/> Leaving this process to the blockchain eliminates the need for that since, there is an immutable record of when it was created and by who.</h2>
            <br/><h1 className="text-lg font-larh mb-2"><br/>How do I get started?</h1>
            <br/><h2 className="font-medium text-sm text-indigo-500 mb-4  tracking-wide">You must first download Metamask on your mobile device, or download the chrome extension from the web-store if you are using a computer.<br/><br/> You must then add some Ethereum(ETH) to it through services that allow you to exchange your money to Ethereum(ETH) like Coinbase Pro, Binance or Paypal.<br/><br/> Finally, head to the mint page when it's ready and click the mint button! (Remember to use the Metamask browser and not your phones browser if you are using a mobile device)</h2>
            <br/><h1 className="text-lg font-larh mb-2"><br/>Why get an Urban Outsider?</h1>
            <br/><h2 className="font-medium text-sm text-indigo-500 mb-4  tracking-wide">-You like the Art and the ideology behind the Urban Outsiderz project. <br/><br/>-Win some ETH! Its initial design is based on a lottery system. <br/><br/>-Free license!<br/><br/>-Guaranteed access to our future projects for holders (This wont be our last)</h2>
            <br/><h1 className="text-lg font-larh mb-2"><br/>Future Plans?</h1>
            <br/><h2 className="font-medium text-sm text-indigo-500 mb-4  tracking-wide">We believe in the potential of the project on a grander scale, and what the smart contract aspect of the project brings to the table.<br/><br/> We plan to deliver the combination mechanism and full source code upfront with launch ( On Github), and plan to build a very welcoming and open-source community on Discord. If there's anything you need from a programmer to an artist, feel free to collaborate in the appropriate Discord section.<br/><br/>  If Urban Outsiderz does well, we plan to explore game-like cabilities in the near future. Please note that we are a team of 3 with ONE programmer and are working hard to build for this project.<br/><br/> With that being said, the game-like capabilities will be introduced once more members are added to the team, the reality of it is that a game takes a team to make.<br/><br/> If you have any experience in Solidity, Python, JavaScript, Three.JS, Sound Engineering, Blender,  or any sort of Front-end Libraries/Frameworks like React... please contact us via Discord!</h2>
            <br/><br/><h1 className="text-lg font-larh mb-2">How does licensing work?</h1>
            <br/><h2 className="font-medium text-sm text-indigo-500 mb-4  tracking-wide">Unlike most NFT projects, our NFTs come with a "whatever your heart desires" policy.</h2>
            <br/><h1 className="text-lg font-larh mb-2"><br/>How many outsiderz can I mint at a time?</h1>
            <br/><h1 className="text-sm font-larh mb-2 text-indigo-500">Five.</h1>
            <br/><br/><h1 className="text-lg font-larh mb-2">Friendly Reminder</h1>
            <br/><h2 className="font-medium text-sm text-indigo-500 mb-4  tracking-wide">We are not financial advisors, and this is not financial advice. We'd obviously love it if our project would "moon" but we are not astronauts... for now.<br/><br/> Cryptocurrency contains substancial risk and only risk capital should be considered when investing.</h2>
          </div>
          </div>
</div>
    
)
}