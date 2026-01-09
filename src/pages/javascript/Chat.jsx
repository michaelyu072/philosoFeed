import Header from '../../components/javascript/Header'
import Message from '../../components/javascript/Message'
import Avatar from '../../components/javascript/Avatar'
import '../css/Chat.css'

const Chat = () => {
  return (
    <div className="chatPageContainer">
      <div className="layoutContainer">
        <Header variant="chat" />
        <div className="chatContentWrapper">
          <div className="chatContentContainer">
            <div className="chatHeaderSection">
              <p className="chatTitle">Socrates</p>
            </div>
            <Message
              avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBELwPI5TvTwdPqqIIKx3TqQMN-zL-baO1HK1Oaz88hTFZaPoxFYyI_Rd0iVm0KeUhXcTBk3PZTJTFHhIqvob-pW9nr0GkTF-a19gJlik6LXnQwJyK3Mqc2OkWMG-XU2W4zrZGTcGP44tBu8iLe-wZUmWN0GFnXUTs6ExTRz9822tEcgEtyPihI_NRQssZaX5XbHfOfFUnLxYYaQyjDLgO5z_CgvP8HYcuRrr9URM5WexOxHRJCERkM_ONcEFKZ482jJ_cX1MTrY-Ql"
              name="Socrates"
              message="Greetings, seeker of wisdom. What questions weigh upon your mind today?"
            />
            <Message
              avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCj6rI540C_oV7k17k9y7I-1DtaI7Bv_Ve9TVJMx3c9L5__W6Ctddl-vVE1SLctha10KDQhdnE49ixXTOSni_53q5Xw_QkduWMHCtm-naU5LQWC6-TD85YWNnJKviu18Xd8jJEtaK2-ig5WUBnr7_CDTj-h_azJ13ZAa1NLY656US_Xtrw7Map66ShuqopDVzZYsWcjN5aPuivU0oTDKFDFfqzJUV2ISLhXd8aEiVKuJdkdeO10yqay74pP13QRIkTWXpakhi4zO6GM"
              name="User"
              message="Hello, Socrates. I'm struggling with the concept of happiness. What is true happiness?"
            />
            <Message
              avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA6KGYOLG7J7qSUXOcolcS4wLggAI3YojvJvHWDE56hWrXUkhxyAZtrUdhMuUGuzCArn2bdNJ2R_jWvNkuKK9tKfooj9h4UKL4xWbyrIZzDOkUTqyMsS1TEpHSF9XM8gShRSw9eZOJJsH3hyPIIP0YYCZ2cVorF4mZffKkcjmmATJFG-NSQhac0kQ8kVNtwyLWQgZxfFt-2-hiitb89GQAuz5x5wXTBNYJM2yWNwCPxKNpT2ZoedUmX6jx2h_xuet46skhg66XOrXX9"
              name="Socrates"
              message="Ah, a question as old as time itself. Tell me, what do you believe brings happiness?"
            />
            <div className="chatInputSection">
              <Avatar imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDDmOmIv9mxyMDeAVgc7o0UDsxk3BW7zCi2U6tO2dxs-_Lzo2nu4M8mPGLHYBS6tyJ-6Fup59Iq5JWisOSiQk77lQdg6dR3DutYjBclpDXG_LztxkM857fvIIW8EQ-rbjkKTHTTI8OulwMJ7eLkUqlTesbGlD6dmKYAbYxFw-OMoq-VGNkgMKwZN76nOCe6FzvasJWHQlQKUhocv6PaOXr4PQcv0jU-EXjLYY0SVtUECDU5OxIkPpixzFxGSQEzQm6-9E_wqzyghT0l" />
              <label className="chatInputLabel">
                <div className="chatInputContainer">
                  <input
                    placeholder="Ask Socrates..."
                    className="chatInputField"
                    value=""
                  />
                  <div className="chatInputActionsContainer">
                    <div className="chatInputActions">
                      <div>
                        <button className="chatImageButton">
                          <div className="chatImageButtonIcon" data-icon="Image" data-size="20px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                      <button className="chatSendButton">
                        <span className="chatSendButtonText">Send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
