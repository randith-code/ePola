

 export const sendBuyerInfo = async(buyerInfo) => {

    const URL = 'http://localhost:8080/ePolaAPI/buyer/auth/register'
    const requestOptions = {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buyerInfo),
    }

    const response = await fetch(URL, requestOptions)
    const data = await response.json()
    console.log(data) 
 }

 export const sendSellerInfo = async(sellerInfo) =>{
    const URL = 'http://localhost:8080/ePolaAPI/seller/auth/register'
    const requestOptions = {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sellerInfo),
    }
    console.log(requestOptions);
    const response = await fetch(URL, requestOptions)
    const data = await response.json()
    console.log(data)
 }

 export const login = async(loginInfo) =>{


    const URL = 'http://localhost:8080/ePolaAPI/signIn'
    const requestOptions = {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo),
    }

    const response = await fetch(URL, requestOptions)
    const data = response.text()
    return data
 }