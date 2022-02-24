import axios from 'axios';
import store from '../store/store';

export const getIdCard = (isFront) => {
    const side = isFront ? "FRONT" : "BACK"
    store.loading.set(true)
    axios.get(`https://api-sita.carefirst.com/v1/cf-idcards/members/idcards/ID_${side}-171-917218512-230777001`,
        {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJDNXk0Y3pvRFlYYVYza1ZaZUN0QiIsImF1ZCI6InN5c3RlbSIsImp0byI6IjZyamhzSEFBbFc3aWx3SmZJdE1xc2NUQ0NnNzQiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6ImVjN2YwNDgzLWI2OTYtNGY2My05NmJhLTc4OTIzYTQ4NGQ1OSIsImlzcyI6ImFwaS1zaXRhLmNhcmVmaXJzdC5jb20iLCJjZmFwaWtleSI6IkM1eTRjem9EWVhhVjNrVlplQ3RCIiwiZXhwIjoxNjQ1NzQwNjIxLCJpYXQiOjE2NDU3MzM0MjEsImp0aSI6ImYyOTNhZmI4LWFkOGYtNDM3Zi05YWVjLWNjM2JlMDc2MjI5YiJ9.TIth8wM9o-SQvqqhGZswmwgB8xLUTYRa4arQvUlfayaw0ApARuSElIXnEba7XLHwJ-TIjaKYKs2pfA8pF8Y96pE1WzMx2PFd_UMm4UR25kT4_g29MVnBjx2A4Xzot7X49Hsu5sa4vwIizLTB8J0AILSTlWseZanAiwnAqhuClUppoBhqp4o2M8SWOcAkKm6TMyJat6iwrGOWr1gUZk61-TCZw7ix9ziYBMqLHxUk6ujPo4IEe-66s528y5DvMUhbKidH5Fs1ntgo-7me16FZ3KkiiMbZEhAkQz__RaTqQYn2Z5amoZxRBIYvn4G4FkHKBn_BD1xNBgpoZ3kosxcP4Q'
            }
        })
        .then(function (response) {
            if (isFront) {
                store.frontId.merge({ 'someId': response.data.memberIdcard })
                store.loading.set(false)
            } else {
                store.backId.merge({ 'someId': response.data.memberIdcard })
                store.loading.set(false)
            }
        })
        .catch(function (error) {
            console.log(error);
            store.loading.set(false)
        });
}