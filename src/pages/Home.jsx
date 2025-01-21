import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import Slideshow from "../components/Slideshow";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📖 Voice of Geeta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Discover the timeless wisdom of the Bhagavad Gita.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="explore-btn"
        >
          Explore Geeta
        </motion.button>
      </section>

      {/* Slideshow */}
      <Slideshow />

      {/* Three Sections */}
      <section className="features">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="feature-card"
        >
          <h2>🕉️ Bhagavad Gita</h2>
          <p>Read and understand the teachings of Krishna.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="feature-card"
        >
          <h2>📜 Vedic Knowledge</h2>
          <p>Explore the ancient wisdom of Vedas.</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="feature-card"
        >
          <h2>🔔 Daily Shlokas</h2>
          <p>Receive a new divine Shloka every day.</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
