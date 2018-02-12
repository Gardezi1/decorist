import React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';
import './index.css';
import {FilmCreateModal} from '../filmCreateModal'
import InfiniteScroll from 'react-infinite-scroller';
import ReactStars from 'react-stars'

export class Film extends React.Component {

    handleDelete = (id) => {

        const {
            jwt_token
        } = this.props;
        this.props.handleDelete(id, jwt_token)
    }
    handleModalToggle = () => {
        this.setState((prevState) => ({
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

        const queryStringData = this.makeFilterQueryString();
        this.props.getAllFilms(this.props.jwt_token, page_number * 10, queryStringData);
    }
    renderFilmsList = () => {
        const {
            films,
            hasMore
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
                            }}>
                                <img src={data.img_url}
                                     width="200px" height="200px"/>
                            </Link>
                        </div>
                        <div className="panel-footer">
                            <div className="clearfix">
                                <div className=" pull-left">
                                    <span><ReactStars
                                        count={10}
                                        size={24}
                                        color2={'#ffd700'}
                                        half={false}
                                        edit={false}
                                        value={data.average_score}
                                    /></span>
                                </div>

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
                                    <Button onClick={(e) => {
                                        this.handleDelete(data.id)
                                    }} className="btn-group btn-group-sm pull-right">
                                        <span className="fa fa-trash"></span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <br/>
                <br/>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems}
                    hasMore={hasMore}
                    loader={<div className="loader" key={0}>Loading ...</div>}>
                    {listItems}
                </InfiniteScroll>
            </div>
        );
    }
    arraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length)
            return false;
        for (var i = arr1.length; i--;) {
            if (arr1[i] !== arr2[i])
                return false;
        }

        return true;
    }
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    handleMinYearChange = (e) => {
        this.setState({
            min_year: e.target.value
        })
    }
    handleMaxYearChange = (e) => {
        this.setState({
            max_year: e.target.value
        })
    }
    makeFilterQueryString = () => {
        const {
            title,
            description,
            min_year,
            max_year
        } = this.state

        const {
            jwt_token
        } = this.props;

        let queryStringData = ''
        if (title !== "") {
            queryStringData = `title=${title}`;
        }

        if (description !== "") {
            queryStringData = `${queryStringData}&description=${description}`
        }

        if (min_year !== "") {
            queryStringData = `${queryStringData}&min_year=${min_year}`;
        }

        if (max_year !== "") {
            queryStringData = `${queryStringData}&max_year=${max_year}`
        }
        return queryStringData;
    }
    handleFilter = () => {
        const {
            jwt_token
        } = this.props;
        const queryStringData = this.makeFilterQueryString();
        this.props.filterResult(queryStringData, jwt_token)
    }

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            film: [],
            showCreateModal: false,
            loading: false,
            hasMoreItems: true,
            title: '',
            description: '',
            min_year: '',
            max_year: '',
            hasMore: true

        }
    }

    componentWillMount() {

        // this.props.getAllFilms(this.props.jwt_token, limit);
    }

    componentWillReceiveProps(nextProps) {
        if (this.arraysEqual(nextProps.films, this.state.films))
            this.setState({
                hasMore: false
            })
        else
            this.setState({
                hasMore: true
            })
        if (nextProps.error !== '')
            alert(nextProps.error);

        if (this.arraysEqual)
            if (nextProps.loading) {
                this.setState({
                    loading: true,
                    films: nextProps.films
                });
            } else {
                this.setState({
                    loading: false,
                    films: nextProps.films
                });
            }
    }

    render() {

        const {
            showCreateModal,
            title,
            description,
            min_year,
            max_year
        } = this.state;

        return (
            <div>
                <div className="actions">
                    <div className="container">

                        <div className="pull-left">
                            <input type="text" className="headerInputBoxes" value={title} placeholder="Title"
                                   onChange={this.handleTitleChange}/>
                        </div>

                        <div className="pull-left">
                            <input type="text" className="headerInputBoxes" value={description}
                                   placeholder="Description" onChange={this.handleTitleChange}/>
                        </div>

                        <div className="pull-left">
                            <input type="text" className="headerInputBoxes" maxLength="4" value={min_year}
                                   placeholder="Min Year" onChange={this.handleMinYearChange}/>
                        </div>

                        <div className="pull-left">
                            <input type="text" className="headerInputBoxes" maxLength="4" value={max_year}
                                   placeholder="Max Year" onChange={this.handleMaxYearChange}/>
                        </div>

                        <div className="pull-left">
                            <Button className="btn btn-sm btn-green btn-success" onClick={this.handleFilter}><span
                                className="fa fa-search"></span></Button>
                        </div>

                        <div className="pull-right alignAddButton">

                            <Button className="btn btn-sm btn-green btn-success" onClick={this.handleModalToggle}><span
                                className="fa fa-plus"></span></Button>

                        </div>
                    </div>
                </div>
                {
                    this.renderFilmsList()
                }

                {
                    showCreateModal &&
                    <FilmCreateModal show={showCreateModal} handleClose={this.handleModalToggle} onAdd={this.addFilm}/>
                }


            </div>
        );
    }
}