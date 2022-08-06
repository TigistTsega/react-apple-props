/** @format */

import React from "react";
import banker_logo from "../images/home/banker.png";
import apple_TV_logo from "../images/icons/apple-tv-logo.png";
import watch_logo from "../images/icons/watch-series5-logo.png";
import arcade_logo from "../images/icons/arcade.png";
import FirstThree from "./firstThree/FirstThree";
import LastThree from "./lastThree/LastThree";
import YouTubeVideos from "./YouTubeVideos";

import "./YouTubeVideos";

function Main() {
  return (
    <div>
      <FirstThree
        new='New'
        myClassName='first-hightlight-wrapper'
        new='Get supercharged for college.'
        black='black'
        title='Save on Mac or iPad'
        orderOrBuy='Order'
      />

      <FirstThree
        myClassName='second-hightlight-wrapper'
        new='New'
        black='black'
        title='MacBook Pro 13"'
        description='Supercharged by Apple M2 chip'
        white='white'
        orderOrBuy='Buy'
      />

      <FirstThree
        myClassName='third-hightlight-wrapper'
        title='iPhone 13 Pro'
        description='Pro cameras. Pro display. Pro performance.'
        price='From $24.95/mo. or $599 with trade‑in.'
        orderOrBuy='Buy'
      />

      <LastThree
        myClassName='fourth-heghlight-wrapper'
        title='iPhone 13'
        description='Just the right amount of everything.'
        price='From $18.70/mo. or $499 with trade‑in.'
        sup='1'
        linkOne='Learn more'
        linkTwo='Apply now'
        // white='white'
        rightTitle='MacBook Air.'
        rightLinkOne='Learn more'
        rightLinkTwo='Buy'
      />

      <LastThree
        myClassName='fifth-heghlight-wrapper'
        logoPic={apple_TV_logo}
        logoAlt='apple-tv-logo'
        bankerLogo={banker_logo}
        bankerAlt='banker'
        watchMore='Watch now on the Apple TV App'
        watchLogo={watch_logo}
        watchAlt='watch logo'
        rightDescriptionOne='With the Always-On Retina display.'
        rightDescriptionTwo='You’ve never seen a watch like this.'
        rightLinkOne='Learn more'
        rightLinkTwo='Buy'
      />

      <LastThree
        myClassName='sixth-heghlight-wrapper'
        logoPic={arcade_logo}
        logoAlt='arcade logo'
        whiteDescription='white'
        description='Agent 8 is a small hero on a big mission.'
        linkOne='Play now'
        sup2='2'
        linkTwo='Learn about Apple Arcade'
        rightTitle='Apple Card Monthly Installments'
        rightDescriptionOne='Pay for your next iPhone over time, interest-free with Apple
									Card.'
        rightLinkOne='Learn more'
        rightLinkTwo='Apply now'
      />
      <section className='YouTubeVideosWrapper top-100'>
        <YouTubeVideos />
      </section>
    </div>
  );
}

export default Main;
