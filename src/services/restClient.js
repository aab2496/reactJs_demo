import axios from 'axios';

export const getIdCard = () => {
    axios({
        method: 'get',
        url: 'https://api-pit.carefirst.com/v1/cf-idcards/members/idcards/ID_FRONT-171-917218512-230777001',
        headers: { 
            'Access-Control-Allow-Origin': "*",
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtRHZpZUkzQWlNMDV6Y29hbnlJbCIsImF1ZCI6InN5c3RlbSIsImp0byI6IjlBY3AxN2VRNXFsSlFpMm0yQjh6dFFrbXlSUVEiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6Ii0xIiwiaXNzIjoiYXBpLXBpdC5jYXJlZmlyc3QuY29tIiwiY2ZhcGlrZXkiOiJtRHZpZUkzQWlNMDV6Y29hbnlJbCIsImV4cCI6MTY0NDk1NTk2MiwiaWF0IjoxNjQ0OTQ4NzYyLCJqdGkiOiJlZDI2MzI4MS00ZTZkLTQ2OWYtOTg2OS02NjFlOGZjMGNjMTcifQ.W-djkLBIsiM0L17P3_SZn-GtBtji6ChPI3B5Qh1OkqoSGBIwtBzs0_Da7g_rPtjNJ2bp9XfDGuKqYlS1MtGDcxESjbSin8bb7EAuW4WiLSxbapZUw4q3VO3vmamA7K_KA5BgVweSGhYwbXcK94Qnd93Urq_dF6O3mqWn8mcLNLjVa-lY7TbQJEgbeFaFPkNhGMx_wJMzz3JmuTXZJsR_YzRs3qS_Ei2tsYds7cgSMtoEIJh7RrBAD82RTmNdmokRhCt6Z4j99yvrxxkOTe20K-HnQcvO_GZBTZ6T9djqKsLRN2R9mO-U1admZidoPPErcr8GtSHEVzWbBmfc8eqbmA'
        }
      })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}