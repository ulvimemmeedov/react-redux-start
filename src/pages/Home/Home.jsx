import { Col, Container, Row } from 'reactstrap';
import React from 'react';
import TabComponent from '../../components/Tab/Tab';
import BreadcrumbsCompount from '../../compounds/Breadcrumbs/BreadcrumbsCompount';
import Sidebar from '../../components/SideBar/Sidebar';
import CardBox from '../../components/Card/CardBox';
import AvatarCompound from '../../compounds/Avatar/AvatarCompound';
import VerticalPanel from '../../components/Panel/VerticalPanel';

export default function Home() {
    const data = [
        {
            label: "HTML",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: "React",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },

        {
            label: "Vite",
            value: "vite",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're 
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    const urls = [
        { name: "home", link: "/" }
    ];
    return (
        <Container>
            <Row>
                <Row>
                    <Col>
                        <h1>Home</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BreadcrumbsCompount urls={urls} />
                    </Col>
                </Row>
                <Row>
                    <Col style={{
                        marginBottom: "45px"
                    }}>
                        <VerticalPanel>
                            {
                                Array.from(Array(10000).keys()).map(i => (
                                    <AvatarCompound key={i} url={"#"} src={"https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"} alt="alt" name={"User"} />
                                ))
                            }
                        </VerticalPanel>
                    </Col>
                </Row>
            </Row>
            <Row>
                <Row>
                    <Col>
                        <Sidebar />
                    </Col>
                    <Col>
                        <TabComponent data={data} defaultValue="html" />
                    </Col>
                    <Col>
                        <div className="overflow-y">
                            {Array.from(Array(10000).keys()).map(i => (
                                <CardBox img={"https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fblog.jpg&w=3840&q=75"} heading={"Cozy 5 Stars Apartment"} description={"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona."} />
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Row>
        </Container >
    )
}
