import { useEffect, useState } from 'react'
import { getFirestore, collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import Header from '../../components/javascript/Header'
import philosophersData from '../../philosophers.json'
import '../css/Debate.css'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
}

if (!window._firebaseApp) {
  window._firebaseApp = initializeApp(firebaseConfig)
}
const db = getFirestore(window._firebaseApp)

const Debate = () => {
  const [debate, setDebate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [shownIdx, setShownIdx] = useState(0)

  useEffect(() => {
    const fetchDebate = async () => {
      setLoading(true)
      const debatesRef = collection(db, 'debates')
      const q = query(debatesRef, orderBy('createdAt', 'desc'), limit(1))
      const snapshot = await getDocs(q)
      if (!snapshot.empty) {
        setDebate(snapshot.docs[0].data())
      }
      setLoading(false)
    }
    fetchDebate()
  }, [])

  if (loading) return (
    <div className="debatePageContainer">
      <div className="layoutContainer">
        <Header />
        <div className="debateContentWrapper">
          <div className="debateContentContainer">
            <h2 className="debateTitle">Philosophical Debate</h2>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  )
  if (!debate) return (
    <div className="debatePageContainer">
      <div className="layoutContainer">
        <Header />
        <div className="debateContentWrapper">
          <div className="debateContentContainer">
            <h2 className="debateTitle">Philosophical Debate</h2>
            <p>No debate found.</p>
          </div>
        </div>
      </div>
    </div>
  )

  const debateObj = debate.debate || debate.debateData;
  if (!debateObj) return (
    <div className="debatePageContainer">
      <div className="layoutContainer">
        <Header />
        <div className="debateContentWrapper">
          <div className="debateContentContainer">
            <h2 className="debateTitle">Philosophical Debate</h2>
            <p>Malformed debate data.</p>
          </div>
        </div>
      </div>
    </div>
  )

  // Map participant names to their imageUrl from philosophers.json
  const getAvatarUrl = (name) => {
    const match = philosophersData.find(p => p.name === name)
    return match ? match.imageUrl : undefined
  }

  return (
    <div className="debatePageContainer">
      <div className="layoutContainer">
        <Header />
        <div className="debateContentWrapper">
          <div className="debateContentContainer">
            <h2 className="debateTitle">{debateObj.topic}</h2>
            {/* Show debate messages up to shownIdx */}
            {debateObj.responses.slice(0, shownIdx + 1).map((resp, idx) => (
              <div className="debateMessageRow debateSlackMessage debateFadeIn" key={idx}>
                <img
                  className="debateAvatar"
                  src={getAvatarUrl(resp.participant) || ''}
                  alt={resp.participant}
                />
                <div className="debateMessageContent">
                  <div className="debateMessageHeader">
                    <span className="debateMessageName">{resp.participant}</span>
                  </div>
                  <div className="debateMessageText">{resp.content}</div>
                </div>
              </div>
            ))}
            <div className="debateControlsContainer">
              <button
                className="debateNextButton"
                onClick={() => setShownIdx(idx => idx + 1)}
                disabled={shownIdx >= debateObj.responses.length - 1}
              >
                <span className="debateNextIcon">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Debate
