import React from "react";
import styled from "styled-components";
import HeaderTwo from "../Components/Header/HeaderTwo";

const Container = styled.div`
  height: 100vh;
  padding: 10vh;
  font-family: Lexend;
  background-color: #ffffff;
`;
const HeadCon = styled.div`
  position: sticky;
  width: 100%;
  z-index: 100;
  padding-bottom: 5vh;
`;

const Wrapper = styled.div`
  border-radius: 8px;
  display: flex;
  padding: 5vh;
  gap: 5vh;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
const Left = styled.div`
  flex: 0.9;
  border-radius: 8px;
  height: 75vh;
  background-color: #fafafa;
  color: #000000;
  padding: 2vh;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const Right = styled.div`
  flex: 3;
`;

const RightContent = styled.div`
  height: 75vh;
  overflow-y: scroll;
`;

const Button = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-family: Lexend;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: auto;
  opacity: 0.7;
  color: #00337c;
  opacity: ${({ active }) => (active ? "1" : "0.7")};

  &:hover {
    opacity: 1;
    color: #00337c;
  }
`;

const Circle = styled.div`
  background-color: #00337c;
  color: #ffffff;
  border-radius: 100%;
  width: 2.2vw;
  height: 2.2vw;
  padding: 1vh;
  margin-right: 1vh;
  display: flex;
  padding: auto;
  padding-left: 1.5vh;
`;

const Center = styled.div`
  margin: auto;
  margin-left: 0.5vh;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Paragraph = styled.div`
  font-size: 1rem;
  margin-left: 2vh;
  padding: 1vh;
  color: var(--Gray-2, #4f4f4f);
  font-style: normal;
  font-weight: 300;
  line-height: 24px; /* 150% */
  font-size: 16px;
`;

const Last = styled.div`
  font-family: Lexend;
  font-size: 16px;
  font-weight: 200;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
  margin-bottom: 3vh;
`;

const CookiePolicy = () => {
  const scrollToTarget = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HeadCon>
        <HeaderTwo />
      </HeadCon>
      <Container>
        <Wrapper>
          <Left>
            <Button onClick={() => scrollToTarget("introduction")}>
              <Circle>1 </Circle> <Center>Introduction</Center>
            </Button>
            <Button onClick={() => scrollToTarget("what-are-cookies")}>
              <Circle>2</Circle> <Center>What Are Cookies?</Center>
            </Button>
            <Button
              onClick={() => scrollToTarget("cookies-used-on-the-website")}
            >
              <Circle>3</Circle> <Center>Cookies Used on the Website</Center>
            </Button>
            <Button onClick={() => scrollToTarget("third-party-cookies")}>
              <Circle>4</Circle> <Center>Third-Party Cookies</Center>
            </Button>
            <Button onClick={() => scrollToTarget("how-to-manage-cookies")}>
              <Circle>5</Circle> <Center>How to Manage Cookies</Center>
            </Button>
            <Button
              onClick={() => scrollToTarget("changes-to-this-cookie-policy")}
            >
              <Circle>6</Circle> <Center>Changes to this Cookie Policy</Center>
            </Button>
            <Button onClick={() => scrollToTarget("contact-us")}>
              <Circle>7</Circle> <Center>Contact Us</Center>
            </Button>
          </Left>
          <Right>
            <RightContent>
              <h1>Cookie Policy</h1>
              <Last>Last Updated: 15 September 2023</Last>

              <Section id="introduction">
                <h2>1. Introduction</h2>
                <Paragraph>
                  Renvisa B2B Marketplace (hereinafter referred to as "the
                  Website") uses cookies to enhance your browsing experience and
                  collect user statistics. This Cookie Policy explains how we
                  use cookies and your options for managing them.
                </Paragraph>
              </Section>
              <Section id="what-are-cookies">
                <h2>2. What Are Cookies?</h2>
                <Paragraph>
                  Cookies are small text files stored on your device by websites
                  you visit. They serve various purposes, such as recognizing
                  you when you return to a website and improving your browsing
                  experience. Cookies can be temporary (session cookies) or
                  persistent (persistent cookies) and may be set by the website
                  you are visiting (first-party cookies) or by third-party
                  services integrated into the website.
                </Paragraph>
              </Section>
              <Section id="cookies-used-on-the-website">
                <h2>3. Cookies Used on the Website</h2>
                <Paragraph>
                  a. Necessary Cookies: These cookies are essential for the
                  proper functioning of the Website and cannot be disabled.
                </Paragraph>
                <Paragraph>
                  b. Customization Cookies: These cookies enhance your
                  experience by remembering your preferences and settings.
                </Paragraph>
                <Paragraph>
                  c. Analytics Cookies: These cookies help us understand how
                  users interact with our Website. They include:
                </Paragraph>
                <Paragraph>
                  - Google Analytics: These cookies collect anonymous data about
                  user behavior on the Website. You can learn more about Google
                  Analytics cookies [here](link to Google Analytics info).
                </Paragraph>
              </Section>
              <Section id="third-party-cookies">
                <h2>4. Third-Party Cookies</h2>
                <Paragraph>
                  The Website may also use third-party services or integrations
                  that set cookies. These cookies are subject to the respective
                  third parties' cookie policies. We do not have control over
                  these cookies, but we strive to work with reputable providers
                  who prioritize user privacy.
                </Paragraph>
              </Section>
              <Section id="how-to-manage-cookies">
                <h2>5. How to Manage Cookies</h2>
                <Paragraph>
                  You have the option to manage cookies through your browser
                  settings. You can:
                </Paragraph>
                <Paragraph>- Accept all cookies by default.</Paragraph>
                <Paragraph>
                  - Configure your browser to notify you before accepting
                  cookies, allowing you to accept or reject them on a
                  case-by-case basis.
                </Paragraph>
                <Paragraph>
                  - Block all cookies or only third-party cookies.
                </Paragraph>
                <Paragraph>
                  Please refer to your browser's help section for specific
                  instructions on managing cookies. Be aware that blocking
                  cookies may impact your browsing experience on the Website.
                </Paragraph>
              </Section>
              <Section id="changes-to-this-cookie-policy">
                <h2>6. Changes to this Cookie Policy</h2>
                <Paragraph>
                  Renvisa B2B Marketplace reserves the right to modify or update
                  this Cookie Policy. Any changes will be posted on this page,
                  and the "Last Updated" date will be revised accordingly.
                  Continued use of the Website after such modifications
                  constitutes acceptance of the updated Cookie Policy.
                </Paragraph>
              </Section>
              <Section id="contact-us">
                <h2>7. Contact Us</h2>
                <Paragraph>
                  If you have any questions or concerns about our Cookie Policy,
                  please contact us at [Contact Information].
                </Paragraph>
              </Section>
              <Paragraph>
                By using the Renvisa B2B Marketplace, you consent to the use of
                cookies as described in this policy.
              </Paragraph>
            </RightContent>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default CookiePolicy;
