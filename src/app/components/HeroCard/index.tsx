import * as React from 'react';
import styled from 'styled-components';

interface IHeroCardProps {
  name: string
  imgUrl: string
  description: string
  backStory: string
  attributes: {
    strength: number
    intelligence: number
    stamina: number
    healthpoints: number
    mana: number
    agility: number
    speed: number
    resistance: string
    weakness: string
  }
  skills: [{
    name: string
    damage: number
    element: string
    description: string
  }]
}


const MainContainer = styled.div`
font-style: normal;
font-family: "Montserrat";
color: #191919 ;
font-weight: 500;
letter-spacing: 0.65px;
line-height: 32px;
margin-bottom: 1%;
margin-top: 2%;
`;

const Box = styled.div`
margin: auto;
background: #ecf4fe;
width: 60%;
padding: 12px 12px 7px 12px;
border-radius: 5px;
box-sizing: border-box;
box-shadow: -4px -4px 4px rgba(255, 255, 255, 1),
            -4px -4px 4px rgba(255, 255, 255, .5),
            inset 1px 1px 2px rgba(255, 255, 255, .1),
            2px 2px 5px rgba(0, 0, 0, .15);
`;

const CardPicture = styled.div`
width: 70%;
margin-bottom: 2%;
padding: 12px 12px 7px 12px;
border-radius: 5px;
box-sizing: border-box;
box-shadow: -4px -4px 4px rgba(255, 255, 255, 1),
            -4px -4px 4px rgba(255, 255, 255, .5),
            inset 1px 1px 2px rgba(255, 255, 255, .1),
            2px 2px 5px rgba(0, 0, 0, .15);
> img {
	margin-left: 2px;
  width: 100%;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

> img:hover {
	margin-left: 0;
}
`;


const Title = styled.div`
background: #1d145c;
width: 100%;
font: bold 25px "Montserrat";
color: #ff46c1;
box-sizing: border-box;
padding: 12px 12px 7px 12px;
border-radius: 5px;
`;

const Rank = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 1%;
  > figure:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Character = styled.div`
background: #1d145c;
width: 100%;
font: bold 40px "Montserrat";
color: #ff46c1;
text-transform: uppercase;
text-align: center;
box-sizing: border-box;
padding: 12px 12px 7px 12px;
border-radius: 5px;
`;

const Stats = styled.div`
float:right;
margin-right: 10%;
margin-top: -50%;
color: white;
`;

const Level = styled.div`
margin-top: 340%;

> img:hover {
  transform: scale(1.2);
  cursor: pointer;
}
`;

const Progress = styled.div`
border:solid 4px #482d98;
background: #482d98;
padding: 2%;
position:relative; 
width: 140%;
margin-bottom: 15%;
`;


const Attribute = styled.div`
font: bold 20px "Montserrat";
background: #ff46c1;
`;

const Bar = styled.div`
text-align: right;
position: relative;
margin-top: -43%;
margin-right: -40%;
z-index: 2;
`;

const Set = styled.div`
display: flex;
width: 100%;
margin: 0 auto;
transition: .5s ease;

> :hover {
  box-shadow:
  1px 1px #373737,
  2px 2px #373737,
  3px 3px #373737,
  4px 4px #373737,
  5px 5px #373737,
  6px 6px #373737;
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
  transition: .1s ease;
}
`;

const Power = styled.div`
font: bold 23px "Montserrat";
margin: 2% 3% 2% 1%; 
width:33%;
box-sizing: border-box;
padding: 12px 12px 7px 12px;
border-radius: 5px;
box-shadow: -4px -4px 4px rgba(255, 255, 255, 1),
            -4px -4px 4px rgba(255, 255, 255, .5),
            inset 1px 1px 2px rgba(255, 255, 255, .1),
            2px 2px 5px rgba(0, 0, 0, .15);
`;

const Row1 = styled.div`
float: left;
font: bold 23px "Montserrat";
color: #482d98;
text-transform: uppercase;
`;

const Row2 = styled.div`
font: bold 35px "Montserrat";
color: #ff46c1;
`;

const Row3 = styled.div`
float:left;
font: 18px "Montserrat";
`;

export const HeroCard: React.FC<IHeroCardProps> = ({ name, description, backStory, imgUrl, attributes, skills }) => {
  return (
    <div>
      <MainContainer>
        <Box>
          <Character>{name}</Character>
          <Rank>
            <figure>
              <img style={{ width: 50 }} src="/public/heart.png" alt="heart showing health points" title="healthpoints" />
              <figcaption>{attributes.healthpoints} HP</figcaption>
            </figure>

            <figure>
              <img style={{ width: 50 }} src="/public/potion.png" alt="potion showing mana points" title="mana points" />
              <figcaption>{attributes.mana} MP</figcaption>
            </figure>

            <figure>
              <img style={{ width: 45 }} src="/public/shield.png" alt="shield to depict resistance" title="resistance" />
              <figcaption>{attributes.resistance}</figcaption>
            </figure>

            <figure>
              <img style={{ width: 50 }} src="/public/weak.png" alt="radiation symbol to show weakness" title="weakness" />
              <figcaption>{attributes.weakness}</figcaption>
            </figure>
          </Rank>


          <CardPicture>
            <img src={imgUrl} alt="character picture" />
          </CardPicture>


          <Stats>
            <Progress><Attribute style={{ width: (attributes.strength) }}>STR</Attribute></Progress><Bar>{attributes.strength}</Bar>
            <Progress><Attribute style={{ width: (attributes.intelligence) }}>INT</Attribute></Progress><Bar>{attributes.intelligence}</Bar>
            <Progress><Attribute style={{ width: (attributes.stamina) }}>STM</Attribute></Progress><Bar>{attributes.stamina}</Bar>
            <Progress><Attribute style={{ width: (attributes.agility) }}>AGI</Attribute></Progress><Bar>{attributes.agility}</Bar>
            <Progress><Attribute style={{ width: (attributes.speed) }}>SPD</Attribute></Progress><Bar>{attributes.speed}</Bar>
          </Stats>

          <Stats>
            <Level>
              <img style={{ width: 35 }} src="/public/thunder.png" alt="thunder" />
              <img style={{ width: 35 }} src="/public/thunder.png" alt="thunder" />
            </Level>
          </Stats>

          <Title>Description</Title>
          {description}

          <Title>Special Skills</Title>


          <Set>
            {skills.map(skill =>
              <Power key={skill.name}>
                <Row1>{skill.name}</Row1>
                <Row2>{skill.damage} </Row2>
                <Row3>{skill.description}</Row3></Power>)}
          </Set>


          <Title>Story</Title>
          {backStory}
        </Box>
      </MainContainer>
    </div>
  )
}
