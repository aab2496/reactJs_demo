import axios from 'axios';
import store from '../store/store';

export const getIdCard = (isFront) => {
    const side = isFront ? "FRONT" : "BACK"
    store.loading.set(true)
    const baseUrl = "https://api-sita.carefirst.com"
    const url = `${baseUrl}/v1/cf-idcards/members/idcards/ID_${side}-171-917218512-230777001`
    const headers = {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJDNXk0Y3pvRFlYYVYza1ZaZUN0QiIsImF1ZCI6InN5c3RlbSIsImp0byI6IkcxRDlVOFhvZ1dMYkVKaUNTU2ZxZ1A3QU9md3MiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6ImVjN2YwNDgzLWI2OTYtNGY2My05NmJhLTc4OTIzYTQ4NGQ1OSIsImlzcyI6ImFwaS1zaXRhLmNhcmVmaXJzdC5jb20iLCJjZmFwaWtleSI6IkM1eTRjem9EWVhhVjNrVlplQ3RCIiwiZXhwIjoxNjQ2MjQ2Nzk3LCJpYXQiOjE2NDYyMzk1OTcsImp0aSI6IjdkZDM0YzdjLWE3NTktNDM2Yi1iZTJmLWY4M2JkZGE5OTNjNyJ9.CE4BDjS261FOqT0aTImZxcoeWaNlxNSbDbZ6GCnHtZOOW5cd_Fo9qqx4kgpoTz3PWtgS-pbtlOzyFhkqEjXTeEx4Vcw0xt1LyPd5hycw8GpjW6s3hrh8iLYpdIoeKvaGgon0Z81JbREz20gyV9M1zExVcPuOWgpS8PpCcbEvKmWkFU6Sg0pUFnUhMv3vYT7wYhkQMnMJX8Zp9EYTVw4CT7oNYshRgnevfG9yMq_zog28jEz5CewByRih4zY644nS9TXONCjgLlEz2PZ422z8yDihTKxlMFM8Z1eKmQAxcfHkAxiiUo6hdY1TE3hRFy5fBrQU3HrRenMDU1WIeoA_rQ`
    }
    let data
    const getData = async () => {
        data = await get(url, null, headers)
        if (isFront) {
            store.frontId.merge({ 'someId': data.memberIdcard })
            store.loading.set(false)
        } else {
            store.backId.merge({ 'someId': data.memberIdcard })
        }
    }
    getData()

    store.loading.set(false)
}

const get = async (url, query, headers) => {
    try {
        const response = await axios.get(url,
            {
                headers
            })
        return response.data
    } catch (error) {
        console.log(error);
    }
}

// const post = async (url, body, headers) => {
//     try {
//         const response = await axios.post(url,
//             {
//                 headers,
//                 data: body
//             })
//         return response.data
//     } catch (error) {
//         console.log(error);
//     }
// }
