import React from 'react';
import { Card } from 'react-bootstrap';
import { BsShop, BsGeoAlt } from 'react-icons/bs';

interface ProductProps {
  nama: string;
  harga: string;
  img: string;
  toko: string;
  lokasi: string;
}

const ProductCard: React.FC<ProductProps> = ({ nama, harga, img, toko, lokasi }) => (
  <Card className="h-100 shadow-sm d-flex flex-column product-card card-size">
    <div className="square-image-wrapper">
      {img ? (
        <img src={img} alt={nama} className="square-image-contain" />
      ) : (
        <div className="no-image-placeholder">
          No Image
        </div>
      )}
    </div>
    <Card.Body className="d-flex flex-column justify-content-between">
      <div>
        <Card.Title className="fs-6">{nama}</Card.Title>
        <Card.Text className="text-danger fw-bold mb-1">{harga}</Card.Text>
      </div>
      <div className="mt-auto">
        <Card.Text className="fw-bold mb-0" style={{ fontSize: '0.85rem', color: '#003366' }}>
          <BsShop className="me-1" />
          {toko}
        </Card.Text>
        <Card.Text className="text-muted" style={{ fontSize: '0.75rem' }}>
          <BsGeoAlt className="me-1" />
          {lokasi}
        </Card.Text>
      </div>
    </Card.Body>
  </Card>
);

export default ProductCard;