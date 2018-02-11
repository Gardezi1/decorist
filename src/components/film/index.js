import React from 'react'
import {EMAIL, PASSWORD, LOGIN, SIGNUPTEXTONLOGINPAGE} from '../../constants/user';
import { Link } from 'react-router';
import { Form, FormGroup, Col, Button, ControlLabel, FormControl} from 'react-bootstrap';
import './index.css';
import {FilmFilterModal} from "../filmFilterModal";

export class Film extends React.Component{
    constructor( props){
        super(props);
        this.state = {
            films:[],
            film: [],
            showSearchModal: false
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

    render(){
        const {
            showSearchModal
        } = this.state;
        return (
            <div>
                {   showSearchModal && <FilmFilterModal
                        show={showSearchModal}
                        handleClose={this.handleClose}
                        filterFilms={this.filterFilms}
                        handleSearch={this.filterFilms}
                        inputRefs={filterRef => this.filterRefs = filterRef}
                    />
                }
                <div className="alignModalButton">
                    <Button onClick={this.openFilmSearchModal} >Search</Button>
                </div>
            </div>
        )
    }
}