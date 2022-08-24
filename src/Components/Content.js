import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useDispatch, useSelector} from "react-redux";
import ListGroup from 'react-bootstrap/ListGroup'
import {getCocktailByName} from "../Utils/apiRequests";
import Modal from 'react-bootstrap/Modal';
import {setCurrentCocktail} from "../actionSlice/cocktailSlice";
import {OrganizeComponent} from "./OrganizeComponent";
import {CocktailComponent} from "./CocktailComponent";
import {getRequest} from "../Utils/httpRequest";

const Content = () => {

    const [lgShow, setLgShow] = useState(false);

    const currentCocktail = useSelector((state) => state.cocktail.currentCocktail);
    const filteredCocktails = useSelector((state) => state.cocktail.filteredCocktails);
    const dispatch = useDispatch();
    useEffect(() => {
        getRequest("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((res) => {

            dispatch(setCurrentCocktail(res.drinks));
        }).catch((err) => {
            console.log(err);
        });
    }, []) // act like componentDidMount().


    return (
        <React.Fragment>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {currentCocktail?.length ? currentCocktail[0].strDrink : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentCocktail?.length ?
                        <img className="cocktail-image" src={currentCocktail[0].strDrinkThumb}
                             alt={currentCocktail[0].strDrink}/> : ''}
                </Modal.Body>
            </Modal>
            <OrganizeComponent />
            <Container className="mt-3">
                <Row>
                    <Col md={3}>
                        <ListGroup>
                            {
                                filteredCocktails ?
                                    (
                                        filteredCocktails.map((drink, key) => {
                                            return (
                                                <ListGroup.Item className="cocktail-item" key={key} onClick={(e) => {
                                                    getCocktailByName(e.target.innerText).then((res) => {
                                                        dispatch(setCurrentCocktail(res.drinks));
                                                    }).catch(err => {})
                                                }}>
                                                    {drink.strDrink}
                                                </ListGroup.Item>
                                            )
                                        })
                                    ) : 'No cocktails yet.'
                            }
                        </ListGroup>
                    </Col>
                    <Col md={9}>
                        { currentCocktail[0] ? <CocktailComponent cocktail={currentCocktail[0]} setLgShow={setLgShow}/> : 'Loading..' }
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Content;