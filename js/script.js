
// ***************variables***************
const net = "wss://s.altnet.rippletest.net:51233";
// let useSeed;
// let nftId;
// let useAcc;

// ***************Create Account***************

async function createAccount() {

    const client = new xrpl.Client(net);
    results = "Connecting to " + net + "....";
  
    // This uses the default faucet for Testnet/Devnet
    let faucetHost = null;
    let amount = '900';
    console.log(results)
    await client.connect();
  
    results = "\nConnected, funding wallet."+ amount;
    console.log(results)
  
    // -------------Create and fund a test account wallet
    const my_wallet = (await client.fundWallet(null, {amount, faucetHost })).wallet;
  
    console.log("\nGot a wallet.")
    const useAcc = my_wallet.address;
    console.log("Current Account: ", useAcc)
    document.getElementById("createdAddress").value = useAcc
  
    // -------------Get the current balance.
    const my_balance = await client.getXrpBalance(my_wallet.address);
  
        console.log("address: ", my_wallet.address)
        console.log("public key: ", my_wallet.publicKey)
        console.log("private Key: ", my_wallet.privateKey)
        
      let bal = await client.getXrpBalance(
        my_wallet.address
      );
      console.log("balance: ", bal)
      console.log("Seed: ",my_wallet.seed);
      const useSeed = my_wallet.seed;
      document.getElementById("createdSeed").value = useSeed
      results = "\nStandby account created.";
      console.log(results)
    
      
    }
    // --------------- Capture the seeds for both accounts for ease of reload.
    //  client.disconnect();
   // End of createAccount()

   // ******************** Use Account *************************
    async function useAccount() {
        const useAcc = document.getElementById("useAddress").value;
        const useSeed = document.getElementById("useSeed").value;
        
        const client = new xrpl.Client(net);
        await client.connect();
        console.log(client)
        const my_wallet = xrpl.Wallet.fromSeed(useSeed);
        console.log("Using Account: ", useAcc)
        console.log("Using Seed: ", useSeed)
        console.log("Using Wallet: ", my_wallet)
        if(useAcc == my_wallet.address) {
            console.log("Happy")
        }
    }

   // ******************** Send XRP *************************

async function sendXRP() {
    const useAcc = document.getElementById("useAddress").value;
    const useSeed = document.getElementById("useSeed").value;
    const destAcc = document.getElementById("dAddress").value;
    const sendAmt = document.getElementById("sendAmount").value;
    
    console.log("Using Account: ", useAcc) 
    console.log("Using Seed: ", useSeed) 
    console.log("Destination Account: ", destAcc) 
    console.log("Sending Amount: ", sendAmt) 
    console.log("Connecting to the selected ledger.")
    console.log("Connecting to " + net + "....")
    const client = new xrpl.Client(net);
    await client.connect();
    console.log(client)
  
    console.log("\nConnected. Sending XRP...")
    console.log("\nAccount Seed: ", useSeed)
    const standby_wallet = xrpl.Wallet.fromSeed(useSeed);
    console.log("Standby_Wallet: ",standby_wallet)

    if(useAcc == standby_wallet.address) {
    
    console.log("\nstandby_wallet.address: = ", standby_wallet.address)
    // ------------------------------------------------------- Prepare transaction
    
    const prepared = await client.autofill({
      TransactionType: "Payment",
      Account: standby_wallet.address,
      Amount: xrpl.xrpToDrops(sendAmt),
    //   Destination: "rHRQkfD3VJ1WjY1BhqtVYjHmZZ87sqEdbk" //This is a random address
      Destination: destAcc
    });
    console.log("Prepared", prepared)
    // ------------------------------------------------ Sign prepared instructions
    const signed = standby_wallet.sign(prepared);
    console.log("Signed: ", signed)
    // -------------------------------------------------------- Submit signed blob
    const tx = await client.submitAndWait(signed.tx_blob);
  
    results =
      "<br/>Balance changes: " +
      JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2);
      console.log(results)
  
    let bal = await client.getXrpBalance(
      standby_wallet.address
    );
    let bal2 = await client.getXrpBalance(
      destAcc
    );
    console.log("Balance1: ", bal)
    console.log("Balance2: ", bal2)
    } else {
        console.log("Account Does not match Seed")
    }
    
    client.disconnect();
  } // End of sendXRP()


  // ********************** Mint Token *********************

