import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SingleBook from '../card/SingleBook';
import { nanoid } from 'nanoid';

export default function LatestRelease({ fantasyBooks }) {
    const [searchValue, setSearchValue] = useState('');
    const [books, setBooks] = useState(fantasyBooks);

    const handleSearch = (event) => {
        event.preventDefault();

        const titles = fantasyBooks.filter(book => (
            book.title.toLowerCase().includes(searchValue.toLowerCase())
        ))

        setBooks(titles);
    }

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    }

    return (
        <Container>
            <Form className="mb-4" onSubmit={handleSearch}>
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            name="searchValue"
                            placeholder="inserisci titolo"
                            value={searchValue}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col>
                        <Button variant="success" type="submit">
                            Cerca
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col className="d-flex flex-wrap gap-4">
                    {books.map(book => (
                        <SingleBook key={nanoid()}
                            asin={book.asin}
                            img={book.img}
                            title={book.title}
                            category={book.category}
                            price={book.price}
                            btn="Recensioni"
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}
