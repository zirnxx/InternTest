import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import products from '../data/products';
import categories from '../data/categories';

const Home = () => (
  <>
    <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
      <div>
        <h1 className="display-5 fw-bold">Selamat datang di RizzMart!</h1>
        <p>Apapun yang anda cari disini pasti ada</p>
        <Form className="d-flex justify-content-center mt-4">
          <FormControl
            type="search"
            placeholder="Cari barang di sini..."
            className="rounded-pill px-4 py-2"
            style={{ width: '300px' }}
          />
        </Form>
      </div>
    </div>

    <Container className="my-4">
      <div className="carousel-bg p-3 rounded">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src="/carousel/i.png" alt="Promo 1" />
            <Carousel.Caption>
              <h3>Promo Spesial Hari Ini</h3>
              <p>Diskon hingga 50% untuk produk pilihan</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src="/carousel/Keanu-Reeves-Transparent-Background.png" alt="Promo 2" />
            <Carousel.Caption>
              <h3>Produk Terbaru</h3>
              <p>Temukan koleksi terbaru kami</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 carousel-img" src="/carousel/SUPERMAX.webp" alt="Promo 3" />
            <Carousel.Caption>
              <h3>Gratis Ongkir</h3>
              <p>Gratis ongkir seluruh Indonesia untuk pembelian di atas Rp500.000</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>

    <Container className="my-5">
      <Row>
        {['/banner/byelando.png', '/banner/charles.jpeg', '/banner/Jos_Verstappen,_2006.jpg', '/banner/lewis.png'].map((src, idx) => (
          <Col key={idx} lg={3} md={6} sm={6} xs={12} className="mb-4 d-flex justify-content-center">
            <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
              <img
                src={src}
                alt={`Banner ${idx + 1}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 0 6px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>

    <Container className="my-5">
      <h3 className="text-center mb-4">Kategori Produk</h3>
      <Row>
        {categories.map((cat, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <CategoryCard icon={cat.icon} nama={cat.nama} />
          </Col>
        ))}
      </Row>
    </Container>

    <Container className="my-5">
      <h3 className="text-center mb-4">Rekomendasi Produk</h3>

      <h5 className="mb-3">Mobil</h5>
      <Row>
        {products.slice(0, 6).map((item, idx) => (
          <Col key={idx} lg={2} md={4} sm={6} xs={12} className="mb-4">
            <ProductCard {...item} />
          </Col>
        ))}
      </Row>

      <h5 className="mt-4 mb-3">Smartphone</h5>
      <Row>
        {products.slice(6, 12).map((item, idx) => (
          <Col key={idx + 6} lg={2} md={4} sm={6} xs={12} className="mb-4">
            <ProductCard {...item} />
          </Col>
        ))}
      </Row>

      <h5 className="mt-4 mb-3">Aksesoris</h5>
      <Row>
        {products.slice(12, 18).map((item, idx) => (
          <Col key={idx + 12} lg={2} md={4} sm={6} xs={12} className="mb-4">
            <ProductCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
);

export default Home;