import React, { Fragment, FunctionComponent, useCallback, useEffect, useMemo } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiImage, EuiPage, EuiPageBody, EuiText } from "@elastic/eui";
import './Marketing.css';
import ScrollFadeIn from "./ScrollPageContent";

const digitalIcons = [
  { alt: "SEO", src: "/webp-icons/SEO.webp", text: "SEO" },
  { alt: "SEM", src: "/webp-icons/SEM.webp", text: "SEM" },
  { alt: "Content", src: "/webp-icons/CONTENT.webp", text: "CONTENT" },
  { alt: "Social Media", src: "/webp-icons/SOCIAL MEDIA.webp", text: "SOCIAL MEDIA" },
  { alt: "Influencers", src: "/webp-icons/INFLUENCER.webp", text: "INFLUENCERS" },
];

const MarketingPage: FunctionComponent = () => {
  const preloadImages = useCallback(() => {
    digitalIcons.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);


  const renderDigitalIcons = useCallback(() => (
    digitalIcons.map((item, index) => (
      <EuiFlexItem grow={false} key={index}>
        <EuiImage
          key={index}
          style={{ width: '60px', height: 'auto' }}
          alt={item.alt}
          src={item.src}
        />
        <EuiText textAlign='center'>{item.text}</EuiText>
      </EuiFlexItem>
    ))
  ), []);

  const marketingTitle = useMemo(() => (
    <h2 className="marketing-mobile-title marketing-title">MARKETING</h2>
  ), []);

  const tiltedPhoneImage = useMemo(() => (
    <EuiImage
      className="tilted-phone-left"
      alt="tilted-phone"
      src="/webp-outdoor/OUTDOOR DISPLAY TWO.webp"
    />
  ), []);

  const marketingSectionContent = useMemo(() => (
    <Fragment>
      <h2>MARKETING</h2>
      <p>Software development is the heart of modern innovation, transforming creative ideas into dynamic digital experiences. It enables the creation of customized solutions that cater to unique business needs, enhancing efficiency and user engagement. By integrating cutting-edge technologies, software development empowers brands to stay ahead in a competitive market. It also fosters collaboration, allowing creative minds to bring their visions to life through seamless integration. Ultimately, it drives the future of digital creativity, blending technical expertise with artistic expression.</p>
    </Fragment>
  ), []);

  const digitalScrollContent = useMemo(() => (
    <Fragment>
      <h2>Digital</h2>
      <EuiImage
        className="scroll-button"
        alt="Scroll Button"
        src="/webp-icons/RIGHT SCROLL BUTTON.webp"
      />
    </Fragment>
  ), []);

  const directPromotionsHeader = useMemo(() => (
    <Fragment>
      <h2>DIRECT PROMOTIONS</h2>
      <EuiImage
        className="scroll-button"
        alt="Scroll Button"
        src="/webp-icons/RIGHT SCROLL BUTTON.webp"
      />
    </Fragment>
  ), []);

  const rightTiltedPhoneImage = useMemo(() => (
    <EuiImage
      className="tilted-phone-right"
      alt="tilted-phone"
      src="/webp-outdoor/OUTDOOR DISPLAY TWO.webp"
    />
  ), []);

  return (
    <EuiPage style={{ background: 'transparent', overflow: 'hidden' }}>
      <EuiPageBody id="marketing-section">
        <EuiFlexGroup justifyContent="center" alignItems="center" responsive wrap>
          <EuiFlexItem grow={false}>
            <ScrollFadeIn slideFromLeft={true}>
              {marketingTitle}
              <div>
                {tiltedPhoneImage}
              </div>
            </ScrollFadeIn>
          </EuiFlexItem>
          <EuiFlexItem>
            <ScrollFadeIn slideFromLeft={false}>
              <div className="marketing-section">
                {marketingSectionContent}
              </div>
              <div className="digital-scroll">
                {digitalScrollContent}
              </div>
            </ScrollFadeIn>
            <EuiFlexGroup responsive wrap className="social-contents">
              {renderDigitalIcons()}
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiFlexGroup justifyContent="center" alignItems="center" responsive wrap>
          <EuiFlexItem>
            <ScrollFadeIn slideFromLeft={true}>
              <div className="digital-scroll">
                {directPromotionsHeader}
              </div>
              <div className="responsive-container">
                <EuiImage
                  src="/webp-icons/SOCIAL MEDIA.webp"
                  alt="Icon"
                  style={{ width: '200px', height: 'auto', flex: '0 0 auto' }}
                />
                <div className="list-items" style={{ flex: '1 1 auto', paddingLeft: '16px' }}>
                  <ul>
                    <li>SALES</li>
                    <li>CONTESTS</li>
                    <li>CAMPAIGNS</li>
                  </ul>
                </div>
              </div>
            </ScrollFadeIn>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <ScrollFadeIn slideFromLeft={false}>
              <div style={{ alignItems: 'end', paddingRight: '150px' }}>
                {rightTiltedPhoneImage}
              </div>
            </ScrollFadeIn>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPageBody>
    </EuiPage>
  );
};

export default React.memo(MarketingPage);


