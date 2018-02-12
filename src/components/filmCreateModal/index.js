import React from 'react'
import {DESCRIPTION, YEAR, TITLE} from '../../constants/film';

import {Form, FormGroup, Button, ControlLabel, FormControl, Modal, Col} from 'react-bootstrap';
import './index.css';

export class FilmCreateModal extends React.Component {

    createFilm = () => {
        let dataArray = {
            title: this.inputName.value,
            description: this.inputDescription.value,
            year: this.inputYear.value
        }
        this.props.onAdd(dataArray);
    }


    render() {

        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>

                        <FormGroup controlId="formHorizontalTitle">
                            <Col componentClass={ControlLabel} sm={2}>
                                {TITLE}
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder={TITLE} inputRef={inputName => {
                                    this.inputName = inputName
                                }}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalDescription">
                            <Col componentClass={ControlLabel} sm={2}>
                                {DESCRIPTION}
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder={DESCRIPTION} inputRef={inputDescription => {
                                    this.inputDescription = inputDescription
                                }}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalLimit">
                            <Col componentClass={ControlLabel} sm={2}>
                                {YEAR}
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder={YEAR} inputRef={inputYear => {
                                    this.inputYear = inputYear
                                }}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10} className="alignModalButton">
                                <Button bsStyle="primary" onClick={this.createFilm}>Create</Button>
                            </Col>
                        </FormGroup>
                    </Form>;
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        )
    }
}