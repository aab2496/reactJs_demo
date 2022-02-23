import axios from 'axios';

export const getIdCard = () => {

    axios
      .get('https://api-deva.carefirst.com/v1/cf-idcards/members/idcards/ID_FRONT-171-917218512-230777001',
       {
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ6V3ZuZzNIWTVnUlV5WkplMzhFMSIsImF1ZCI6InN5c3RlbSIsImp0byI6IlRGbGFQYUZkZWJ1YnVHQUFEWlVQeG95NWpTMnMiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6Ii0xIiwiaXNzIjoiYXBpLWRldmEuY2FyZWZpcnN0LmNvbSIsImNmYXBpa2V5Ijoield2bmczSFk1Z1JVeVpKZTM4RTEiLCJleHAiOjE2NDUyMDU1MjUsImlhdCI6MTY0NTE5ODMyNSwianRpIjoiZDRhMmM4NDQtMmQ4NS00OTlhLTgyZjAtNzc5YjU1YmI0MDAwIn0.SHIksem5lWl1zNT7h2uP0OTyquewY7-0ure9VcXybXR-x3L73KYhC8omANuue0jGm4geGpS05frRu6q1aXVj3a_DPfFj82mU3G0HVyg1OHnCbJJ-owDcIuqrLEts1dA75jHf9o4Q_4bSvhyaPfVOjKQhRNsW8mqBDv41Itvq2sfxD5zuCsnFhgiKJ7BIQ2mcxPGHkJJS16qfHpKtxFT3iHUm4apbNDS_db4ZOOOrEChNKapFb_lemwQoBFGFo6zmxYk5dlGFUjGf3zv6E7y5AHucN7WBv7vKp1qbVXmYijNRkAY7Vgiwc4mlGbBn2plVgCwvxONwViLudQTcX3iFmw'
          }
       })

    // axios({
    //     method: 'get',
    //     url: 'https://api-deva.carefirst.com/v1/cf-idcards/members/idcards/ID_FRONT-171-917218512-230777001',
    //     headers: { 
    //         'Access-Control-Allow-Origin': "*",
    //         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ6V3ZuZzNIWTVnUlV5WkplMzhFMSIsImF1ZCI6InN5c3RlbSIsImp0byI6IlRGbGFQYUZkZWJ1YnVHQUFEWlVQeG95NWpTMnMiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6Ii0xIiwiaXNzIjoiYXBpLWRldmEuY2FyZWZpcnN0LmNvbSIsImNmYXBpa2V5Ijoield2bmczSFk1Z1JVeVpKZTM4RTEiLCJleHAiOjE2NDUyMDU1MjUsImlhdCI6MTY0NTE5ODMyNSwianRpIjoiZDRhMmM4NDQtMmQ4NS00OTlhLTgyZjAtNzc5YjU1YmI0MDAwIn0.SHIksem5lWl1zNT7h2uP0OTyquewY7-0ure9VcXybXR-x3L73KYhC8omANuue0jGm4geGpS05frRu6q1aXVj3a_DPfFj82mU3G0HVyg1OHnCbJJ-owDcIuqrLEts1dA75jHf9o4Q_4bSvhyaPfVOjKQhRNsW8mqBDv41Itvq2sfxD5zuCsnFhgiKJ7BIQ2mcxPGHkJJS16qfHpKtxFT3iHUm4apbNDS_db4ZOOOrEChNKapFb_lemwQoBFGFo6zmxYk5dlGFUjGf3zv6E7y5AHucN7WBv7vKp1qbVXmYijNRkAY7Vgiwc4mlGbBn2plVgCwvxONwViLudQTcX3iFmw'
    //     }
    //   })
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}