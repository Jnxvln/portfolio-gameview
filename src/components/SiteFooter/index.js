import React from 'react'
import { Card } from 'react-bootstrap'
import './SiteFooter.css'

const SiteFooter = props => {
  return (
    <div id="SITEFOOTER_footer">
      <Card id="SITEFOOTER_card" className="mt-4 text-center">
        <Card.Body>
          <span className="SITEFOOTER_disclaimer">Developed by <a href="https://github.com/Jnxvln">Jnxvln</a> | This application is for academic purposes only. All credit goes to <a href="https://rawg.io">https://rawg.io</a> for use of the RAWG API</span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SiteFooter;