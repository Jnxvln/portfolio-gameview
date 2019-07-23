import React from 'react'
import { Card } from 'react-bootstrap'
import './SiteFooter.css'

const SiteFooter = props => {
  return (
    <div>
      <Card className="mt-4">
        <Card.Body>
          <span className="SITEFOOTER_disclaimer">This application is for academic purposes only. All credit goes to <a href="https://rawg.io">https://rawg.io</a> for use of the RAWG API</span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SiteFooter;