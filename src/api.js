const axios = require('axios') 

const bearer_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL3ZhdWx0LmF6dXJlLm5ldCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2NkZTQ4OWI5LTNiNDMtNDNmOC04YzkxLTBmNjM4MGFjODAwOC8iLCJpYXQiOjE2NDc4MjI5NzYsIm5iZiI6MTY0NzgyMjk3NiwiZXhwIjoxNjQ3ODI2ODc2LCJhaW8iOiJFMlpnWU9pWE84Z21tTlZ3ZkhiVGoyM0pUREpXQUE9PSIsImFwcGlkIjoiNjA1NDY0OWQtNTgxMS00MjhjLWFjMTktOTAxOTNiY2ZhYzYwIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvY2RlNDg5YjktM2I0My00M2Y4LThjOTEtMGY2MzgwYWM4MDA4LyIsIm9pZCI6ImY3ZWU3NTI3LTkwMmQtNDFmMC1iNjM2LTdlMjg2MTIzOTU1OCIsInJoIjoiMC5BWUlBdVlua3pVTTctRU9Na1E5amdLeUFDRG16cU0taWdocEhvOGtQd0w1NlFKT1ZBQUEuIiwic3ViIjoiZjdlZTc1MjctOTAyZC00MWYwLWI2MzYtN2UyODYxMjM5NTU4IiwidGlkIjoiY2RlNDg5YjktM2I0My00M2Y4LThjOTEtMGY2MzgwYWM4MDA4IiwidXRpIjoiSmcxenFfWlZGMEtpODJLQzdYZ3NBQSIsInZlciI6IjEuMCJ9.g6qXOByrrLgn7R-fYq_OKlWyu06bknHF-aUCmI8U_WSSyN3IwbyxMkOtaLzahwc8QyIZMwPQpkTmcaP-Wg1UsKnEOSTykyDGZVQfgdIqdZ98DKGGuTa6ZV13WZihH_-_h5gXfymMcGxKhJq1mKnkglNxDe6zj-G7i7ryMIrESfvVCl7azgCpVqJ1kVA9Oq-u-92_2HXwXaCm0Z7g_cIU_nLNfIIJPEDFDS7d5L60DO53OOe7E9U5jloAGmeWq_V77TxyBVsMOV9lepRyK1gihK_S-qSS9unRYJ-xzzRMP_A_wy3qViha3eH8ppu56ebgdSEjowP1TXyrQXZ9MsZxFg"

  const getSecretFromAPI = async () =>{
    try{
      const response =  await axios.get('https://myalgovault.vault.azure.net/secrets/AlgoWallet1/5cc886befc9341a7a3ba325b1fb29d79?api-version=7.2/', {
        headers: {
          "Authorization": `Bearer ${bearer_token}`
        }
      })
      console.console.log(response.data.value)     
    }catch(err){
      console.log(err)
    }
  }
  getSecretFromAPI()