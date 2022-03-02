import axios from 'axios';
import store from '../store/store';

export const getIdCard = (isFront) => {
    const side = isFront ? "FRONT" : "BACK"
    store.loading.set(true)
    const baseUrl = "https://api-sita.carefirst.com"
    const url = `${baseUrl}/v1/cf-idcards/members/idcards/ID_${side}-171-917218512-230777001`
    const headers = {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtRHZpZUkzQWlNMDV6Y29hbnlJbCIsImF1ZCI6Im5leHVzIiwicHJvZmlsZSI6eyJwcm9kdWN0Q2F0ZWdvcmllcyI6WyJNRUQiLCJERU4iLCJEUkciXX0sImFwcElkIjoiNjc2MGExZDgtNDFiMy00NDA0LWFhZDQtMzcxZTU0YTFlNDcxIiwiaXNzIjoiYXBpLXBpdC5jYXJlZmlyc3QuY29tIiwiZXhwIjoxNjQ2MjQ2MTg5LCJpYXQiOjE2NDYyMzg5ODksImp0aSI6ImJkOWU3ODIzLTI0MGEtNGRkNi1hZDE0LTRmN2U2YzMyNjczMSJ9.WNSgNdjZ8cXncyjHZQbx992JxKs5D0bTME5x-4RpQft4uXcsFryW9EbDT2v6DWh3jlVyBk9NxG3G9GeSMyWmJBEUHz3JpcF0CcLb88wuGRjgowmGGjC8XrfsCD1UNRhdvbrWidw29NhMdm-82B6QNzWCx8bRiWK_QXdo8IfWnjSiVCxnwdoEn28BAIxZZJo-xh38iGOv62_AL0HDepHeWwuyYQpJTsrZuLpLdeVoEwvPqKP7ogPWYvD0P3GIp5mn8sLiscaVbdM0sYGlPrVrY6jjDSqmthenwWW_I7bUTF17REuqP2ciZjnjMin7MKjWrrFOsF4RF4wsZ5axDWsVWw`
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
