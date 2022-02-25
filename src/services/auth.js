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

    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJDNXk0Y3pvRFlYYVYza1ZaZUN0QiIsImF1ZCI6InN5c3RlbSIsImp0byI6IlhTVFN0d1ZBaFVlaW5mUHpoM0g5YlRBSHhrUk0iLCJwcm9maWxlVHlwZSI6InN5c3RlbSIsInByb2ZpbGVJZCI6ImVjN2YwNDgzLWI2OTYtNGY2My05NmJhLTc4OTIzYTQ4NGQ1OSIsImlzcyI6ImFwaS1zaXRhLmNhcmVmaXJzdC5jb20iLCJjZmFwaWtleSI6IkM1eTRjem9EWVhhVjNrVlplQ3RCIiwiZXhwIjoxNjQ1NzcwMzE4LCJpYXQiOjE2NDU3NjMxMTgsImp0aSI6ImUwYzYwZDMwLTMxNDgtNGQ4YS05YmY5LTNmMmRkZTFlZjVhMyJ9.hWjk4ARPmaGH6ymn6r4Z5q4-F-TwboglKWEUhHX6EAVA2wp_Sacs2LWELPD0cL7Xp-6uSQ9SHqdiL41RIamhRxD29Ax8qFRr5_nY4tj_DGiFL6cM8JGG4wmrlYPmZgL6QsKNEHOH0Yw7Y7qAqqYyFTEJd40mMCZ4E8nLeLGFZ1KQiLRTdBkwqdR6ZYKRl4lw7kv_NrynUwY9hkTkpHcb4bhmxgoL9XH44Fh62Vq32TaoXBHFFeSnq9TfjmsnLgTYWpHF6SNpwYY77qiVg7MMyuYJCqIcC_xrF9b5tO6htjW18JGQizda57IjEBjbTn2C5N9ZmMHAwDCg4FXPN0ZEMA"
}


