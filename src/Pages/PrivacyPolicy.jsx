import React from "react";
import styled from "styled-components";
import HeaderTwo from "../Components/Header/HeaderTwo";

const Container = styled.div`
  height: 120vh;
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
  height: 90vh;
  background-color: #fafafa;
  color: #000000;
  padding: 2vh;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const Right = styled.div`
  flex: 3;
`;

const RightContent = styled.div`
  height: 90vh;
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

const PrivacyPolicy = () => {
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
            <Button onClick={() => scrollToTarget("information-we-collect")}>
              <Circle>2</Circle> <Center>Information We Collect</Center>
            </Button>
            <Button
              onClick={() => scrollToTarget("how-we-use-your-information")}
            >
              <Circle>3</Circle> <Center>How We Use Your Information</Center>
            </Button>
            <Button onClick={() => scrollToTarget("data-security")}>
              <Circle>4</Circle> <Center>Data Security</Center>
            </Button>
            <Button
              onClick={() =>
                scrollToTarget("cookies-and-tracking-technologies")
              }
            >
              <Circle>5</Circle>{" "}
              <Center>Cookies and Tracking Technologies</Center>
            </Button>
            <Button onClick={() => scrollToTarget("third-party-services")}>
              <Circle>6</Circle> <Center>Third-Party Services</Center>
            </Button>
            <Button onClick={() => scrollToTarget("information-sharing")}>
              <Circle>7</Circle> <Center>Information Sharing</Center>
            </Button>
            <Button onClick={() => scrollToTarget("access-and-control")}>
              <Circle>8</Circle> <Center>Access and Control</Center>
            </Button>
            <Button onClick={() => scrollToTarget("childrens-privacy")}>
              <Circle>9</Circle> <Center>Children's Privacy</Center>
            </Button>
            <Button
              onClick={() => scrollToTarget("changes-to-this-privacy-policy")}
            >
              <Circle>10</Circle>{" "}
              <Center>Changes to this Privacy Policy</Center>
            </Button>
            <Button onClick={() => scrollToTarget("contact-us")}>
              <Circle>11</Circle> <Center>Contact Us</Center>
            </Button>
            <Button onClick={() => scrollToTarget("acknowledgment")}>
              <Circle>12</Circle> <Center>Acknowledgment</Center>
            </Button>
          </Left>
          <Right>
            <RightContent>
              <h1>Privacy Policy</h1>
              <Last>Last Updated: 15 September 2023</Last>

              <Section id="introduction">
                <h2>1. Introduction</h2>
                <Paragraph>
                  Welcome to Renvisa.com (hereinafter referred to as "the
                  Website"). At Renvisa.com, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your information when you use our services.
                </Paragraph>
              </Section>
              <Section id="information-we-collect">
                <h2>2. Information We Collect</h2>
                <Paragraph>
                  a. Personal Information: We may collect personal information
                  that you provide when creating an account, such as your name,
                  email address, company name, and contact information.
                </Paragraph>
                <Paragraph>
                  b. Transaction Information: When you engage in transactions on
                  the Website, we collect information related to those
                  transactions, including product details, payment information,
                  and shipping details.
                </Paragraph>
                <Paragraph>
                  c. Log Data: We automatically collect certain information when
                  you visit our Website, including your IP address, browser
                  type, operating system, and pages visited.
                </Paragraph>
              </Section>
              <Section id="how-we-use-your-information">
                <h2>3. How We Use Your Information</h2>
                <Paragraph>
                  a. We use your personal information to create and manage your
                  account, process transactions, and provide customer support.
                </Paragraph>
                <Paragraph>
                  b. We may use your information to send you important updates,
                  promotions, and marketing communications. You can opt out of
                  these communications at any time.
                </Paragraph>
              </Section>
              <Section id="data-security">
                <h2>4. Data Security</h2>
                <Paragraph>
                  We take data security seriously and employ reasonable measures
                  to protect your information from unauthorized access,
                  disclosure, alteration, and destruction.
                </Paragraph>
              </Section>
              <Section id="cookies-and-tracking-technologies">
                <h2>5. Cookies and Tracking Technologies</h2>
                <Paragraph>
                  We use cookies and similar tracking technologies to enhance
                  your experience on our Website. You can adjust your browser
                  settings to disable cookies, but this may affect your ability
                  to use certain features of the Website.
                </Paragraph>
              </Section>
              <Section id="third-party-services">
                <h2>6. Third-Party Services</h2>
                <Paragraph>
                  We may use third-party service providers to assist us in
                  delivering our services, and they may have access to your
                  information. However, they are required to use your
                  information only for the purposes of providing the services we
                  request.
                </Paragraph>
              </Section>
              <Section id="information-sharing">
                <h2>7. Information Sharing</h2>
                <Paragraph>
                  We do not sell, trade, or rent your personal information to
                  third parties for marketing purposes. However, we may share
                  your information with trusted partners to improve our services
                  or for legal reasons, including compliance with applicable
                  laws and regulations.
                </Paragraph>
              </Section>
              <Section id="access-and-control">
                <h2>8. Access and Control</h2>
                <Paragraph>
                  You have the right to access, correct, or delete your personal
                  information. You can do this by logging into your account or
                  by contacting our customer support team.
                </Paragraph>
              </Section>
              <Section id="childrens-privacy">
                <h2>9. Children's Privacy</h2>
                <Paragraph>
                  Our services are not intended for individuals under the age of
                  18, and we do not knowingly collect personal information from
                  children.
                </Paragraph>
              </Section>
              <Section id="changes-to-this-privacy-policy">
                <h2>10. Changes to this Privacy Policy</h2>
                <Paragraph>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. Any updates will be posted on this page,
                  and the revised policy will be effective immediately upon
                  posting.
                </Paragraph>
              </Section>
              <Section id="contact-us">
                <h2>11. Contact Us</h2>
                <Paragraph>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy, please contact us at [Contact
                  Information].
                </Paragraph>
              </Section>
              <Section id="acknowledgment">
                <h2>12. Acknowledgment</h2>
                <Paragraph>
                  By using Renvisa.com, you agree to the terms and conditions
                  outlined in this Privacy Policy.
                </Paragraph>
              </Section>
            </RightContent>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
