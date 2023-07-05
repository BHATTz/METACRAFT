/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_NAME, _UID, _BRANCH, _PROFESSION) {
    const NFT = {
        "NAME": _NAME,
        "UID": _UID,
        "BRANCH": _BRANCH,
        "PROFESSION": _PROFESSION
    }
    NFTs.push(NFT);
    console.log("Minted: " + _NAME);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t\t\t" + (i + 1));    //\n: new line, \t: tab;
        console.log("NAME: \t\t\t" + NFTs[i].NAME);
        console.log("UID: \t\t\t\t" + NFTs[i].UID);
        console.log("BRANCH: \t\t" + NFTs[i].BRANCH);
        console.log("PROFESSION: " + NFTs[i].PROFESSION);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Raj", "5647", "MCA", "STUDENT");
mintNFT("koty", "2448", "MA", "INTERN");
mintNFT("Max", "5648", "MSC", "STUDENT");
mintNFT("TINA", "1238", "MBA", "INTERN");
mintNFT("Max", "5648", "MSC", "STUDENT");
mintNFT("TINA", "1238", "MBA", "INTERN");
listNFTs();
getTotalSupply();
