import { Link } from "react-router-dom";

export default function NotesLandingPage() {
    return (
        <div>
            {/* Header */}
            <header className="lp-header">Take - Notes</header>
  
            {/* Hero Section */}
            <section className="hero">
                <h2>Your Notes, Anywhere.</h2>
                <p>
                    Organize your thoughts and ideas in one place with our secure and easy-to-use notes app.
                </p>
                <div className="buttons">
                    <Link to="/signup" className="btn btn-primary">Get Started</Link>
                    <Link to="/login" className="btn btn-secondary">Sign In</Link>
                </div>
            </section>
  
            {/* Features Section */}
            <section className="features">
                <h2>Why Choose Our Notes App?</h2>
                <div className="feature-box">
                    <h3>Personalised Notes</h3>
                    <p>Login and access your notes anytime.</p>
                </div>
                <div className="feature-box">
                    <h3>Password Protected</h3>
                    <p>Used JWT authentication to protect your notes.</p>
                </div>
                <div className="feature-box">
                    <h3>Easy to Use</h3>
                    <p>Minimalist design with powerful features.</p>
                </div>
            </section>
  
            {/* Footer */}
            <footer>© {new Date().getFullYear()} Take - Notes. All rights reserved.</footer>
      </div>
    );
  }
  