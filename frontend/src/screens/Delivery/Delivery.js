import React from 'react'
import { Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import './deliver.css';


const Delivery = () => {
  return (
    <MainScreen tittle="Welcome back to deliver details">
      <div className="card">
        <blockquote className="blockquote mb-0">
          <h4>
            <br />
            <Badge variant="danger">
              {" "}
              <p text-align="center">Process = Ongoing</p>
            </Badge>
          </h4>
          <footer className="blockquote-footer">
            <br />
            <br />
            <h5>Date =2022/04/30</h5>
            <div title="Sourse Tittle"></div>
            <br />
          </footer>
        </blockquote>
      </div>
    </MainScreen>
  );
};

export default Delivery
