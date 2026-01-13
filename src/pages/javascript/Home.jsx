import React, { useState, useEffect } from 'react'
import Header from '../../components/javascript/Header'
import { usePhilosophers } from '../../contexts/PhilosopherContext'
import { useFirestoreDb } from '../../contexts/FirestoreContext'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {
  const { philosophers, loading } = usePhilosophers();
  const db = useFirestoreDb();
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [dailyQuote, setDailyQuote] = useState(null)
  const [quoteLoading, setQuoteLoading] = useState(true)
  const [dailyDebate, setDailyDebate] = useState(null)
  const [debateLoading, setDebateLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue)
    }, 100)
    return () => clearTimeout(handler)
  }, [inputValue])

  useEffect(() => {
    const fetchQuote = async () => {
      setQuoteLoading(true)
      const quotesRef = collection(db, 'quotes')
      const q = query(quotesRef, orderBy('createdAt', 'desc'), limit(1))
      const snapshot = await getDocs(q)
      if (!snapshot.empty) {
        setDailyQuote(snapshot.docs[0].data())
      }
      setQuoteLoading(false)
    }
    fetchQuote()
  }, [db])

  useEffect(() => {
    const fetchDebate = async () => {
      setDebateLoading(true)
      const debatesRef = collection(db, 'debates')
      const q = query(debatesRef, orderBy('createdAt', 'desc'), limit(1))
      const snapshot = await getDocs(q)
      if (!snapshot.empty) {
        setDailyDebate(snapshot.docs[0].data())
      }
      setDebateLoading(false)
    }
    fetchDebate()
  }, [db])

  const filteredPhilosophers = philosophers.filter(philosopher =>
    philosopher.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  let debatePhilosophers = [];
  let debateTopic = '';
  let showDebateSection = false;
  if (dailyDebate && dailyDebate.debateData) {
    debateTopic = dailyDebate.debateData.topic || '';
    const participants = [dailyDebate.debateData.participant1, dailyDebate.debateData.participant2];
    debatePhilosophers = participants.map(name => philosophers.find(p => p.name === name)).filter(Boolean);
    showDebateSection = participants.every(Boolean) && debatePhilosophers.length === 2;
  }

  return (
    <div className="homePageContainer">
      <div className="layoutContainer">
        <Header />
        <div className="homeContentWrapper">
          <div className="homeContentContainer">
            <div className="homeHeaderSection">
              <div className="homeHeaderTextContainer">
                <p className="homePageTitle">PhilosoFeed</p>
                <p className="homePageSubtitle">Bite size philosophy for every day.</p>
                <div className="homeDailyQuoteSection">
                  <p className="homeDailyQuoteTitle">Daily Quote</p>
                  {quoteLoading ? (
                    <blockquote className="homeDailyQuote">Loading...</blockquote>
                  ) : dailyQuote ? (
                    <>
                      <blockquote className="homeDailyQuote">{dailyQuote.content}</blockquote>
                      <p className="homeDailyQuoteAuthor">— {dailyQuote.author}</p>
                    </>
                  ) : (
                    <blockquote className="homeDailyQuote">No quote found.</blockquote>
                  )}
                </div>
                {showDebateSection && (
                  <div className="homeDebateOfTheDaySection">
                    <div className="homeDebateOfTheDayTitle">Daily Debate</div>
                    <div className="homeDebateOfTheDayContent">
                      {debatePhilosophers[0] && (
                        <div className="homeDebatePhilosopher" key={debatePhilosophers[0].name}>
                          <img className="homeDebatePhilosopherImg" src={debatePhilosophers[0].imageUrl} alt={debatePhilosophers[0].name} />
                          <span className="homeDebatePhilosopherName">{debatePhilosophers[0].name}</span>
                        </div>
                      )}
                      <span className="homeDebateDiagonalLine"></span>
                      <span className="homeDebateVs">vs</span>
                      {debatePhilosophers[1] && (
                        <div className="homeDebatePhilosopher" key={debatePhilosophers[1].name}>
                          <img className="homeDebatePhilosopherImg" src={debatePhilosophers[1].imageUrl} alt={debatePhilosophers[1].name} />
                          <span className="homeDebatePhilosopherName">{debatePhilosophers[1].name}</span>
                        </div>
                      )}
                    </div>
                    <div className="homeDebateTopic">Topic: {debateTopic}</div>
                    <div className="homeDebateMessages">
                      {/* You can update this to use real debate data if available */}
                    </div>
                    <button
                      className="homeDebateNextButton"
                      onClick={() => navigate('/debate')}
                    >
                      Go to Debate
                    </button>
                  </div>
                )}
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
