import React, { useState, useEffect } from 'react'
import Header from '../../components/javascript/Header'
import philosophersData from '../../philosophers.json'
import '../css/Home.css'

const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue)
    }, 100)
    return () => clearTimeout(handler)
  }, [inputValue])

  const filteredPhilosophers = philosophersData.filter(philosopher =>
    philosopher.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="homePageContainer">
      <div className="layoutContainer">
        <Header variant="home" />
        <div className="homeContentWrapper">
          <div className="homeContentContainer">
            <div className="homeHeaderSection">
              <div className="homeHeaderTextContainer">
                <p className="homePageTitle">PhilosoFeed</p>
                <p className="homePageSubtitle">Bite size philosophy for every day.</p>
                <div className="homeDailyQuoteSection">
                  <p className="homeDailyQuoteTitle">Daily Quote</p>
                  <blockquote className="homeDailyQuote">"The unexamined life is not worth living."</blockquote>
                  <p className="homeDailyQuoteAuthor">— Socrates</p>
                </div>
                <div className="homeDebateOfTheDaySection">
                  <div className="homeDebateOfTheDayTitle">Daily Debate</div>
                  <div className="homeDebateOfTheDayContent">
                    <div className="homeDebatePhilosopher">
                      <img className="homeDebatePhilosopherImg" src={philosophersData[0].imageUrl} alt={philosophersData[0].name} />
                      <span className="homeDebatePhilosopherName">{philosophersData[0].name}</span>
                    </div>
                    <span className="homeDebateDiagonalLine"></span>
                    <span className="homeDebateVs">vs</span>
                    <div className="homeDebatePhilosopher">
                      <img className="homeDebatePhilosopherImg" src={philosophersData[1].imageUrl} alt={philosophersData[1].name} />
                      <span className="homeDebatePhilosopherName">{philosophersData[1].name}</span>
                    </div>
                  </div>
                  <div className="homeDebateTopic">Topic: What is the nature of reality?</div>
                  <a className="homeDebateViewButton" href="/debate">View Debate</a>
                </div>
              </div>
            </div>
            <div className="homeSearchSection">
              <label className="homeSearchLabel">
                <div className="homeSearchInputContainer">
                  <div className="homeSearchIconContainer" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input 
                    placeholder="Search for a philosopher" 
                    className="homeSearchInput" 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                  />
                </div>
              </label>
            </div>
            <h2 className="homeFeaturedTitle">Featured Philosophers</h2>
            <div className="homePhilosophersGrid">
              {filteredPhilosophers.map((philosopher, index) => (
                <div key={index} className="homePhilosopherCard">
                  <div className="homePhilosopherImageContainer">
                    <div className="homePhilosopherImage" style={{ backgroundImage: `url("${philosopher.imageUrl}")` }}></div>
                  </div>
                  <div>
                    <p className="homePhilosopherName">{philosopher.name}</p>
                    <p className="homePhilosopherDescription">{philosopher.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
