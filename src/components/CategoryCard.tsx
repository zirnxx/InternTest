import React from 'react';
import { Card } from 'react-bootstrap';

interface CategoryProps {
  icon: React.ElementType;
  nama: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ icon: IconComponent, nama }) => (
  <Card className="text-center kategori-card shadow-sm h-100">
    <Card.Body>
      <div className="kategori-icon mb-2">
        <IconComponent size={32} />
      </div>
      <Card.Title>{nama}</Card.Title>
    </Card.Body>
  </Card>
);

export default CategoryCard;