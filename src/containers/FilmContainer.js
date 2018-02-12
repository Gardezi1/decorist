import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    deleteFilm,
    getAllFilms,
    addFilm
} from '../redux/action_creators/film_action_creators';
import {Film} from "../components/film";

const mapStateToProps = (state, props) => {
    const {
        jwt_token,
    } = state.user;

    const {
        films,
        error,
        loading
    } = state.films
    return {
        error,
        loading,
        jwt_token,
        films
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllFilms : (jwt_token, limit) => {
        dispatch(getAllFilms(jwt_token, limit));
    },
    handleDelete: (id, jwt_token) => {
        dispatch(deleteFilm(id, jwt_token))
    },
    addFilm: (data, jwt_token) => {
      dispatch(addFilm(data, jwt_token));
    }
})


export const FilmContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Film)
);