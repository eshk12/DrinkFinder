import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {parseDate} from "../Utils/helper";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import React from "react";

export const CocktailComponent = ({cocktail, setLgShow}) => {
    return (
        <Container>
            <Row>
                <Col md={9} style={{textAlign: 'left'}}>
                    <h1>{cocktail.strDrink}</h1>
                    <div>{parseDate(cocktail.dateModified)}</div>
                    <div>Category: {cocktail.strCategory}</div>
                    <div>Preferred glass: {cocktail.strGlass}</div>
                    <p>
                        {cocktail.strInstructions}
                    </p>
                    <div>
                        {cocktail.strIngredients.split(',').map((item, key) => <Badge key={key}
                                                                                                className={"me-1"}
                                                                                                bg="secondary">{item}</Badge>)}
                    </div>
                </Col>
                <Col md={3}>
                    <img onClick={() => setLgShow(true)} className="cocktail-image mt-3" width={250}
                         src={cocktail.strDrinkThumb}
                         alt={cocktail.strDrink}/>
                </Col>
            </Row>
        </Container>
    );
}