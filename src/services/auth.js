import axios from 'axios';


const config = {
  method: 'get',
  url: 'https://api-deva.carefirst.com/v1/oauth/token',
  headers: { 
    'grant_type': 'client_credentials', 
    'Authorization': 'Basic eld2bmczSFk1Z1JVeVpKZTM4RTE6eENKbGFPc3IxUDZmSmVmRDI1ZzQ=', 
    'Content-Type': 'application/x-www-form-urlencoded'
  },

};


export const login = () => {
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJtRHZpZUkzQWlNMDV6Y29hbnlJbCIsImF1ZCI6InN5c3RlbSIsImp0byI6ImJpaTVnbkxCcXMwQVFya0g4aUFHVGZyZU82aGUiLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6Ii0xIiwiaXNzIjoiYXBpLWRldmEuY2FyZWZpcnN0LmNvbSIsImNmYXBpa2V5IjoibUR2aWVJM0FpTTA1emNvYW55SWwiLCJleHAiOjE2NDQ5NTU3NjIsImlhdCI6MTY0NDk0ODU2MiwianRpIjoiN2QwMDViZWYtZjkyNS00Yjg3LTgzYWQtZWVjNThmZDc5OGUyIn0.W4GkfMrUyikQAhs3SH_uzXwuAwLZDgGfiIqeSk7A_qdFONzUcO_D96xvLFD4YbZuWjgIfU8Ptk1Exv-Mybc68MxuY0wjnKNgYwgS1FJi31uDRreAzwBDfhKBtaVqZ39kbR90tmSZ5qftrw4dqDf85Ewf8fI0iFxYbAbfbKYiosYUW5s3JXPY8R_cBt12C5AnxBevC2nx0wQEKwBkRWY1dBHGt55DdDqLSsF2C1PZTmVBRIfrCTGxEhYQ9c8glVawfqDVd11WY4lvnYV5nPSxTxzZdpTA54Ljyaa95kOAY7Q5zqDovjsMVLWq6CxtBFs9urfRYOhdFjbj_31-u8xRUA"
}


