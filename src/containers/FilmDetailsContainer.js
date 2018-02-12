import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    updateFilm
} from '../redux/action_creators/film_action_creators';
import {FilmDetail} from "../components/film/editFilm";

const mapStateToProps = (state, props) => {
    const {
        jwt_token,
    } = state.user;

    const {
        error,
        loading
    } = state.films
    return {
        ...props,
        error,
        loading,
        jwt_token,
    }
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    updateFilmData : (filmId ,filmData, jwt_token)=> {

        dispatch(updateFilm(filmId,filmData, jwt_token));
    }

})


export const FilmDetailContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(FilmDetail)
);