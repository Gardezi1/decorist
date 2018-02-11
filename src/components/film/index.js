import React from 'react';
import { Link } from 'react-router';
import {Form, FormGroup, Col, Button, ControlLabel, FormControl, Navbar, NavItem, Nav} from 'react-bootstrap';
import './index.css';
import ReactLoading from 'react-loading';
import {FilmDetail} from "./editFilm";
export class Film extends React.Component{
    constructor( props){
        super(props);
        this.state = {
            films:[],
            film: [],
            showSearchModal: false,
            loading: false

        }
    }

    handleClose = () => {
        this.setState({
            showSearchModal: false
        })
    }

    openFilmSearchModal = () => {
        this.setState({
            showSearchModal: true
        })
    }

    filterFilms = () => {
    }

    componentWillMount(){

        this.props.getAllFilms(this.props.jwt_token);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.error !== '')
            alert(nextProps.error);
        if(nextProps.loading){
            this.setState({
                loading: true,
                films: nextProps.films
            });
        }else{
            this.setState({
                loading: false,
                films: nextProps.films
            });
        }

    }

    renderFilmsList = () => {
        const {
            films
        } = this.state;

        let listItems = films.map((data, idx) => {
            return (
                <div key={idx} className="col-sm-6 col-md-3">
                    <div className="panel panel-default" key={idx}>
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <Link
                                    to={{
                                        pathname: "filmDetail",
                                        state: {
                                            params: data
                                        }
                                    }}
                                >
                                    {data.title}
                                </Link>
                            </h4>
                        </div>
                        <div className="panel-body text-center nopadding">
                            <Link to={{
                                    pathname: "filmDetail",
                                    state: {
                                        params: data
                                    }
                                }} >
                                <img src={data.img_url}
                                     width="200px" height="200px"/>
                            </Link>
                        </div>
                        <div className="panel-footer">
                            <div className="clearfix">
                                <div className="btn-group btn-group-sm pull-right">
                                    <Link
                                        to={{
                                            pathname: "filmDetail",
                                            state: {
                                                params: data
                                            }
                                        }}
                                        className="btn btn-blue"
                                        title="Detail"
                                    >
                                        <span className="fa fa-eye"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )})
        return listItems;
    }

    render(){

        const {
            films,
            loading
        } = this.state;
        const {
            showSearchModal
        } = this.state
        return (
            <div>
                {
                    loading && <ReactLoading type="balls" color="#444" />
                }

                {
                    !loading && this.renderFilmsList()
                }

            </div>
        );
    }
}