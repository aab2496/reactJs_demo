import axios from 'axios';
import store from '../store/store';

export const getIdCard = (isFront) => {
    const side = isFront ? "FRONT" : "BACK"
    store.loading.set(true)
    const baseUrl = "https://api-sita.carefirst.com"
    const url = `${baseUrl}/v1/cf-idcards/members/idcards/ID_${side}-171-917218512-230777001`
    const headers = {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJDNXk0Y3pvRFlYYVYza1ZaZUN0QiIsImF1ZCI6InN5c3RlbSIsImp0byI6IjVQMFFFemRERnlJVmRDZVZJT0Eya2VLNkpzMWEiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6ImVjN2YwNDgzLWI2OTYtNGY2My05NmJhLTc4OTIzYTQ4NGQ1OSIsImlzcyI6ImFwaS1zaXRhLmNhcmVmaXJzdC5jb20iLCJjZmFwaWtleSI6IkM1eTRjem9EWVhhVjNrVlplQ3RCIiwiZXhwIjoxNjQ2MDMxMDE0LCJpYXQiOjE2NDYwMjM4MTQsImp0aSI6ImMzMDE2YjgwLTI5ODktNGUxMi1hOWMwLWQ5Mjg5NzU0MDAzOSJ9.Wr8oosPx_SKIPOasL425FtDgMJQzpUABvyYzylU1pMYYexHmRpfoIHgdmVHcZbKczJsyfinuq-omKaNUumkSRgQrcT41nEerUyiUXerNB2t48Yn7ACuyicveH_jOw53CYsMfylJ0U7iKp7b76Z_sT5rsPJTwfv-rEZOYgCugRvbsWMg3NP-O20WdCWPzVnJyphG5tbNRR1J56uq-Ar0E4jkXz6g4Scx9ubtp2Y3pyRwrKCRx4TFWhNEFbJxa7cf8mjFxCL97zBsT9uV6iReEyFNPPRg5Qhb8caxQVx-p6X9K_Jf2h3PUI-KJRs25YEb0wk6Y_BQKkyW6syf8FWS3Rg`
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
