import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import React, {useRef, useState} from "react";
import {getCocktailByName} from "../Utils/apiRequests";
import {useDispatch, useSelector} from 'react-redux'
import {addCocktails, addSearchHistory} from "../actionSlice/cocktailSlice"


import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css';


const Header = () => {
    const [cocktail, setCocktail] = useState('');
    const dispatch = useDispatch();
    const searchHistory = useSelector((state) => state.cocktail.searchHistory);
    const ref = useRef();


    const handleSubmit = () => {
        getCocktailByName(cocktail).then((res) => {
            dispatch(addCocktails(res.drinks));
        }).catch((err) => {
            console.log(err);
        });
        dispatch(addSearchHistory(cocktail));
        //clear the DOM
        ref.current.clear()
    }
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col className="m-auto mt-3">
                        <img src="https://dummyimage.com/300x150/dedede/fff.png&text=Logo" alt="logo"/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="m-auto mt-5" md={{span: 8, offset: 2}}>
                        <InputGroup className="mb-3">
                            <Typeahead
                                id="basic-typeahead-single"
                                labelKey="name"
                                options = {searchHistory.length > 0 ? searchHistory : []}
                                placeholder="Search for cocktail..."
                                onInputChange={setCocktail}
                                ref={ref}
                            />
                            <Button
                                variant="outline-secondary"
                                onClick={handleSubmit}
                            >
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Header;