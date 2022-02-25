import axios from 'axios';
import store from '../store/store';

export const getIdCard = (isFront) => {
    const side = isFront ? "FRONT" : "BACK"
    store.loading.set(true)
    const baseUrl = "https://api-sita.carefirst.com"
    const url = `${baseUrl}/v1/cf-idcards/members/idcards/ID_${side}-171-917218512-230777001`
    const headers = {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJDNXk0Y3pvRFlYYVYza1ZaZUN0QiIsImF1ZCI6InN5c3RlbSIsImp0byI6IktIT2c5ck1LcE50Z3Y0ekYyaVIySGtWdERxeTUiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6ImVjN2YwNDgzLWI2OTYtNGY2My05NmJhLTc4OTIzYTQ4NGQ1OSIsImlzcyI6ImFwaS1zaXRhLmNhcmVmaXJzdC5jb20iLCJjZmFwaWtleSI6IkM1eTRjem9EWVhhVjNrVlplQ3RCIiwiZXhwIjoxNjQ1ODI3NDMwLCJpYXQiOjE2NDU4MjAyMzAsImp0aSI6ImNjNjdjZmQxLTZmNGYtNDljZi1iOGYxLTgyMjQwYjBkYTYxZiJ9.hYnuYVjydedWFUZOqpxgo5gu6SZHLhuCHgsOEGYeV4siZpWu7YP0WcaU4zC8bjBMSiRHzjh9x3P0FZ8CnTberQaqoUMGDqUEeg1D74yAP9xEPYO9Cix5CdddXfZEfz-vKbtPFksvtC9UK8nJVvzcuWQ81lhLHlGfgfd3l-5ua608yrdgmflt9fL6vVYUtJxd5C904QHCh5fDKluQnyH5wDDuglue7eJShkdUKZFfkSgg5EgguKnzpAn_1veJGBIinjaFWusqW6WvkWtc5GL-s7k1ctjihhHlt14Sed2MlYhKpSloIbib-w9ZDlg7kBlhjW_Z_q3ZQVTrDK-YSF7zpA`
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
