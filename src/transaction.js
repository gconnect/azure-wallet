import axios from 'axios'

import { SecretClient } from "@azure/keyvault-secrets";
// Azure authentication library to access Azure Key Vault
const { InteractiveBrowserCredential } = require("@azure/identity");

// Azure SDK clients accept the credential as a parameter
// const credential = new InteractiveBrowserCredential(
//   {
//     tenantId: "cde489b9-3b43-43f8-8c91-0f6380ac8008",
//     clientId: "6054649d-5811-428c-ac19-90193bcfac60"
//   }
// );
// // Create authenticated client
//  credential.authenticate("https://vault.azure.net/.default");

// const client = new SecretClient('https://myalgovault.vault.azure.net/', credential)
// const client = new ServiceBusClient('https://myalgovault.vault.azure.net/', credential)

export default function PaymentTransaction () {

  // const credentials = new az_identity.DefaultAzureCredential()
  // const client = new az_kv.SecretClient('https://myalgovault.vault.azure.net/', credential)

  const bearer_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL3ZhdWx0LmF6dXJlLm5ldCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2NkZTQ4OWI5LTNiNDMtNDNmOC04YzkxLTBmNjM4MGFjODAwOC8iLCJpYXQiOjE2NDc4MDUzMTYsIm5iZiI6MTY0NzgwNTMxNiwiZXhwIjoxNjQ3ODA5MjE2LCJhaW8iOiJFMlpnWURqT0h5SEtidkxuYlUzcXZVY3lPUyszQUFBPSIsImFwcGlkIjoiNjA1NDY0OWQtNTgxMS00MjhjLWFjMTktOTAxOTNiY2ZhYzYwIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvY2RlNDg5YjktM2I0My00M2Y4LThjOTEtMGY2MzgwYWM4MDA4LyIsIm9pZCI6ImY3ZWU3NTI3LTkwMmQtNDFmMC1iNjM2LTdlMjg2MTIzOTU1OCIsInJoIjoiMC5BWUlBdVlua3pVTTctRU9Na1E5amdLeUFDRG16cU0taWdocEhvOGtQd0w1NlFKT1ZBQUEuIiwic3ViIjoiZjdlZTc1MjctOTAyZC00MWYwLWI2MzYtN2UyODYxMjM5NTU4IiwidGlkIjoiY2RlNDg5YjktM2I0My00M2Y4LThjOTEtMGY2MzgwYWM4MDA4IiwidXRpIjoiWWV0SlZ2LWNMMEdOUl9Cc090WXBBQSIsInZlciI6IjEuMCJ9.YCHVw79Dr7XjavuszORJLqNfC2fShM6-2SGbQi4UqolOwjbP2YlnycqGBKij8kD3H1eEdLoHpgMNjJ4uqzMqWwVBYPYZSMzJNw7_KvhKabH-MOEesNKDd2ekF_q3bYjJJGDkVWZfvCWENytzH4a9XAqDoJFdT38kbRxBhY84lbPayBYi0IyLCUVt5byjC9yibh9994COoDdljJ_tUP6C8aHXZBVVpYJ7v0dHd-RiOizOgeGts4Y6vW_PUu5xuxwzUSv4Me_bOUV3MWHGGvzYx3qyx0bfY1r70-LVqvappPBqg2Ckhod7HRP441AJze-IuIlzQ6U-1smLS0_R-k2wBA"
  
  const getSecret = async () => {
    try{
      const credential = new InteractiveBrowserCredential(
        {
          tenantId: "cde489b9-3b43-43f8-8c91-0f6380ac8008",
          clientId: "6054649d-5811-428c-ac19-90193bcfac60"
        }
      );
      // Create authenticated client
      await credential.authenticate("https://vault.azure.net/.default");
      
      const client = new SecretClient('https://myalgovault.vault.azure.net/', credential)
      const secret =  await  client.getSecret('AlgoWallet1')
      console.log(secret.value)
      // value = secret.value
      // return value
    }catch(err){
      console.log(err)
    }
  }

  const getSecretFromAPI = async () =>{
    try{
      const response =  await axios.get('https://myalgovault.vault.azure.net/secrets/AlgoWallet1/5cc886befc9341a7a3ba325b1fb29d79?api-version=7.2/', {
        headers: {
          "Authorization": `Bearer ${bearer_token}`,
          "Content-Type": "application/json"
        }
      })
      console.console.log(response)     
    }catch(err){
      console.log(err)
    }
  }

  // getSecretFromAPI()
  getSecret()
  return (
      <div>
        <h1>Hello World</h1>
      </div>
  )
}



