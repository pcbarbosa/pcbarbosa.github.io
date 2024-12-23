import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F5EFE7;
  padding: 2em;
`;

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2em 0;
  padding: 2em;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: "0em",
    gap: "0em",
    flexWrap: "wrap",
    backgroundColor: "#F5EFE7"
  },
  imageContainer: {
    flex: "0 0 auto",
  },
  image: {
    width: "300px",
    height: "400px",
    objectFit: "cover",
    marginRight: "1rem",
  },
  textContainer: {
    flex: "1",
    textAlign: "center",
  },
  text: {
    fontSize: "1rem",
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: "column",
      alignItems: "center",
    },
    image: {
      marginRight: "0",
      marginBottom: "1rem",
    },
    text: {
      fontSize: "1.2rem",
    },
  },
  '@media (min-width: 1024px)': {
    text: {
      fontSize: "2rem",
    },
  },
};

const Home = () => {
  return (
    <Container>
      <Section id="about">
        <div style={styles.container}>
          <div style={styles.imageContainer}>
            <img src="/sablay.jpg" alt="Me in Sablay" style={styles.image} />
          </div>
          <div style={styles.textContainer}>
            <h2>I'm Patrick C. Barbosa</h2>
            <h3>Welcome to my Page.</h3>
            <p>Learn more about my professional background by browsing through my portfolio.</p>
          </div>
        </div>
      </Section>
      <Section id="maps">
        <div>
          <h2>Maps Showcase</h2>
          <MapContainer center={[15.0119069,120.0801332]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[15.0119069,120.0801332]}>
              <Popup>
                Your Project Location
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </Section>
      <Section id="products">
        <div>
          <h2>My Products</h2>
          <p>Here are some of my works and portfolio items.</p>
        </div>
      </Section>
      <Section>
        <div>
          <h2>Calling Card </h2>
          <h3>Patrick C. Barbosa</h3>
          <p>Contact Number: +63 995 496 8295</p>
          <p>Email: patrickbarbosa5047@gmail.com</p>
        </div>
      </Section>
    </Container>
  );
};

export default Home;