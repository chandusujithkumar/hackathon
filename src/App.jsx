import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react"; // Vercel Analytics
import "./App.css";

// SignUp Component
const SignUp = ({ onSignUp, onCancel }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    alert(`Account created for ${username}!`);
    onSignUp(username, password); // log them in
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Sign Up</h1>
        <form className="login-form" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <p className="login-footer">
          Already have an account?{" "}
          <a href="#" onClick={onCancel}>
            Login
          </a>
        </p>
      </div>
      <Analytics /> {/* Track page views on Sign Up */}
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.tagName === "BUTTON") {
        const btnText = e.target.textContent;
        if (btnText !== "Login" && btnText !== "Logout") {
          alert("Booking feature coming soon!");
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleSignUpLogin = (newUsername, newPassword) => {
    // After sign-up, log them in automatically
    setUsername(newUsername);
    setPassword(newPassword);
    setIsLoggedIn(true);
    setShowSignUp(false);
  };

  if (showSignUp) {
    return (
      <SignUp
        onSignUp={handleSignUpLogin}
        onCancel={() => setShowSignUp(false)}
      />
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-card">
          <h1>TravelStay+</h1>
          <p className="login-subtitle">Welcome back! Please login to continue.</p>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          <p className="login-footer">
            Don't have an account?{" "}
            <a href="#" onClick={() => setShowSignUp(true)}>
              Sign Up
            </a>
          </p>
        </div>
        <Analytics /> {/* Track page views on login page */}
      </div>
    );
  }

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <h1>TravelStay+</h1>
        <nav>
          <a href="#homestays">Homestays</a>
          <a href="#attractions">Attractions</a>
          <a href="#guides">Guides</a>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Find Affordable Homestays & Top Attractions</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search city..." />
          <button>Search</button>
        </div>
      </section>

      {/* Homestays Section */}
      <section id="homestays" className="homestays">
        <h2>Popular Homestays</h2>
        <div className="card-container">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
              alt="Hillside Haven"
            />
            <h3>Hillside Haven</h3>
            <p>Experience peaceful mountain views with free breakfast.</p>
            <p>💰 ₹3,499/night</p>
            <p>⭐ 4.6/5 (212 reviews)</p>
            <button>Book Now</button>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=400&q=80"
              alt="Beach Retreat"
            />
            <h3>Beach Retreat</h3>
            <p>Relax near the shore with private balcony and ocean view.</p>
            <p>💰 ₹4,299/night</p>
            <p>⭐ 4.8/5 (321 reviews)</p>
            <button>Book Now</button>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80"
              alt="Urban Comfort"
            />
            <h3>Urban Comfort</h3>
            <p>Modern stay in the heart of the city with all amenities.</p>
            <p>💰 ₹2,899/night</p>
            <p>⭐ 4.5/5 (198 reviews)</p>
            <button>Book Now</button>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="attractions">
        <h2>Top Attractions</h2>
        <div className="card-container">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80"
              alt="Mountain Viewpoint"
            />
            <h3>Mountain Viewpoint</h3>
            <p>Enjoy breathtaking views from the highest peaks.</p>
            <button>View More</button>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
              alt="Sunny Beach"
            />
            <h3>Sunny Beach</h3>
            <p>Perfect spot for sunbathing and water sports.</p>
            <button>View More</button>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1599999909101-fd2d4c3c3bfc?auto=format&fit=crop&w=400&q=80"
              alt="City Park"
            />
            <h3>City Park</h3>
            <p>Enjoy calm nature walks and open-air cafes.</p>
            <button>View More</button>
          </div>
        </div>
      </section>

      {/* Local Guides Section */}
      <section id="guides" className="guides">
        <h2>Meet Our Local Guides</h2>
        <div className="card-container">
          <div className="card">
            <h3>Arjun</h3>
            <p>🏞️ Trekking & mountain climbing expert</p>
            <button>Contact</button>
          </div>
          <div className="card">
            <h3>Priya</h3>
            <p>🏖️ Coastal tours & cultural exploration</p>
            <button>Contact</button>
          </div>
          <div className="card">
            <h3>Ravi</h3>
            <p>🏙️ City history & food tour specialist</p>
            <button>Contact</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 TravelStay+. All rights reserved.</p>
      </footer>

      <Analytics /> {/* Track page views on homepage */}
    </div>
  );
};

export default App;
