import Avatar from './Avatar'
import '../css/Message.css'

const Message = ({ avatarUrl, name, message, timestamp }) => {
  return (
    <div className="messageContainer">
      <Avatar imageUrl={avatarUrl} />
      <div className="messageContentWrapper">
        <div className="messageHeader">
          {timestamp && (
            <div className="messageHeaderWithTimestamp">
              <p className="messageAuthorName">{name}</p>
              <p className="messageTimestamp">{timestamp}</p>
            </div>
          )}
          {!timestamp && (
            <p className="messageAuthorName">{name}</p>
          )}
          <p className="messageText">{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Message

