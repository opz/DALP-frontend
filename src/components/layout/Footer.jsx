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
        link={"https://medium.com/"}
        icon={medium}
      />
      <IconLinks
        link={"https://twitter.com/home"}
        icon={twitter}
      />
      <IconLinks
        link={"https://discord.com/new"}
        icon={discord}
      />
      <IconLinks
        link={"https://telegram.org/"}
        icon={telegram}
      />
      <IconLinks
        link={"https://telegram.org/"}
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