async function mintToken() {
    const useAcc = document.getElementById("useAddress").value;
    const useSeed = document.getElementById("useSeed").value;
    let nftUrl = document.getElementById("nftUrl").value;
    let tokenMintfees = document.getElementById("tokenMintfees").value;
    results = "Connecting to " + net + "....";
    console.log(results)
    console.log("Using Seed: ", useSeed)
    
    const standby_wallet = xrpl.Wallet.fromSeed(useSeed);
    if(useAcc == standby_wallet.address) {
    const client = new xrpl.Client(net);
    await client.connect();
    console.log("Standby_wallet: ", standby_wallet.account)
    console.log("client: ", client)
    results = "1.<br/>Connected. Minting NFToken.";
    console.log(results)
  
    // Note that you must convert the token URL to a hexadecimal
    // value for this transaction.
    // ------------------------------------------------------------------------
    const transactionBlob = {
      TransactionType: "NFTokenMint",
      Account: standby_wallet.classicAddress,
      URI: xrpl.convertStringToHex(nftUrl),
      Flags: 8,
      TransferFee: parseInt(tokenMintfees),
      NFTokenTaxon: 0 //Required, but if you have no use for it, set to zero.
    };
  
    console.log("transactionBlob: ", transactionBlob)
    // ----------------------------------------------------- Submit signed blob
    const tx = await client.submitAndWait(transactionBlob, {
      wallet: standby_wallet
    });
    const nfts = await client.request({
      method: "account_nfts",
      account: standby_wallet.classicAddress,
       
    });
    
    
    console.log("Now printing Report result")
    
    // ---------------- Report results
    results = tx.result.meta.TransactionResult;
    console.log("Transaction result: " , results)
    // console.log(JSON.parse(results))
    results = JSON.stringify(nfts, null, 2);
    results=JSON.parse(results)
    console.log("nfts: ", results)
    console.log("Token ID ", results["result"]["account_nfts"][0]["NFTokenID"])
    
    
    let bal = await client.getXrpBalance(
      standby_wallet.address
    );
    
    console.log("Balance: ", bal)
    } else {
        console.log("Account and Seed does not match")
    }
    client.disconnect();
  } //End of mintToken()
  
  
  // ******************* Get Tokens ************************

async function getTokens() {
    const useAcc = document.getElementById("useAddress").value;
    const useSeed = document.getElementById("useSeed").value;
    const standby_wallet = xrpl.Wallet.fromSeed(useSeed);
    const client = new xrpl.Client(net);
    results = "Connecting to " + net + "...";
    console.log(results)
    
    await client.connect();
    console.log("<br/>Connected. Getting NFTokens...")
    if(useAcc == standby_wallet.address) {
    const nfts = await client.request({
      method: "account_nfts",
      account: standby_wallet.classicAddress
    });
    results = JSON.stringify(nfts, null, 2);
    console.log("<br/>NFTs:<br/> ", results)
    results=JSON.parse(results)
    console.log("URI: ", results["result"]["account_nfts"][0]["URI"])
    } else {
        console.log("Account and seed does not match")
    }
    client.disconnect();
  } //End of getTokens()


  // ********************* Burn Token **********************

async function burnToken() {
    const useAcc = document.getElementById("useAddress").value;
    const useSeed = document.getElementById("useSeed").value;
    let burnTknID = document.getElementById("burnTkn").value;
    const standby_wallet = xrpl.Wallet.fromSeed(useSeed);
    const client = new xrpl.Client(net);
    results = "Connecting to " + net + "...";
    console.log(results)
    
    await client.connect();
    results = "<br/>Connected. Burning NFToken...";
    console.log(results)
    if(useAcc == standby_wallet.address) {
    // ----------------- Prepare transaction --------------------
    const transactionBlob = {
      TransactionType: "NFTokenBurn",
      Account: standby_wallet.classicAddress,
      NFTokenID: burnTknID
    };
  
    console.log("transactionBlob: ", transactionBlob)
    //---------------- Submit transaction and wait for the results
    const tx = await client.submitAndWait(transactionBlob, {
      wallet: standby_wallet
    });
    console.log("submiting and waiting for the  transaction: <br/>", tx)

    const nfts = await client.request({
      method: "account_nfts",
      account: standby_wallet.classicAddress
    });
    results = "<br/>Transaction result: " + tx.result.meta.TransactionResult;
    results =
      "<br/>Balance changes: " +
      JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2);
      console.log(results)
      
    let bal = await client.getXrpBalance(
      standby_wallet.address
    );
    console.log("Bal: ", bal)
    results = JSON.stringify(nfts, null, 2);
    console.log("<br/>NFTs: <br/>", results)
    } else {
        console.log("Account and Seed does not match")
    }
    client.disconnect();
  } // End of burnToken()