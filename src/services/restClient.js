import axios from 'axios';
import store from '../store/store';

export const getIdCard = (isFront) => {
    const side = isFront ? "FRONT" : "BACK"
    store.loading.set(true)
    const baseUrl = "https://api-sita.carefirst.com"
    const url = `${baseUrl}/v1/cf-idcards/members/idcards/ID_${side}-171-917218512-230777001`
    const headers = {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJDNXk0Y3pvRFlYYVYza1ZaZUN0QiIsImF1ZCI6InN5c3RlbSIsImp0byI6IkdPVVBmQzRJQkNjSEFPRHN1cFpHc0tabkFidXEiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6ImVjN2YwNDgzLWI2OTYtNGY2My05NmJhLTc4OTIzYTQ4NGQ1OSIsImlzcyI6ImFwaS1zaXRhLmNhcmVmaXJzdC5jb20iLCJjZmFwaWtleSI6IkM1eTRjem9EWVhhVjNrVlplQ3RCIiwiZXhwIjoxNjQ2MDY1MTg5LCJpYXQiOjE2NDYwNTc5ODksImp0aSI6ImEyZGZkMzM3LTAxODYtNDc2NC1iYmRkLTg0NDA1ZmVjNTE5YyJ9.Ql5EKrrUJUU4CAy51SHwxWLcKb83AcKEGlwdB8WbqpnebFoAmFMVPGzxc_XSHQep0Z6C8jFdRxhmYw-CjFcdRw7GE9hhuLFoNg-p5uPOLKj_JMIk2i5FS0_FJs0MJCqrwdU127_wQaKkHdAnb52PKIXUdHAC1p_w__eIdyaNcBRZwkud-UhHb30D9jCdKZEI9uS1iXh0_ccNghDxQ11ZBCYpbGFaeEPdKI62VisGTRxZ4WIbg3T462RWIja3kdQmjFNpKWZbtYaBXhY_B9poNnnPEMaQirTZgnialXbi0ICpnuzeOVIgXVX4alF3FzkdifKMwHqKsjLBIP7c5lMuZQ`
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
