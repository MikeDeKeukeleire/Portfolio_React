import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-sec-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Mike De Keukeleire</span>
              </p>
              <h2 className="about__heading">A Software Developer</h2>
              <div className="about__info">
                <PText>
                  Ik ben een jonge dynamische software developer. Ik werk altijd
                  met veel enthousiasme en perfectionisme om een project tot een
                  goed einde te brengen. Management, communicatie, teamwork en
                  leiderschap zijn enkele van mijn sterke punten.
                  <br /> <br />
                  Ook leid ik mijn eigen webdesign bedrijf{' '}
                  <a href="https://flaco.media">Flaco Media</a>. Bent u op zoek
                  naar een moderne, gebruiksvriendelijke website? Neem dan zeker
                  eens een kijkje!
                  <br />
                  <br />
                  Naast het ontwikkelen van applicaties en websites ben ik vaak
                  bezig met sport. Ik beoefen judo en fitness. Daarnaast ben ik
                  judo coach en geef ik sportkampen in mijn gemeente.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Opleiding</h1>
              <AboutInfoItem
                title="Middelbaar"
                items={['Moderne wetenschappen. De Bron, Tielt']}
              />
              <AboutInfoItem
                title="Middelbaar"
                items={['Informatica Beheer. Regina Pacis, Tielt']}
              />
              <AboutInfoItem
                title="Voetbaltrainer"
                items={['UEFA C. Royal Belgian Football Association, Brussel']}
              />
              <AboutInfoItem
                title="Hogeschool"
                items={['Toegepaste Informatica. HoGent, Gent']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem title="AppDev" items={['Java', 'C#']} />
              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'React']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['NodeJS', 'Spring Boot']}
              />
              <AboutInfoItem title="Others" items={['SQL', 'Python']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="01/'20"
                items={['Stagiair Internal IT, Pareteum']}
              />
              <AboutInfoItem
                title="08/'19 - 05/'21"
                items={['Voetbaltrainer (jeugd), KZ Dentergem']}
              />
              <AboutInfoItem
                title="08/'21 - 02/'22"
                items={['Voetbaltrainer (jeugd), VV Tielt']}
              />
              <AboutInfoItem
                title="04/'21-"
                items={['Sportkamp monitor, Gemeente Dentergem']}
              />
              <AboutInfoItem
                title="10/'21-"
                items={['Event staff, MaisonRouge']}
              />
              <AboutInfoItem title="02/'22-" items={['Judo coach, JC Tielt']} />
              <AboutInfoItem
                title="02/'22-"
                items={['Zelfstandig webdesigner, Flaco Media']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
