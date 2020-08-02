import React from 'react'
import IconLinks from './IconLinks'

import github from "../../assets/images/github-logo.svg";
import medium from "../../assets/images/medium-logo.svg"
import twitter from "../../assets/images/twitter-logo.svg"
import discord from "../../assets/images/discord-logo.svg"
import telegram from "../../assets/images/telegram-logo.svg"
import mail from "../../assets/images/mail-icon.svg"

const Footer = () => (
  <footer>
    <div className="icon-links-container">
      <IconLinks
        link={"https://github.com/opz/DALP-core"}
        icon={github}
      />
      <IconLinks
        link={"https://medium.com/@ethdapp"}
        icon={medium}
      />
      <IconLinks
        link={"https://twitter.com/apyfinance"}
        icon={twitter}
      />
      <IconLinks
        link={"https://discord.gg/uzqAsmZ"}
        icon={discord}
      />
      <IconLinks
        link={"https://t.me/apyfinancechat"}
        icon={telegram}
      />
      <IconLinks
        link={"mailto:will@apy.finance"}
        icon={mail}
      />
      {/*


      <IconLinks
        link={}
        icon={}
      /> */}
    </div>
  </footer>
)

export default Footer
