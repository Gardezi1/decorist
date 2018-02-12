import axios from 'axios';

const user_api_url = 'http://decorist-user-api.herokuapp.com/api/v1/';
const film_api_url = 'https://decorist-films-api.herokuapp.com/api/v1/';

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

export const getAllFilmss = (jwt_token) => {

    return axios({
        method: 'get',
        url:`${film_api_url}films`,
        headers: {
            'Authorization': `JWT ${jwt_token.jwt_token}`
        }
    })
    .then(response => response.data)
    .catch(err =>{
        throw err;
    });
}

export const updateFilmDetails = (filmId, filmData, jwt_token) => {
    return axios({
        method: 'put',
        url:`${film_api_url}films/${filmId}`,
        headers: {
            'Authorization': `JWT ${jwt_token}`
        },
        data: {
            ...filmData
        }
    })
    .then(response => response.data)
    .catch(err =>{
        throw err;
    });
}