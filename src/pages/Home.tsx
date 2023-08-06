import { useState } from 'react';
import { Carousel, Card, Button } from 'antd';
import '../styles/home.css';

const { Meta } = Card;
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Premium Smartwatch',
      description: 'Stay connected and stylish with our premium smartwatches.',
      image:
        'https://uploads-ssl.webflow.com/6411db0a90e69f571d5d5cca/64275028d101326e8bffcbde_Ecommerce-Marketing-and-Strategies-to-keep-up-with-the-Growing-Sector-banner-1.jpeg',
    },
    {
      title: 'Wireless Earbuds',
      description:
        'Experience true freedom with our high-quality wireless earbuds.',
      image:
        'https://cdn3.invitereferrals.com/blog/wp-content/uploads/2020/11/19115701/2020-11-19-1.jpg',
    },
    {
      title: 'Modern Furniture Collection',
      description:
        'Transform your living space with our exquisite modern furniture collection.',
      image:
        'https://eww-wp-new.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/03/16132616/best-eCommerce-website-design.jpg',
    },
  ];

  const handleChangeSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div style={{ padding: '67px 8%' }}>
      <Carousel autoplay style={{ padding: ' 0 1rem' }}>
        {slides.map((slide, index) => (
          <Card key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              style={{ marginBottom: '1rem' }}
            />

            <Meta title={slide.title} description={slide.description} />

            <Button
              style={{ marginTop: '1rem' }}
              onClick={() => handleChangeSlide(index)}
            >
              View Product
            </Button>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
