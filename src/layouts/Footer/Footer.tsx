import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Flex, Space} from 'antd'

const { Title } = Typography;

const Footer: React.FC = () => {
    return (
        <footer>
            <Flex justify='center' align='center'>
                    <Space size={5}>
                        <Title level={5}
                        style={{ color: "gray" }}
                        >
                            © Developed by
                        </Title>
                        
                        <Link style={{ color: "gray" }}
                         to={'https://ferhaddev.netlify.app'} target='_blank'>
                            <Title level={5} style={{color: 'gray'}}>Ferhad Eyvazov</Title>
                        </Link>
                    </Space>
            </Flex>
        </footer>
    )
}

export default Footer