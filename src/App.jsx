import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTopic, setActiveTopic] = useState("Docker");

  const topics = {
    Docker: {
      icon: "🐳",
      title: "Docker",
      description:
        "Docker is a platform used to build, run, and manage applications inside containers.",
      commands: [
        "docker --version",
        "docker build -t reactapp .",
        "docker images",
        "docker ps",
        "docker run -d -p 8081:80 reactapp",
      ],
    },

    Git: {
      icon: "🔧",
      title: "Git",
      description:
        "Git is a version control system used to track changes and manage source code.",
      commands: [
        "git --version",
        "git init",
        "git add .",
        'git commit -m "Initial commit"',
        "git status",
      ],
    },

    "Docker Hub": {
      icon: "☁️",
      title: "Docker Hub",
      description:
        "Docker Hub is a cloud-based registry where Docker images can be stored and shared.",
      commands: [
        "docker login",
        "docker tag reactapp username/reactapp:latest",
        "docker push username/reactapp:latest",
        "docker pull username/reactapp:latest",
      ],
    },

    React: {
      icon: "⚛️",
      title: "React",
      description:
        "React is a JavaScript library used to build interactive and reusable user interfaces.",
      commands: [
        "npm create vite@latest",
        "npm install",
        "npm run dev",
        "npm run build",
      ],
    },
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>🚀 Learning DevOps is very easy!</h1>
        <p>Learn • Build • Deploy • Automate</p>
      </header>

      {/* Hero */}
      <section className="hero">
        <h2>Welcome to DevOps Learning</h2>

        <p>
          Learn the essential tools and technologies used in modern
          software development and deployment.and also the front end development technologies like React and Vite. This platform provides a hands-on approach to mastering DevOps practices.
        </p>

        <button>Start Learning</button>
      </section>

      {/* Technologies */}
      <section className="topics">

        <h2>DevOps Technologies</h2>

        <div className="topic-buttons">

          {Object.keys(topics).map((topic) => (
            <button
              key={topic}
              className={activeTopic === topic ? "active" : ""}
              onClick={() => setActiveTopic(topic)}
            >
              {topics[topic].icon} {topic}
            </button>
          ))}

        </div>

      </section>

      {/* Selected Topic */}
      <section className="topic-card">

        <div className="topic-heading">
          <span>{topics[activeTopic].icon}</span>

          <div>
            <h2>{topics[activeTopic].title}</h2>
            <p>{topics[activeTopic].description}</p>
          </div>
        </div>

        <h3>Important Commands</h3>

        <div className="commands">

          {topics[activeTopic].commands.map((command, index) => (
            <div className="command" key={index}>
              <span>$</span>
              {command}
            </div>
          ))}

        </div>

      </section>

      {/* DevOps Workflow */}
      <section className="workflow">

        <h2>🔄 DevOps Workflow</h2>

        <div className="workflow-container">

          <div className="workflow-card">
            <span>1</span>
            <h3>Code</h3>
            <p>Write and manage application source code.</p>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-card">
            <span>2</span>
            <h3>Build</h3>
            <p>Build the application and create Docker images.</p>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-card">
            <span>3</span>
            <h3>Test</h3>
            <p>Test the application before deployment.</p>
          </div>

          <div className="arrow">→</div>

          <div className="workflow-card">
            <span>4</span>
            <h3>Deploy</h3>
            <p>Deploy the application using containers.</p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Learning DevOps | React + Docker + Git</p>
      </footer>

    </div>
  );
}

export default App;