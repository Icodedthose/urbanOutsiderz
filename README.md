Website: https://urbanoutsiderz.xyz
Twitter: https://twitter.com/urbanOutsiderz
Discord: https://discord.gg/ncGWJ4gjYY

### GREETINGS OUTSIDERZ! THIS WAS FORKED FROM BORINGBANANAS.CO AND TWEAKED TO BE MADE OUR OWN, CHECK THEM OUT! --> https://discord.gg/nutXRSKYHb.
# CHANGES:
 
 1. API REPLACED WITH OPENSEA FORCE UPDATE API.
 2. PYTHON GENERATION CODE SIMPLIFIED TO MEET OUR PROJECT NEEDS & COMBINED WITH SOME CHUBBIES GENERATION CODE(https://gist.github.com/bwpunks/3a69e32c58c3e9bb3f4359bc1daa45ba)
 3. UPDATED SMART CONTRACT ABI WITH UPDATED LINKS TO SUPPORT OPENZEPPELIN IMPORTS 
 4. EXTRA FRONT END CODE AND ANIMATION TWEAKS TO MEET OUR PROJECTS NEEDS
 5. COOL ASS OUTSIDERZ

#### SOME FILE NOTES:

A) The website itself is made with Next.js + Tailwind CSS Example in VSCode.

B) The "image_generation" folder contains the code for generating images. 
    The code for image generation was made with python & has a step-by-step included on how to use it.
    To use "martian-generator.ipynb", you must first download its dependencies:
    1. Install [Python](https://www.python.org/downloads/)
       & then, in your terminal of choice:
    2. Install Python Pillow:
        pip install pillow
    3. Install Python display:
        pip install display
    4. Urban Outsiderz are made up of 9 different properties, all with a rartity weight** attached. You can either add or subtract 
        properties depending on your projects needs. I promise if you look at the code long enough and take it step-by-step it will
        start making some sense.
        Opensea Metadata Standard: https://docs.opensea.io/docs/metadata-standards

C)"smartcontract" folder contains the code necessary for the Urban Outsiderz Smart Contract. The code for the contract is written in Solidity.
    Follow the instructions below & on the smart contract to get to where you need to be.

#### TO VIEW PROJECT:

Type `yarn` in your terminal of choice in the main folder(UrbanOutsiderz-master) to install the requirements. `yarn dev` to start running on your computer. Type https://localhost:3000 into your browser of choice. You can then view the project from there. If you have not yet installed yarn: https://yarnpkg.com/getting-started/install#:~:text=its%20latest%20version%3A-,npm%20install%20-g%20yarn,-Move%20into%20your


#### STEPS TO REPRODUCE YOUR OWN: THIS IS ASSUMING YOU ALREADY HAVE EVERY PROPERTY & THEIR VARIATIONS DRAWN OUT ALREADY. WILL PROVIDE MOCK OBJECTS IN A LATER UPLOAD.

1. START WITH SMART CONTRACT: Remix IDE: http://remix.ethereum.org, COPY PASTE, MAKE SURE IT COMPILES. SAVE.

2. GENERATE IMAGES & UPLOAD TO: Pinata Cloud: https://pinata.cloud. COPY IMAGE BUCKET LINK, GENERATE METADATA, POST METADATA TO PINATA AS WELL.
    IMAGE GENERATION SEQUENCE IS AS FOLLOWS: BACKGROUND, BODY, HEAD, EYES,MOUTH, CLOTHES, ACCESSORIES, SHINE

3. TEST SMART CONTRACT:
        A. DOWNLOAD METAMASK BROWSER EXTENSION ON WEB STORE. SWITCH TO RINKEBY TESTNET
        B. REQUEST RINKEBY TESTNET FUNDS(https://www.rinkeby.io/#faucet), FOLLOW INSTRUCTIONS ON SCREEN.
        C. NAVIGATE TO http://remix.ethereum.org and deploy your contract on the RINKEBY TESTNET THROUGH INJECTED WEB OPTION. COPY CONTRACT ABI.
        D. NAVIGATE TO : UrbanOutsiderz-master/pages/mint. Change "main" to "rinkeby" on line 46.
        E. NAVIGATE TO: UrbanOutsiderz-master/config.js. Change Infura address to your TESTNET ADDRESS (if you do not have one, sign up at https://infura.io/) & PASTE CONTRACT ABI
        F. NAVIGATE TO: UrbanOutsiderz-master/pages/api/updateMetadataOpenSea.js enter in the format 'https://api.testnets.opensea.io/asset/<YOUR_CONTRACT_ADDRESS>'; "  on line 4, under "OPENSEA_URI = .
        G. IN YOUR TERMINAL OF CHOICE, NAVIGATE TO: UrbanOutsiderz-master/. type yarn dev, navigate to https://localhost:3000 on your browser. Start test minting.
        H. TO VIEW YOUR PROGRESS: https://testnets.opensea.io/

4. PLAY WITH FRONT END.

5. REPEAT STEPS 3C-F BUT ON MAIN.

5. DOWNLOAD VERCEL AND HOST APP ON VERCEL.: STEPS: DOWNLOAD VERCEL CLI, SIGN UP, DEPLOY.

HAVE FUN/

-Coded.
Twitter: @icoded_



