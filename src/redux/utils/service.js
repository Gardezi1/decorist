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

/**
 *
 * @param credentials <username, password1, password2>
 * @returns {Promise<AxiosResponse<any>>}
 */
export const register = (credentials) => {

    return axios({
        method: 'post',
        url:`${user_api_url}accounts/signup/`,
        data:{
            email: credentials.email,
            password1: credentials.password1,
            password2: credentials.password2
        }
    })
        .then(response => response.data)
        .catch(err =>{
            throw err;
    });
}

/**
 *
 * @param jwt_token
 * @returns {Promise<AxiosResponse<any>>}
 */
export const userProfile = (jwt_token) => {

    return axios({
        method: 'get',
        url:`${user_api_url}accounts/profile/`,
        headers: {
            'Authorization': `JWT ${jwt_token}`
        }
    })
    .then(response => response.data)
    .catch(err =>{
        throw err;
    });
}