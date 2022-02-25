import axios from 'axios';
import store from '../store/store';

export const getIdCard = (isFront) => {
    const side = isFront ? "FRONT" : "BACK"
    store.loading.set(true)
    axios.get(`https://api-sita.carefirst.com/v1/cf-idcards/members/idcards/ID_${side}-171-917218512-230777001`,
        {
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJDNXk0Y3pvRFlYYVYza1ZaZUN0QiIsImF1ZCI6InN5c3RlbSIsImp0byI6IkpIN3JzemNUc3E0STJSeHFmd01DZ0V1M2I5R3kiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6ImVjN2YwNDgzLWI2OTYtNGY2My05NmJhLTc4OTIzYTQ4NGQ1OSIsImlzcyI6ImFwaS1zaXRhLmNhcmVmaXJzdC5jb20iLCJjZmFwaWtleSI6IkM1eTRjem9EWVhhVjNrVlplQ3RCIiwiZXhwIjoxNjQ1ODI2ODk5LCJpYXQiOjE2NDU4MTk2OTksImp0aSI6ImYwYWZkNjcyLTE4NzYtNDlmOC05OWZmLTUwOGVmYWZhMGI2MCJ9.p9qgD_ixKumlmpvHziA2svbkT3EUlSa8to1EOPCFE2ESGAXvb0MSSsvEYzeoDVYnr1dUmeuihL46GgQUfWObvRD_CburPyE8GyMmcVizUagtbZ5W9MoMO58sQ-Rr5d1uOHxU1rCX_uiycbXo0RLMezbwwJzvBooACiqGXy4C4yuIagEi1NuCUQpdfXMJBcENbI0A7UbREoEGFb5-xsVMrZIlVknBoY6kohdah-WFMKx3XnismeO59J23J92RyAULvKbsSnaIoZMlPUCgP2k-7vMtlZCxDDCAbj3DyFtZ1tuOHJIyy0JT9zvBZ7f7VXfpi5fheNXOglwt2XFeQnZtgQ'
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
