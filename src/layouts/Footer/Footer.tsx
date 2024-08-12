import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Flex } from 'antd'

const { Title } = Typography;

const Footer: React.FC = () => {
    return (
        <footer>
            <Flex justify='center' align='center'>
                <Title level={5}>
                    © Developed by
                    <Link to={'https://ferhaddev.netlify.app'} target='_blank'>
                        Ferhad Eyvazov
                    </Link>
                </Title>
            </Flex>
        </footer>
    )
}

export default Footer