import styled from 'styled-components'
import video from '../assets/video/video.mp4'
import github from '../assets/icons/github.svg'
import instagram from '../assets/icons/instagram.svg'
import phone from '../assets/icons/mobile-bouton.svg'
import mail from '../assets/icons/enveloppe.svg'
import linkedin from '../assets/icons/linkedin.svg'
import twitter from '../assets/icons/twitter.svg'
import avatar from '../assets/images/avatar.jpg'
import arrowRight from '../assets/icons/arrow-right.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
  
  @media(max-width: 600px) {
    align-items: start;
    height: auto;
  }
`
const Card = styled.div`
  width: 640px;
  border-radius: 32px;
  overflow-x: hidden;
  background-color: white;

  @media(max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }
`
const HeaderPadding = styled.div`
  margin: 64px 32px 24px 32px;
`
const CardHeader = styled.div`
  position: relative;
  height: 420px;
  width: 100%;

  @media(max-width: 600px) {
    height: 540px;
  }

  @media(max-width: 380px) {
    height: 584px;
  }

  @media (max-width: 280px) {
    height: 624px;
  }
`
const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Barnner = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`
const CardBody = styled.div`
  display: flex;
  @media(max-width: 600px) {
    flex-direction: column;
  }
`
const TitleHeader = styled.h1`
  font-size: 2.4rem;
`
const HeaderContent = styled.div`
  flex: 1.5;
  color: white;
`

const TitleBody = styled.h2`
  margin-bottom: 24px;
`

const Content = styled.div`
  flex: 1;
  margin: 40px;
  @media (max-width: 600px) {
    margin-bottom: 24px;
    margin-top: 24px;
  }
`

const Divider = styled.div`
  width: 1px;
  background-color: #afafaf;

  @media (max-width: 600px) {
    height: 1px;
    margin: 24px 0 24px 0;
    width: 100%;
  }
`
const Button = styled.button`
  padding: 12px 24px;
  width: 100%;
  background-color: white;
  border: 2.5px solid rgba(0, 0, 0, 0.8);
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 50px;
  transform: scale(1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    border-color: black;
  }
  img {
    width: 24px;
    height: 24px;
    margin-left: 24px;
  }
`
const SizedBox = styled.div`
  height: ${props => props.height != null ? props.height : 0};
  width: ${props => props.width != null ? props.width : 0};

  @media(max-width: 600px) {
    width: ${props => props.height != null ? props.height : 0};
    height: ${props => props.width != null ? props.width : 0};
  }
`

const Wrap = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const IconButton = styled.button`
  border-radius: 100%;
  margin: 0 16px 16px 0;
  background-color: white;
  width: 52px;
  height: 52px;
  cursor: pointer;
  padding: 10px;
  border: none;
  transform: translateY(0);
  transition: transform 0.2s ease-in-out;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: translateY(-4px);
  }
`

const FlexBox = styled.div`
  display: flex;
  
  @media(max-width: 600px) {
    flex-direction: column;
  }
`

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
  } 
`
const Circle = styled.div`
  padding: 8px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid white;
  border-radius: 100%;
`
const ActivityName = styled.h2`
  font-size: 0.9rem;
  color: white;
`

function CardPage() {
    return (
        <Container>
            <Card>
                <CardHeader>
                    <Video autoPlay loop muted src={video}/>
                    <Barnner>
                        <HeaderPadding>
                            <Circle>
                                <Avatar>
                                    <img src={avatar} alt='avatar'/>
                                </Avatar>
                            </Circle>
                            <SizedBox height='28px' width='20px'/>
                            <ActivityName>SOFTWARE ENGINEER</ActivityName>
                            <SizedBox height='24px' width='20px'/>
                            <FlexBox>
                                <HeaderContent>
                                    <TitleHeader>Amouzou David</TitleHeader>
                                    <SizedBox height='24px' width='20px'/>
                                    <p>Etiam lorem ipsum, suspendisse faucibus sed interdum posuere lorem ipsum
                                        dolor.</p>
                                </HeaderContent>
                                <SizedBox width='24px'/>
                                <Wrap>
                                    <IconButton>
                                        <img src={github} alt="github"/>
                                    </IconButton>
                                    <IconButton>
                                        <img src={instagram} alt="instagram"/>
                                    </IconButton>
                                    <IconButton>
                                        <img src={phone} alt="phone"/>
                                    </IconButton>
                                    <IconButton>
                                        <img src={twitter} alt="twitter"/>
                                    </IconButton>
                                    <IconButton>
                                        <img src={mail} alt="mail"/>
                                    </IconButton>
                                    <IconButton>
                                        <img src={linkedin} alt="linkedin"/>
                                    </IconButton>
                                </Wrap>
                            </FlexBox>
                        </HeaderPadding>
                    </Barnner>
                </CardHeader>
                <CardBody>
                    <Content>
                        <TitleBody>Massa vitae</TitleBody>
                        <p>Sed imperdiet dui amet nulla sed viverra tellus, lectus urna veroeros.</p>
                    </Content>
                    <Divider/>
                    <Content>
                        <Button>Etiam faucibus <img src={arrowRight} alt='arrow-right'/></Button>
                        <SizedBox height='16px' width='16px'/>
                        <Button>Sed interdum <img src={arrowRight} alt='arrow-right'/></Button>
                    </Content>
                </CardBody>
            </Card>
        </Container>
    )
}

export default CardPage