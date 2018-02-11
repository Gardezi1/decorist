import React from 'react'
import {DESCRIPTION, LIMIT, MAXYEAR, MINYEAR, SEARCH, TITLE} from '../../constants/film';

import {Form, FormGroup, Button, ControlLabel, FormControl, Modal, Col} from 'react-bootstrap';
import './index.css';

export class FilmFilterModal extends React.Component{


    render(){

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form  horizontal>
                        <FormGroup controlId="formHorizontalMinYear">
                            <Col componentClass={ControlLabel} sm={2}>
                                {MINYEAR}
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder={MINYEAR} />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalMaxYear">
                            <Col componentClass={ControlLabel} sm={2}>
                                {MAXYEAR}
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder={MAXYEAR} />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalTitle">
                            <Col componentClass={ControlLabel} sm={2}>
                                {TITLE}
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder={TITLE} />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalDescription">
                            <Col componentClass={ControlLabel} sm={2}>
                                {DESCRIPTION}
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder={DESCRIPTION} />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalLimit">
                            <Col componentClass={ControlLabel} sm={2}>
                                {LIMIT}
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder={LIMIT} />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10} className="alignModalButton">
                                <Button bsStyle="primary"  onClick={this.filterFilms}>{SEARCH}</Button>
                            </Col>
                        </FormGroup>
                    </Form>;
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.handleSearch}>Search</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}