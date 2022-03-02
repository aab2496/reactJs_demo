import axios from 'axios';
import store from '../store/store';

export const getIdCard = (isFront) => {
    const side = isFront ? "FRONT" : "BACK"
    store.loading.set(true)
    const baseUrl = "https://api-sita.carefirst.com"
    const url = `${baseUrl}/v1/cf-idcards/members/idcards/ID_${side}-171-917218512-230777001`
    const headers = {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJDNXk0Y3pvRFlYYVYza1ZaZUN0QiIsImF1ZCI6InN5c3RlbSIsImp0byI6InJOcTA1ck16R3FkU3RJVDE5UzdpUkhvNUEyR2UiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6ImVjN2YwNDgzLWI2OTYtNGY2My05NmJhLTc4OTIzYTQ4NGQ1OSIsImlzcyI6ImFwaS1zaXRhLmNhcmVmaXJzdC5jb20iLCJjZmFwaWtleSI6IkM1eTRjem9EWVhhVjNrVlplQ3RCIiwiZXhwIjoxNjQ2MjU3NDk2LCJpYXQiOjE2NDYyNTAyOTYsImp0aSI6IjQ4Y2Y5N2RmLWQwNTEtNDk5Yi1iYTVjLWEzYWFhZTE3NDVkYSJ9.WE1RkZ3RLCyM_bP8r8gxZ7WldHRS8PDW0nJ4LAws7Ym48L6XIYxyf8VoUoV2urn8Kuhb7JeGM7vgfsF2vPXZOitNjGbdu4qNB8j8Q2SVaUEcxCzhGE072uif7JDsSiwd47NMi8hSGT_Y-29eUqKn3oHCuziNrzC6ZBpYL43-02b4wZluVHIcLswVD57PBiALXKoMK22p4enfbZHodx8ocOOobNoDspiOj0kDOc3A2CSciLNiFCoDVsZq0fL8S4j03-qDNWp40LY3j4fosiriYtzycqguMsh-mgFj9mxR0DbmsyukLYnQSFL0h5jp68ig3HptpKL87iGI2IcYIpEm_w`
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
