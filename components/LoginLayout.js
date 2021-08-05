import React from 'react'
import Link from 'next/link'
import styled from "styled-components";
import { Button,Navbar,Nav,Form,FormControl,Row,Col, Container  } from 'react-bootstrap'
import Image from 'next/image'
import profilePic from '../image/mail_unopen.jpg'

const LoginLayout = ({children})=>(
    <div>
        <Image src={profilePic} width={500} height={500}/>
            <Form classname={aa}>
                <Row>
                    <Col>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Col>
                    <Col>
                    <Button variant="secondary">Search</Button>
                    </Col>
                </Row>
                <Row>
                    {children}
                </Row>
            </Form>
     </div>

)

export default LoginLayout