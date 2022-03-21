const { SecretClient } = require("@azure/keyvault-secrets");

// Azure authentication library to access Azure Key Vault
const { DefaultAzureCredential } = require("@azure/identity");

// Azure SDK clients accept the credential as a parameter
const credential = new DefaultAzureCredential();

// Create authenticated client
const client = new SecretClient('https://myalgovault.vault.azure.net/', credential);
// const az_identity  = require ('@azure/identity')
// const az_kv = require ('@azure/keyvault-secrets')


//   const credentials = new az_identity.DefaultAzureCredential()
//   const client = new az_kv.SecretClient('https://myalgovault.vault.azure.net/', credentials)

  const getSecret = async () => {
    try{
    const secret =  await  client.getSecret('AlgoWallet1')
      console.log(secret)
      return secret
    }catch(err){
      console.log(err)
    }
  }

  getSecret()

