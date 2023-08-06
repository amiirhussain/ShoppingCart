import { Typography, Row, Col, Divider, Avatar, Button, Card } from 'antd';
import { Link } from 'react-router-dom';
import { RocketOutlined, StarOutlined } from '@ant-design/icons';

import logo from '../assets/logo.png';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: '20px 8%', background: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Avatar size={100} src={logo} alt="Your Ecommerce Store" />
        <Title level={2} style={{ color: '#F7B801' }}>
          Welcome to the Cosmos
        </Title>
      </div>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={3}>Our Story</Title>
          <Paragraph>
            <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
              Embark on a Celestial Journey
            </span>{' '}
            through the vast cosmos of Your Ecommerce Store! Our adventure began
            when a comet of innovation collided with the galaxy of dreams,
            igniting a supernova of creativity and magic.
          </Paragraph>
          <Paragraph>
            Join us on a stardust-filled expedition, where every constellation
            of products has a tale to tell. We are cosmic wanderers, curating
            celestial treasures that resonate with your unique essence. Welcome
            to the cosmos, where shopping transcends the ordinary and dances
            among the stars!
          </Paragraph>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Title level={3}>Our Values</Title>
          <Paragraph>
            <RocketOutlined
              style={{ fontSize: '24px', marginRight: '8px', color: '#FF4D4F' }}
            />
            <span style={{ fontWeight: 'bold' }}>Launch Innovation:</span>{' '}
            Unravel the secrets of the universe through boundless innovation.
            Leave behind the gravity of the mundane and ascend to new dimensions
            of shopping delight!
          </Paragraph>
          <Paragraph>
            <StarOutlined
              style={{ fontSize: '24px', marginRight: '8px', color: '#40A9FF' }}
            />
            <span style={{ fontWeight: 'bold' }}>Spark Empowerment:</span> In
            the cosmic tapestry, you are the guiding star. Illuminate your path
            with the power of choice, as every decision creates a constellation
            of possibilities.
          </Paragraph>
        </Col>
        <Col xs={24} sm={12}>
          <Title level={3}>Customer First</Title>
          <Paragraph>
            At the heart of our cosmic mission, you are the North Star guiding
            us forward. With the gravitational pull of care and warmth, we
            promise to make every shopping odyssey extraordinary.
          </Paragraph>
          <Paragraph>
            In the vast universe of customer-first philosophy, your satisfaction
            orbits our every move, guiding us to stellar destinations.
          </Paragraph>
        </Col>
      </Row>

      <Divider />
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={2}>Our Mission</Title>
          <Paragraph>
            <span style={{ fontWeight: 'bold' }}>Mission Control:</span> Launch
            beyond the boundaries of the known, inspiring celestial shopping
            experiences that elevate your universe.
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={2}>Our Vision</Title>
          <Paragraph>
            <span style={{ fontWeight: 'bold' }}>Visionary Voyage:</span> Become
            the brightest star in the cosmic sky of ecommerce, illuminating the
            cosmos with celestial shopping adventures.
          </Paragraph>
        </Col>
      </Row>

      <Divider />
      <Row gutter={[16, 16]} justify="center">
        <Col>
          <Title level={2}>Embark on Your Cosmic Journey</Title>
          <Paragraph>
            Are you ready to explore the cosmos of shopping delights? Brace
            yourself for an interstellar adventure beyond imagination.
          </Paragraph>
          <Link to="/cart">
            <Button type="primary" size="large">
              Launch Now
            </Button>
          </Link>
        </Col>
      </Row>

      <Divider />
      <Row gutter={[16, 16]} justify="center">
        <Col>
          <Title level={2}>A Cosmic Experience</Title>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <Card.Meta
              title="Space Adventure"
              description="Embark on a journey to distant galaxies with our exclusive space-themed collection."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <Card.Meta
              title="Cosmic Beauty"
              description="Discover beauty products that bring out the cosmic glow within you."
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <Card.Meta
              title="Stellar Tech"
              description="Experience the future with cutting-edge tech gadgets from the stars."
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
