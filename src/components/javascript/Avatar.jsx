import '../css/Avatar.css'

const Avatar = ({ imageUrl, size = 'default' }) => {
  const sizeClass = size === 'small' ? 'avatarSizeSmall' : 'avatarSizeDefault'
  
  return (
    <div
      className={`avatarContainer ${sizeClass}`}
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
  )
}

export default Avatar

