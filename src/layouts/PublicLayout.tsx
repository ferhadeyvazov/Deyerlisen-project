import React from 'react'
import Hero from '@components/Public/Hero/Hero'
import Footer from '@layouts/Footer/Footer'
import { Col, Row } from "antd"

type IProps = {
    children: React.ReactNode;
}

const PublicLayout: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <Row>
                <Col
                    xs={{ flex: '100%' }}
                    sm={{ flex: '30%' }}
                    md={{ flex: '40%' }}
                >
                    <Hero />
                </Col>
                <Col
                    xs={{ flex: '100%' }}
                    sm={{ flex: '70%' }}
                    md={{ flex: '60%' }}
                >
                    {children}
                </Col>
            </Row>
            <Footer />
        </>
    )
}

export default PublicLayout