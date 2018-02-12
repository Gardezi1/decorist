import React from 'react';
import {Link} from 'react-router';
import './index.css';
import ReactStars from 'react-stars'

export class FilmDetail extends React.Component {
    updateEditFlag = () => {
        this.setState({
            edit: true
        });
    }
    handleYearChange = (e) => {
        let newArray = Object.assign({}, this.state.film);
        newArray.year = e.target.value;
        this.setState({
            film: newArray
        })
    }
    updateFilm = (e) => {
        const {
            film
        } = this.state;
        const {
            jwt_token
        } = this.props;
        this.props.updateFilmData(
            film.id,
            {
                title: film.title,
                description: film.description,
                year: film.year
            },
            jwt_token
        )
    }
    ratingChanged = (filmId, ratingChanged) => {
        const {
            jwt_token
        } = this.props;
        this.setState({
            rateValue: ratingChanged
        })
        this.props.updateFilmRating(filmId, ratingChanged, jwt_token)

    }
    render = () => {

        const {
            film,
            edit,
            rateLoader,
            rateValue
        } = this.state;

        return (
            <section className="container margin-top-lg">
                <div className="row">
                    <div className="col-xs-12 col-sm-3">
                        <div className="thumbnail">
                            <img src={film.img_url} width="200px" height="200px"/>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-9">
                        <div className="col-xs-12 col-sm-9">
                            <h1 className="nomargin-top">{film.title}
                                <span>
                                    <ReactStars
                                        count={10}
                                        onChange={(rating) => {
                                            return this.ratingChanged(film.id, rating)
                                        }}
                                        size={24}
                                        color2={'#ffd700'}
                                        half={false}
                                        edit={!rateLoader}
                                        value={rateValue}
                                    />
                                </span>
                            </h1>
                            <fieldset>

                                <label htmlFor="name">Name</label>
                                <input type="text"
                                       value={film.title}
                                       id="name"
                                       className="form-control"
                                       onChange={this.handleNameChange}
                                       readOnly={!edit}
                                />


                                <label htmlFor="manufacturer">Description</label>
                                <input type="text"
                                       value={film.description === null ? '' : film.description}
                                       id="description"
                                       className="form-control"
                                       onChange={this.handleDescriptionChange}
                                       readOnly={!edit}
                                />

                                <label htmlFor="manufacturer">Year</label>
                                <input type="text"
                                       value={film.year}
                                       id="description"
                                       className="form-control"
                                       onChange={this.handleYearChange}
                                       readOnly={!edit}
                                />


                            </fieldset>
                            <br/>
                            <div className="btn-group">
                                {!edit && <button className="btn btn-default" type="button"
                                                  onClick={this.updateEditFlag}>Edit</button>}
                                {edit && <button className="btn btn-primary" type="button"
                                                 onClick={this.updateFilm}>Update</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            film: [],
            edit: false,
            rateLoader: false,
            rateValue: 0
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    }

    // TODO: this binding not happending using arrow function. Check why
    handleNameChange(e) {

        let newArray = Object.assign({}, this.state.film);
        newArray.title = e.target.value;
        this.setState({
            film: newArray
        })
    }

    // TODO: this binding not happending using arrow function. Check why
    handleDescriptionChange(e) {

        let newArray = Object.assign({}, this.state.film);
        newArray.description = e.target.value;
        this.setState({
            film: newArray
        })
    }

    componentWillMount() {
        this.setState({
            film: this.props.location.state.params
        });
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.loading === false && nextProps.action === 'update_resolved') {
            alert("Updated");
            this.setState({
                edit: false
            })
            this.props.router.push('/home')
        }

        if (nextProps.error !== '' && !nextProps.laoding) {
            alert(nextProps.error);
        }

        if (nextProps.loading === true && nextProps.action === 'addrating') {
            this.setState({
                rateLoader: true
            })
        } else if (nextProps.loading === false && nextProps.action === 'addrating_resolved') {
            alert("Response has been added");
            this.setState({
                rateLoader: false
            })
        } else if (nextProps.loading === false && nextProps.action === 'addrating_rejected') {
            alert("Something went wrong. Please rate again");
            this.setState({
                rateLoader: false
            })
        }
    }
}