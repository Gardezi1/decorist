import React from 'react';
import { Link } from 'react-router';
import './index.css';
import ReactLoading from 'react-loading';

export class FilmDetail extends React.Component{
    constructor( props){
        super(props);
        this.state = {
            film: [],
            edit: false,
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    }


    // TODO: this binding not happending using arrow function. Check why
    handleNameChange (e) {

        let newArray = Object.assign({}, this.state.film);
        newArray.title = e.target.value;
        this.setState({
            film: newArray
        })
    }

    // TODO: this binding not happending using arrow function. Check why
    handleDescriptionChange (e) {

        let newArray = Object.assign({}, this.state.film);
        newArray.description = e.target.value;
        this.setState({
            film: newArray
        })
    }

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
        const{
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

    componentWillMount(){
        this.setState({
            film: this.props.location.state.params
        });
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.loading === false) {
            alert("Updated");
            this.setState({
                edit: false
            })
            this.props.router.push('/home')
        }

        if(nextProps.error !== '' && !nextProps.laoding ){
            alert(nextProps.error);
        }
    }

    render = () =>{

        const {
            film,
            edit
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
                            <h1 className="nomargin-top">{film.title}</h1>
                            <fieldset>

                                <label htmlFor="name">Name</label>
                                <input type="text"
                                    value={film.title}
                                    id="name"
                                    className="form-control"
                                    onChange={this.handleNameChange}
                                    readOnly={ !edit }
                                />


                                <label htmlFor="manufacturer">Description</label>
                                <input type="text"
                                    value={film.description}
                                    id="description"
                                    className="form-control"
                                    onChange={this.handleDescriptionChange}
                                    readOnly={ !edit }
                                />

                                <label htmlFor="manufacturer">Year</label>
                                <input type="text"
                                       value={film.year}
                                       id="description"
                                       className="form-control"
                                       onChange={this.handleYearChange}
                                       readOnly={ !edit }
                                />


                            </fieldset>
                            <br />
                            <div className="btn-group">
                                {!edit && <button className="btn btn-default" type="button" onClick={this.updateEditFlag}>Edit</button>}
                                {edit && <button className="btn btn-primary" type="button" onClick={this.updateFilm}>Update</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}