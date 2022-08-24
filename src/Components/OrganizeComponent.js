import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {setFilteredCocktails} from "../actionSlice/cocktailSlice";
import Container from "react-bootstrap/Container";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

export const OrganizeComponent = () => {
    const [filterBy, setFilterBy] = useState('Ingredient');
    const [filterCriteria, setFilterCriteria] = useState('');
    const dispatch = useDispatch();
    return (
        <Container>
            <Row>
                <Col md={3} className="mt-3">
                    <Form.Select id="filterBy"
                                 onChange={(e) => {
                                     setFilterBy(e.target.value)
                                     dispatch(setFilteredCocktails({type: "FILTER", filterBy: e.target.value, filterCriteria}))
                                 }}
                    >
                        <option value="Ingredient" defaultValue>Filter by ingredient</option>
                        <option value="Glass">Filter by glass</option>
                        <option value="Alcoholic">Filter by alcoholic</option>
                    </Form.Select>
                    <Form.Control
                        type="text"
                        id="filterCriteria"
                        placeholder="Enter your criteria here.."
                        onChange={(e) => {
                            setFilterCriteria(e.target.value)
                            dispatch(setFilteredCocktails({type: "FILTER", filterBy, filterCriteria: e.target.value}))
                        }}
                        value={filterCriteria}
                    />
                </Col>
                <Col md={{span: 3, offset: 6}}>
                    <Form.Select aria-label="Sort By:"
                                 onChange={(e) => {
                                     dispatch(setFilteredCocktails({type: "SORT", sortBy: e.target.value}))
                                 }}
                    >
                        <option value="none">Sort By:</option>
                        <option value="Name">Sort By: Name (Ascending)</option>
                        <option value="Date">Sort By: Date (Descending)</option>
                    </Form.Select>
                </Col>
            </Row>
        </Container>
    );
}