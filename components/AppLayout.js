import React from 'react'
import Link from 'next/link'
import { Button,Navbar,Nav,Form,FormControl,Container,Row,Col  } from 'react-bootstrap'

const AppLayout = ({children})=>(
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Form>
                <Row>
                    <Col>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Col>
                    <Col>
                    <Button variant="secondary">Search</Button>
                    </Col>
                </Row>
            </Form>
            </Nav>
        </Container>
    </Navbar>
)

export default AppLayout