import { useEffect, useState } from 'react'
import { getFirestore, collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import Header from '../../components/javascript/Header'
import Message from '../../components/javascript/Message'
import '../css/Debate.css'

const firebaseConfig = {
  // TODO: Replace with your Firebase config
}

// Only initialize if not already initialized
if (!window._firebaseApp) {
  window._firebaseApp = initializeApp(firebaseConfig)
}
const db = getFirestore(window._firebaseApp)

const Debate = () => {
  const [debate, setDebate] = useState(null)
  const [loading, setLoading] = useState(true)

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

  if (loading) return <div className="debatePageContainer"><div className="layoutContainer"><Header variant="debate" /><div className="debateContentWrapper"><div className="debateContentContainer"><h2 className="debateTitle">Philosophical Debate</h2><p>Loading...</p></div></div></div></div>
  if (!debate) return <div className="debatePageContainer"><div className="layoutContainer"><Header variant="debate" /><div className="debateContentWrapper"><div className="debateContentContainer"><h2 className="debateTitle">Philosophical Debate</h2><p>No debate found.</p></div></div></div></div>

  // Support both debate.debate and debate.debateData for compatibility
  const debateObj = debate.debate || debate.debateData;
  if (!debateObj) return <div className="debatePageContainer"><div className="layoutContainer"><Header variant="debate" /><div className="debateContentWrapper"><div className="debateContentContainer"><h2 className="debateTitle">Philosophical Debate</h2><p>Malformed debate data.</p></div></div></div></div>

  return (
    <div className="debatePageContainer">
      <div className="layoutContainer">
        <Header variant="debate" />
        <div className="debateContentWrapper">
          <div className="debateContentContainer">
            <h2 className="debateTitle">{debateObj.topic}</h2>
            {debateObj.responses.map((resp, idx) => (
              <Message
                key={idx}
                avatarUrl={undefined}
                name={resp.participant}
                message={resp.content}
                timestamp={undefined}
              />
            ))}
            <div className="debateControlsContainer">
              <div className="debateControlsGrid">
                <div className="debateControlButton">
                  <div className="debateControlIconContainer">
                    <div className="debateControlIcon" data-icon="Pause" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="debateControlLabel">Pause</p>
                </div>
                <div className="debateControlButton">
                  <div className="debateControlIconContainer">
                    <div className="debateControlIcon" data-icon="Stop" data-size="20px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M200.73,40H55.27A15.29,15.29,0,0,0,40,55.27V200.73A15.29,15.29,0,0,0,55.27,216H200.73A15.29,15.29,0,0,0,216,200.73V55.27A15.29,15.29,0,0,0,200.73,40ZM200,200H56V56H200Z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="debateControlLabel">End Debate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Debate
