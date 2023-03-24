

// ****************** Create Sell Offer ******************
// *******************************************************

async function createSellOffer() {
    const useAcc = document.getElementById("useAddress").value;
    const useSeed = document.getElementById("useSeed").value;
    let nftId = document.getElementById("burnTkn").value;
    let nftprice = document.getElementById("enterPrice").value;
    const standby_wallet = xrpl.Wallet.fromSeed(useSeed)
    
    const client = new xrpl.Client(net)
    results = 'Connecting to ' + net + '...'
    console.log(results)
    await client.connect()
    
    console.log('\nConnected. Creating sell offer...')
    
    //------------------------------------- Prepare Expiration Date
    // var expirationDate = null
    // if (standbyExpirationField.value !="") {
    //   var days = document.getElementById('standbyExpirationField').value
    //   let d = new Date()
    //   d.setDate(d.getDate() + parseInt(days))
    //   var expirationDate = xrpl.isoTimeToRippleTime(d)
    // }
    // Prepare transaction -------------------------------------------------------
    let transactionBlob = {
      "TransactionType": "NFTokenCreateOffer",
      "Account": standby_wallet.classicAddress,
      "NFTokenID": nftId,
      "Amount": nftprice,
      "Flags": 1,
    }
    // if (expirationDate != null) {
    //   transactionBlob.Expiration = expirationDate
    // }
    // if(standbyDestinationField.value !== '') {
    //   transactionBlob.Destination = standbyDestinationField.value
    // }
  
  // Submit transaction --------------------------------------------------------
  console.log("Transaction Blob: ", transactionBlob)
    const tx = await client.submitAndWait(transactionBlob,{wallet: standby_wallet})
    console.log("printing tx: ", tx)
    results =tx.result.meta.TransactionResult;
    console.log(results)

    results += '\n\n***Sell Offers***\n'
  
    let nftSellOffers
    try {
      nftSellOffers = await client.request({
        method: "nft_sell_offers",
        nft_id: standbyTokenIdField.value})
    } catch (err) {
      nftSellOffers = "No sell offers."
    }
    results += JSON.stringify(nftSellOffers,null,2)
    results += '\n\n***Buy Offers***\n'
    let nftBuyOffers
    try {
      nftBuyOffers = await client.request({
        method: "nft_buy_offers",
        nft_id: standbyTokenIdField.value })
    } catch (err) {
      results += 'No buy offers.'
    }
    results += JSON.stringify(nftBuyOffers,null,2)
  
  // Check transaction results -------------------------------------------------
    results += '\n\nTransaction result:\n' + 
      JSON.stringify(tx.result.meta.TransactionResult, null, 2)
    results += '\n\nBalance changes:\n' + 
      JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2)
    let newResult = 
      (await client.getXrpBalance(operational_wallet.address))
      console.log(newResult)
    newResult = 
      (await client.getXrpBalance(standby_wallet.address))
      console.log(newResult)
    console.log(results) 
  
    client.disconnect()
  }// End of createSellOffer()
  

  // ****************** Accept Sell Offer ******************
// *******************************************************

async function acceptSellOffer() {
    const useAcc = document.getElementById("useAddress").value;
    const useSeed = document.getElementById("useSeed").value;
    // let nftId = document.getElementById("burnTkn").value;
    // let nftprice = document.getElementById("enterPrice").value;
    const standby_wallet = xrpl.Wallet.fromSeed(useSeed)

    const client = new xrpl.Client(net)
    results = 'Connecting to ' + net + '...'
    console.log(results)

    await client.connect()
    console.log('\nConnected. Accepting sell offer...\n')
  
    // Prepare transaction -------------------------------------------------------
    const transactionBlob = {
      "TransactionType": "NFTokenAcceptOffer",
      "Account": useAcc,
      "NFTokenSellOffer": 1
    }
    console.log("transaction blob: ", transactionBlob)
    // Submit transaction --------------------------------------------------------
    const tx = await client.submitAndWait(transactionBlob,{wallet: standby_wallet}) 
    results =tx.result.meta.TransactionResult;
    console.log(results)
    const nfts = await client.request({
      method: "account_nfts",
      account: standby_wallet.classicAddress })
  
    // Check transaction results -------------------------------------------------
  
     results = (await client.getXrpBalance(standby_wallet.address))
    console.log("Balance: ", results)
    results += 'Transaction result:\n'
    results +=  JSON.stringify(tx.result.meta.TransactionResult, null, 2)
    results += '\nBalance changes:'
    results +=  JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2)
    results += JSON.stringify(nfts,null,2)
    console.log(results)
  
    client.disconnect()
  }// End of acceptSellOffer()


//   **************Transfer*********
async function transferNFT() {
    const useAcc = document.getElementById("useAddress").value;
    const useSeed = document.getElementById("useSeed").value;
    const destAcc = document.getElementById("dAddress").value;
    let burnTknID = document.getElementById("burnTkn").value;
    const standby_wallet = xrpl.Wallet.fromSeed(useSeed)
    const client = new xrpl.Client('wss://s.altnet.rippletest.net:51233')
    console.log("connecting...")
    await client.connect()
    console.log("connected")
    // Construct transaction object
    const transactionBlob = {
      TransactionType: 'NFTokenTransfer',
      Account: useAcc, //standby_wallet.account,
      Destination: destAcc,
      TokenID: burnTknID
    }
    const tx = await client.submitAndWait(transactionBlob,{wallet: standby_wallet})
    console.log("Transaction status: ", tx.result.meta.TransactionResult)
    // Sign the transaction
    // const signedTx = xrpl.sign(transaction) //, standby_wallet.privateKey)
    
    // Submit the signed transaction to the XRP Ledger network
    // const tx = await client.submitAndWait(signedTx)
    
    console.log(result)
  }
  

  
  
  
  
  