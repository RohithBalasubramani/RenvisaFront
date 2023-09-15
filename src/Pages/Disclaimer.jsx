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
  height: 85vh;
  background-color: #fafafa;
  color: #000000;
  padding: 2vh;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const Right = styled.div`
  flex: 3;
`;

const RightContent = styled.div`
  height: 85vh;
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

const Disclaimer = () => {
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
            <Button onClick={() => scrollToTarget("general-information")}>
              <Circle>1 </Circle> <Center>General Information</Center>
            </Button>
            <Button onClick={() => scrollToTarget("user-responsibility")}>
              <Circle>2</Circle> <Center>User Responsibility</Center>
            </Button>
            <Button onClick={() => scrollToTarget("no-endorsement")}>
              <Circle>3</Circle> <Center>No Endorsement</Center>
            </Button>
            <Button onClick={() => scrollToTarget("no-warranty")}>
              <Circle>4</Circle> <Center>No Warranty</Center>
            </Button>
            <Button onClick={() => scrollToTarget("limitation-of-liability")}>
              <Circle>5</Circle> <Center>Limitation of Liability</Center>
            </Button>
            <Button onClick={() => scrollToTarget("transactions-and-payments")}>
              <Circle>6</Circle> <Center>Transactions and Payments</Center>
            </Button>
            <Button onClick={() => scrollToTarget("changes-to-the-website")}>
              <Circle>7</Circle> <Center>Changes to the Website</Center>
            </Button>
            <Button onClick={() => scrollToTarget("intellectual-property")}>
              <Circle>8</Circle> <Center>Intellectual Property</Center>
            </Button>
            <Button onClick={() => scrollToTarget("governing-law")}>
              <Circle>9</Circle> <Center>Governing Law</Center>
            </Button>
            <Button onClick={() => scrollToTarget("contact-us")}>
              <Circle>10</Circle> <Center>Contact Us</Center>
            </Button>
            <Button onClick={() => scrollToTarget("acknowledgment")}>
              <Circle>11</Circle> <Center>Acknowledgment</Center>
            </Button>
          </Left>
          <Right>
            <RightContent>
              <h1>Disclaimer</h1>
              <Last>Last Updated: 15 September 2023</Last>

              <Section id="general-information">
                <h2>1. General Information</h2>
                <Paragraph>
                  a. Renvisa.com (hereinafter referred to as "the Website")
                  operates as a B2B e-commerce platform for industrial products.
                  This disclaimer governs your use of the Website.
                </Paragraph>
                <Paragraph>
                  b. We aim to provide accurate and up-to-date information and
                  services on the Website. However, we do not guarantee the
                  accuracy, completeness, or reliability of the information
                  provided.
                </Paragraph>
              </Section>
              <Section id="user-responsibility">
                <h2>2. User Responsibility</h2>
                <Paragraph>
                  a. Users of the Website accept responsibility for their
                  interactions, transactions, and communications with other
                  users and third parties. Renvisa.com does not assume
                  responsibility for any disputes, losses, or damages resulting
                  from these interactions.
                </Paragraph>
                <Paragraph>
                  b. Users are encouraged to exercise due diligence, verify
                  information independently, and seek legal or professional
                  advice when necessary before making decisions or transactions
                  based on the information available on the Website.
                </Paragraph>
              </Section>
              <Section id="no-endorsement">
                <h2>3. No Endorsement</h2>
                <Paragraph>
                  a. The Website may feature information about third-party
                  products, services, and businesses. Inclusion of such
                  information does not constitute an endorsement or
                  recommendation by Renvisa.com.
                </Paragraph>
                <Paragraph>
                  b. Users should recognize that opinions and recommendations
                  expressed on the Website are those of the respective authors
                  or contributors and do not necessarily reflect the views of
                  Renvisa.com.
                </Paragraph>
              </Section>
              <Section id="no-warranty">
                <h2>4. No Warranty</h2>
                <Paragraph>
                  a. Renvisa.com provides its services "as is" and makes no
                  warranties, express or implied, regarding the accuracy,
                  reliability, or suitability of the Website for any particular
                  purpose.
                </Paragraph>
                <Paragraph>
                  b. We do not warrant that the Website will be available
                  without interruption, errors, or defects, nor do we guarantee
                  that any errors or defects will be corrected.
                </Paragraph>
              </Section>
              <Section id="limitation-of-liability">
                <h2>5. Limitation of Liability</h2>
                <Paragraph>
                  a. Renvisa.com, its affiliates, partners, employees, and
                  agents shall not be liable for any direct, indirect,
                  incidental, special, or consequential damages arising from the
                  use or inability to use the Website or any information or
                  services provided on the Website.
                </Paragraph>
                <Paragraph>
                  b. This includes, but is not limited to, losses related to
                  data, revenue, business, or reputation, even if Renvisa.com
                  has been advised of the possibility of such damages.
                </Paragraph>
              </Section>
              <Section id="transactions-and-payments">
                <h2>6. Transactions and Payments</h2>
                <Paragraph>
                  a. Renvisa.com is a platform that facilitates B2B
                  transactions. We do not take part in these transactions, nor
                  do we guarantee the quality, legality, or fitness for a
                  particular purpose of products or services offered on the
                  Website.
                </Paragraph>
                <Paragraph>
                  b. Users are responsible for the accuracy of their listings
                  and the fulfillment of any transactions made through the
                  Website. Renvisa.com is not liable for any disputes or issues
                  related to transactions.
                </Paragraph>
              </Section>
              <Section id="changes-to-the-website">
                <h2>7. Changes to the Website</h2>
                <Paragraph>
                  a. Renvisa.com reserves the right to modify, suspend, or
                  discontinue any aspect of the Website, including services,
                  features, or content, at any time, without notice or
                  liability.
                </Paragraph>
              </Section>
              <Section id="intellectual-property">
                <h2>8. Intellectual Property</h2>
                <Paragraph>
                  a. All content on the Website, including text, graphics,
                  logos, images, audio clips, and software, is the property of
                  Renvisa.com and is protected by intellectual property laws.
                </Paragraph>
                <Paragraph>
                  b. Users may not reproduce, distribute, display, or create
                  derivative works from any content on the Website without the
                  express written consent of Renvisa.com.
                </Paragraph>
              </Section>
              <Section id="governing-law">
                <h2>9. Governing Law</h2>
                <Paragraph>
                  a. This disclaimer is governed by and construed in accordance
                  with the laws of [Your Jurisdiction].
                </Paragraph>
              </Section>
              <Section id="contact-us">
                <h2>10. Contact Us</h2>
                <Paragraph>
                  a. If you have questions or concerns regarding this
                  disclaimer, please contact us at [Contact Information].
                </Paragraph>
              </Section>
              <Section id="acknowledgment">
                <h2>11. Acknowledgment</h2>
                <Paragraph>
                  By using Renvisa.com, you acknowledge and accept the terms and
                  conditions of this comprehensive disclaimer. It is advisable
                  to review this disclaimer periodically for updates or changes.
                </Paragraph>
              </Section>
            </RightContent>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Disclaimer;
