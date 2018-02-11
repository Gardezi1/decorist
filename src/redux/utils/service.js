import axios from 'axios';

const user_api_url = 'http://decorist-user-api.herokuapp.com/api/v1/';

/**
 *
 * @param credentials<username, password>
 * @returns {Promise<AxiosResponse<any>>}
 */
export const signIn = (credentials) => {

    return axios({
        method: 'post',
        url:`${user_api_url}accounts/login/`,
        data:{
                username: credentials.email,
                password: credentials.password
        }
    })
        .then(response => response.data)
        .catch(err =>{
            throw err;
        });
}