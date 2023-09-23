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
  /* color: ${({ active }) => (active ? "#1ecc66" : "#000000")}; */

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

const TermsOfService = () => {
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
            <Button onClick={() => scrollToTarget("acceptance-of-terms")}>
              <Circle>1 </Circle> <Center>Acceptance of Terms</Center>
            </Button>
            <Button onClick={() => scrollToTarget("user-accounts")}>
              <Circle>2</Circle> <Center>User Accounts</Center>
            </Button>
            <Button onClick={() => scrollToTarget("use-of-the-website")}>
              <Circle>3</Circle> <Center>Use of the Website</Center>
            </Button>
            <Button onClick={() => scrollToTarget("listings-and-transactions")}>
              <Circle>4</Circle> <Center>Listings and Transactions</Center>
            </Button>
            <Button onClick={() => scrollToTarget("intellectual-property")}>
              <Circle>5</Circle> <Center>Intellectual Property</Center>
            </Button>
            <Button onClick={() => scrollToTarget("privacy-policy")}>
              <Circle>6</Circle> <Center>Privacy Policy</Center>
            </Button>
            <Button onClick={() => scrollToTarget("termination")}>
              <Circle>7</Circle> <Center>Termination</Center>
            </Button>
            <Button onClick={() => scrollToTarget("limitation-of-liability")}>
              <Circle>8</Circle> <Center>Limitation of Liability</Center>
            </Button>
            <Button
              onClick={() => scrollToTarget("changes-to-terms-and-conditions")}
            >
              <Circle>9</Circle>{" "}
              <Center>Changes to Terms and Conditions</Center>
            </Button>
            <Button onClick={() => scrollToTarget("governing-law")}>
              <Circle>10</Circle> <Center>Governing Law</Center>
            </Button>
          </Left>
          <Right>
            <RightContent>
              <h1>Terms and Conditions</h1>
              <Last>Last Updated: 14 September 2023</Last>

              <Section id="acceptance-of-terms">
                <h2>1. Acceptance of Terms</h2>
                <Paragraph>
                  By using Renvisa.com (hereinafter referred to as "the
                  Website"), you agree to abide by the following terms and
                  conditions. If you do not agree with these terms and
                  conditions, please do not use the Website.
                </Paragraph>
              </Section>
              <Section id="user-accounts">
                <h2>2. User Accounts</h2>
                <Paragraph>
                  a. To access certain features of the Website, you may be
                  required to create a user account. You are responsible for
                  maintaining the confidentiality of your account information.
                </Paragraph>
                <Paragraph>
                  b. You agree to provide accurate and up-to-date information
                  during the registration process and to update this information
                  promptly if it changes.
                </Paragraph>
                <Paragraph>
                  c. You are solely responsible for all activities that occur
                  under your account.
                </Paragraph>
              </Section>
              <Section id="use-of-the-website">
                <h2>3. Use of the Website</h2>
                <Paragraph>
                  a. You agree to use the Website in compliance with all
                  applicable laws and regulations.
                </Paragraph>
                <Paragraph>
                  b. You agree not to engage in any activities that may disrupt
                  or interfere with the proper functioning of the Website or its
                  services.
                </Paragraph>
              </Section>
              <Section id="listings-and-transactions">
                <h2>4. Listings and Transactions</h2>
                <Paragraph>
                  a. The Website provides a platform for B2B industrial product
                  listings and transactions. Renvisa.com does not take part in
                  these transactions and is not responsible for the quality or
                  legality of the products listed.
                </Paragraph>
                <Paragraph>
                  b. Users are solely responsible for the accuracy of their
                  listings and for the fulfillment of any transactions made
                  through the Website.
                </Paragraph>
              </Section>
              <Section id="intellectual-property">
                <h2>5. Intellectual Property</h2>
                <Paragraph>
                  a. All content on the Website, including but not limited to
                  text, graphics, logos, images, audio clips, and software, is
                  the property of Renvisa.com and is protected by intellectual
                  property laws.
                </Paragraph>
                <Paragraph>
                  b. You may not reproduce, distribute, display, or create
                  derivative works from any content on the Website without the
                  express written consent of Renvisa.com.
                </Paragraph>
              </Section>
              <Section id="privacy-policy">
                <h2>6. Privacy Policy</h2>
                <Paragraph>
                  Your use of the Website is also governed by our Privacy
                  Policy, which can be found here.
                </Paragraph>
              </Section>
              <Section id="termination">
                <h2>7. Termination</h2>
                <Paragraph>
                  Renvisa.com reserves the right to terminate or suspend user
                  accounts and access to the Website at its discretion, without
                  notice, for any violation of these terms and conditions.
                </Paragraph>
              </Section>
              <Section id="limitation-of-liability">
                <h2>8. Limitation of Liability</h2>
                <Paragraph>
                  a. Renvisa.com is not liable for any direct, indirect,
                  incidental, special, or consequential damages arising from the
                  use of the Website or any products or services obtained
                  through the Website.
                </Paragraph>
                <Paragraph>
                  b. Renvisa.com makes no warranties or representations about
                  the accuracy or completeness of the information provided on
                  the Website.
                </Paragraph>
              </Section>
              <Section id="changes-to-terms-and-conditions">
                <h2>9. Changes to Terms and Conditions</h2>
                <Paragraph>
                  Renvisa.com reserves the right to modify or update these terms
                  and conditions at any time. Users will be notified of any
                  changes, and continued use of the Website after such
                  modifications will constitute acceptance of the revised terms.
                </Paragraph>
              </Section>
              <Section id="governing-law">
                <h2>10. Governing Law</h2>
                <Paragraph>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Indian jurisdiction.
                </Paragraph>
              </Section>
            </RightContent>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default TermsOfService;
