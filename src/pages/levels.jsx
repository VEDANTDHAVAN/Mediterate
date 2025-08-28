import React, { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import '../css/Levels.css';
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText';
import TextType from '../blocks/TextAnimations/TextType/TextType';

const Levels = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const levels = [
    { id: 1, title: "Information Basics", difficulty: "Beginner", description: "Learn the fundamentals of identifying reliable information sources", topics: ["Source credibility", "Fact vs. opinion", "Primary vs. secondary sources"], unlocked: true, completed: true, score: 95 },
    { id: 2, title: "Digital Footprints", difficulty: "Beginner", description: "Understand how your digital activities leave traces online", topics: ["Privacy settings", "Data tracking", "Digital identity"], unlocked: true, completed: true, score: 87 },
    { id: 3, title: "Misinformation Detection", difficulty: "Intermediate", description: "Develop skills to identify false or misleading information", topics: ["Fake news", "Deepfakes", "Verification techniques"], unlocked: true, completed: false, score: null },
    { id: 4, title: "Social Media Literacy", difficulty: "Intermediate", description: "Navigate social media platforms responsibly and critically", topics: ["Algorithm awareness", "Echo chambers", "Engagement tactics"], unlocked: true, completed: false, score: null },
    { id: 5, title: "Advanced Fact-Checking", difficulty: "Advanced", description: "Master professional fact-checking techniques and tools", topics: ["Cross-referencing", "Expert verification", "Statistical analysis"], unlocked: false, completed: false, score: null },
    { id: 6, title: "Media Creation Ethics", difficulty: "Advanced", description: "Learn ethical considerations in creating and sharing media", topics: ["Copyright law", "Fair use", "Attribution", "Consent"], unlocked: false, completed: false, score: null }
  ];

  return (
    <div className="levels-wrapper">
      <ParticleBackground />

      <div className="levels-container">
        <header className="levels-header">
          <h1><ShinyText text="Learning Levels" disabled={false} speed={3} className='custom-class' /></h1>
          <p><TextType text={"Progress through your Media Information Literacy journey"}
           disabled={false} speed={3} className='custom-class' /></p>
        </header>

        <div className="levels-grid">
          {levels.map((level) => (
            <div
              key={level.id}
              className={`level-card ${level.unlocked ? '' : 'locked'} ${selectedLevel === level.id ? 'selected' : ''}`}
              onClick={() => level.unlocked && setSelectedLevel(level.id === selectedLevel ? null : level.id)}
            >
              <div className="level-header">
                <h3>{level.title}</h3>
                <span className={`difficulty-badge ${level.difficulty.toLowerCase()}`}>{level.difficulty}</span>
              </div>

              <p className="level-description">{level.description}</p>

              <div className="level-status">
                {!level.unlocked && <span className="locked-text">🔒 Locked</span>}
                {level.unlocked && level.completed && (
                  <span className="completed-text">✅ Completed - Score: {level.score}%</span>
                )}
                {level.unlocked && !level.completed && (
                  <span className="available-text">🎯 Available</span>
                )}
              </div>

              {selectedLevel === level.id && level.unlocked && (
                <div className="level-details">
                  <h4>Topics covered:</h4>
                  <ul>
                    {level.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                  <button className={level.completed ? 'review-btn' : 'start-btn'}>
                    {level.completed ? 'Review Level' : 'Start Level'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="progress-section">
          <h2>Your Progress</h2>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(levels.filter(l => l.completed).length / levels.length) * 100}%` }}
            ></div>
          </div>
          <p>{levels.filter(l => l.completed).length} of {levels.length} levels completed</p>
        </div>
      </div>
    </div>
  );
};

export default Levels;
