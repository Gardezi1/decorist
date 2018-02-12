import React from 'react';
import { Link } from 'react-router';
import {Form, FormGroup, Col, Button, ControlLabel, FormControl, Navbar, NavItem, Nav} from 'react-bootstrap';
import './index.css';
import ReactLoading from 'react-loading';
import  {FilmCreateModal}  from '../filmCreateModal'

export class Film extends React.Component{
    constructor( props){
        super(props);
        this.state = {
            films:[],
            film: [],
            showCreateModal: false,
            loading: false

        }
    }

    componentWillMount(){

        this.props.getAllFilms(this.props.jwt_token);
    }

    handleDelete = (id) => {

        const {
            jwt_token
        }  = this.props;
        this.props.handleDelete(id, jwt_token)
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

    handleModalToggle = () => {
        this.setState((prevState) =>({
            showCreateModal: !prevState.showCreateModal
        }))
    }

    addFilm = (data) => {
        const {jwt_token} = this.props;
        this.handleModalToggle();

        this.props.addFilm(
            data,
            jwt_token

        )
    }

    renderFilmsList = () => {
        const {
            films,
            loading
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
                                    <Button onClick={(e) =>{this.handleDelete(data.id)}} className="btn-group btn-group-sm pull-right">
                                        <span className="fa fa-trash"></span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )})
        return (
            <div >
                <Button className="btn btn-success" onClick={this.handleModalToggle} >Add Film</Button>
                <br />
                <br />
             {listItems}
            </div>
        );
    }

    render(){

        const {
            films,
            loading,
            showCreateModal
        } = this.state;

        return (
            <div>
                {
                    loading && <ReactLoading type="balls" color="#444" />
                }

                {
                    !loading && this.renderFilmsList()
                }

                {

                    showCreateModal && <FilmCreateModal show={showCreateModal} handleClose={this.handleModalToggle} onAdd={this.addFilm}/>

                }


            </div>
        );
    }
}