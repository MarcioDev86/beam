import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <div>
            <Jumbotron style={{backgroundColor: "#ECE5EE", textAlign: "center", height: "100vh"}}>
                <h1 className="fourzerofour">404</h1>
                <h1 className="display-3" style={{color: "#A67EB1"}}>Page Not Found</h1>
                
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button size="lg" style={{backgroundColor: "#A67EB1"}}>
                        Go Back Home
                    </Button>
                </Link>
            </Jumbotron>
        </div>
    )
}

export default PageNotFound