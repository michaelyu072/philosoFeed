import Header from '../../components/javascript/Header'
import Message from '../../components/javascript/Message'
import '../css/Debate.css'

const Debate = () => {
  return (
    <div className="debatePageContainer">
      <div className="layoutContainer">
        <Header variant="debate" />
        <div className="debateContentWrapper">
          <div className="debateContentContainer">
            <h2 className="debateTitle">Philosophical Debate</h2>
            <Message
              avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDWJeeHi5NZVBw2nGSRmcDSnrE3fNMtT19MVw0y4BBXduyqSWGwxm4Qy_cGDGbv9AoM9Zk0BiLJNknrmrRc4IuzGTd7XW7oECiJWHwrxzd_rGNBjMcn1DmwKvUn9aLPtnGTGCGIzvPLb2k62ziSJLU_p8Ld4DfipB-zmHc2c-Xjpv41YHf4w7sqMU6EeVkxbVPAHimLJT36rnGntkeNjR-M0gBkIKawJ2bDP_dBot9NLWmAcqYfB5ykWmd9MiRft-kNgBvKAU3T--Cy"
              name="Marcus Aurelius"
              message="I believe that true knowledge comes from within, through introspection and questioning. What are your thoughts on this, Seneca?"
              timestamp="10:30 AM"
            />
            <Message
              avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCviEsH1jzPDLmvJn-FLsnMLriz_XjHi47_JQkv-2OuPqY-fU_MgOkzH7A36kQ1NVmhXjkDlVuTZqF0cp_kkhbwyglOfRUfSXCh_8eVe_Tv93F8ahuDHgjnJJN1umA7YtoszcgBw0wyUq-ILgoqpDWbdl6ROavqpw1dDb2z4-vWHRKfojj9MUQkSQVVdhPJ-to7ICQXZwWMNf62tYM5hDyuHxRbyL8aOPpMyD1P0i9hSnWumrHV-EMKK8BE1oy0ifmfsG8JhNi2wDTa"
              name="Seneca"
              message="While introspection is valuable, Marcus, I argue that knowledge is primarily gained through empirical observation and the study of the natural world. Our senses provide the foundation for understanding reality."
              timestamp="10:35 AM"
            />
            <Message
              avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCQR_nBHFoo4zDSCfQtl1babrsoFRPfBGrgjPKS4gwGClUZcXnOpZeZhRLkF2V3DDF3t4Fh53-Y7Xn2Nrq1xBfh0OZGzpDh3u4A3hEPa_FTNvtapehhxhQ-fuOSavCeX-l6-hCD0HnoYilZH88ijYicndSHfwF7PqpiGL0tSYW-ez04eIzM61qYUWYZMj9Br-62a7IjqQ8knSlRzzj31GDgKxaqnXFt4Inhnpm4EYn0QVUyyxNfjMdlbF2enYzKkZ_6P-SC_TkrPWeM"
              name="Marcus Aurelius"
              message="But can we truly trust our senses? They can be easily deceived. True knowledge must be grounded in reason and logic, not the fleeting impressions of the senses."
              timestamp="10:40 AM"
            />
            <Message
              avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuC5CknDmrkn2Ck4H61U0jAC_nttyaAOdrbHlkSJ74XerXdIXXmFVcLCU1xM1pzh_paBKxV5NeZvyfxVHHgHqHTkkYrXm2sykX_q7I2trJggxiiOgljg93W5SO1pEKwIpmg_aQt273JpXcConCjs6ca5Y4HUCeLi1Z4QZCOAdTA37LfHV2InEuafU0B1gM3fr3RVDGkNUOoFq7UB2I0AbfSZLJR_roW2aKvZ29JWB7iieM1s9cfc_4h4YRwMPaicJUFpaIemRknHOiln"
              name="Seneca"
              message="Reason and logic are essential tools, Marcus, but they must be applied to the data provided by our senses. Without empirical evidence, our reasoning can lead us astray. Consider the study of biology, for example. We learn about the natural world through observation and classification, not solely through introspection."
              timestamp="10:45 AM"
            />
            <Message
              avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA7mOGZAfTrcy_3ig-uURS5WTRu6x88ZWjscB8yjcNrFR6sH3JEZxA4tSPzhQfa-HmGCjlvOo5ouv9eUNkjutT6dm0IhEZT61Nn4r0DKKzFAsAXsCF_5hEY0FouVCYgHvrfFwgY1KFsKxpCdC_ZqlptzqzyX5T4ZCTDaJdRArtkFjvrjhxoH6sVSwklk_ZGQNun1Vzc3TL1u7RgEn9NQBW9Mg4m9LqCsdoLfOOe0znxRfB4IjGL8r2wyRD0_tbmGe-nJMpVQVVoB8ko"
              name="Marcus Aurelius"
              message="Yet, the forms of things, their essence, are not directly observable. We grasp them through reason, not through the senses. The concept of justice, for instance, is not something we can see or touch, but we understand it through our intellect."
              timestamp="10:50 AM"
            />
            <Message
              avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBW0CguXpYuBwbR4PDr26eseG2bpG-TOeh8Ak0fgJhkDREKmmB2uTgmydx3gfpQ9NaDjO3z8-NSWnZzCJqIJlMn95lfgVNe8Hm4tD3Wn9hZpfg7PimYJD6AizLeSVn1Ga0MVr8lgehrev3sekBNBH442IwIg4KfdxUciSWxAtJb50ZQuq9jkobaYunSVMNfFtL2YYYHxatRttjTLL7uZj6W5cIrzOGpSY6QbrnQUh9th0quUY1VhVklfYWcpdDfpyCb3DtyQ5EWnTEu"
              name="Seneca"
              message="The forms, as you call them, Marcus, are indeed important, but they are not separate from the physical world. They are inherent in the objects we observe. The form of a tree, its essence, is realized in the individual trees we see around us. We abstract the form from our sensory experience."
              timestamp="10:55 AM"
            />
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
