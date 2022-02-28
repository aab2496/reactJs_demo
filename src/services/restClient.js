import axios from 'axios';
import store from '../store/store';

export const getIdCard = (isFront) => {
    const side = isFront ? "FRONT" : "BACK"
    store.loading.set(true)
    const baseUrl = "https://api-sita.carefirst.com"
    const url = `${baseUrl}/v1/cf-idcards/members/idcards/ID_${side}-171-917218512-230777001`
    const headers = {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJDNXk0Y3pvRFlYYVYza1ZaZUN0QiIsImF1ZCI6InN5c3RlbSIsImp0byI6ImdaaVdBRDE5OGg4eWdSUUkwWHU0SHFHU1JEWEwiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6ImVjN2YwNDgzLWI2OTYtNGY2My05NmJhLTc4OTIzYTQ4NGQ1OSIsImlzcyI6ImFwaS1zaXRhLmNhcmVmaXJzdC5jb20iLCJjZmFwaWtleSI6IkM1eTRjem9EWVhhVjNrVlplQ3RCIiwiZXhwIjoxNjQ2MDY5MjUyLCJpYXQiOjE2NDYwNjIwNTIsImp0aSI6IjE3M2E1ODcxLTIyZmUtNDliNC04YzUzLTFiMzlmNjliZDlmOSJ9.qpQxH1RxKTRwNvFdWzx6V1JIliHxZfvNwr7AdbP0XlHr_bQ4zAqCtbTmNOb_rnbsFXhVYbZ-qxpsqVm82srwWqi3VxIVGvNK-MVAkKzjZF7JSRl-2cCToxoKqERyekwpNYu2JL7G8fz7gZpadFn4VyrkOx7FwIgKRtlVGjOYETva4Pd9htOHSFBqDcun_ka7_90c-UZj0-RbbffQ3MSdOgbiqeNgs1bXifgmiudBI474tZZrlwIgA6sjmYsoko3HdYD1XkA93I5pZfvf3dT7d0iLFyibAGoEozQziXBVGKzgibKh6FHFbbYulUWxpteR8QLFYWZmDkagT8aiXV_Xdg`
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
