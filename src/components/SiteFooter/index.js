import React from 'react'
import { Card } from 'react-bootstrap'

const SiteFooter = props => {
  return (
    <div>
      <Card className="mt-4">
        <Card.Body>
          <span>&copy; Copyright 2019 - Design &amp; Development by Justin Cox</span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SiteFooter;