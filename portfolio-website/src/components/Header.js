import React from "react";
import Navigation from "./Navigation";

const Header = () => (
  <header style={styles.header}>
    <div style={styles.headerContent}>
      <h1 style={styles.headerTitle}>My Curriculum Vitae</h1>
    </div>
    <Navigation />
  </header>
);

const styles = {
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#3E5879", // Set the background color here
  },
  headerContent: {
    padding: "1rem",
    background: "#213555",
    color: "#fff",
    display: "flex",
    flexDirection: "column", // Ensure the texts are in a column
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  headerTitle: {
    margin: 0,
    textAlign: "center",
  },
  headerSubtitle: {
    margin: 0,
    textAlign: "center",
  },
};

export default Header;