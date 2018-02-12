import React from 'react';
import { Link } from 'react-router';
import {Form, FormGroup, Col, Button, ControlLabel, FormControl, Navbar, NavItem, Nav} from 'react-bootstrap';
import './index.css';
import ReactLoading from 'react-loading';
import  {FilmCreateModal}  from '../filmCreateModal'
import InfiniteScroll from 'react-infinite-scroller';

export class Film extends React.Component{
    constructor( props){
        super(props);
        this.state = {
            films:[],
            film: [],
            showCreateModal: false,
            loading: false,
            hasMoreItems: true

        }
    }

    componentWillMount(){

        // this.props.getAllFilms(this.props.jwt_token, limit);
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

    loadItems = (page_number) => {
        this.props.getAllFilms(this.props.jwt_token, page_number*10);
    }

    renderFilmsList = () => {
        const {
            films,
            loading
        } = this.state;

        let listItems = films.map((data, idx) => {
            return (
                <div key={idx} className="col-sm-5 col-md-5">
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
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems}
                    hasMore={this.state.hasMoreItems}
                    loader={<div className="loader" key={0}>Loading ...</div>}>
                    {listItems}
                </InfiniteScroll>
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
                     this.renderFilmsList()
                }

                {
                    showCreateModal && <FilmCreateModal show={showCreateModal} handleClose={this.handleModalToggle} onAdd={this.addFilm}/>
                }


            </div>
        );
    }
}