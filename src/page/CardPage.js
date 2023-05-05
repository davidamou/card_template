import styled from 'styled-components'
import video from '../assets/video.mp4'
import github from '../assets/twitter.svg'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f1f1f1;
`
const Card = styled.div`
    width: 640px;
    border-radius: 32px;
    overflow: hidden;
    background-color: white;
`
const HeaderPadding = styled.div`
    margin: 64px 32px 24px 32px;
`
const CardHeader = styled.div`
    position: relative;
    height: 420px;
    width: 100%;
`
const Video = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Barnner = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
`
const CardBody = styled.div`
    display: flex;
`
const TitleHeader = styled.h1`
    color: #fff;
`
const TitleBody = styled.h2`
    margin-bottom: 24px;
`

const Content = styled.div`
    flex: 1;
    margin: 40px;
` 

const Divider = styled.div`
    width: 1px;
    background-color: #f1f1f1;
`
const Button = styled.button`
    padding: 14px 30px;
    width: 100%;
    background-color: white;
    border: 2.5px solid rgba(0, 0, 0, 0.8);   
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 50px;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.02);
        border-color: black;
    }
`
const Spacer = styled.div`
    height: 16px;
`

const Wrap = styled.div`
    display: flex;
`

function CardPage() {
    return (
        <Container>
            <Card>
                <CardHeader>
                    <Video autoPlay loop muted src={video}/>
                    <Barnner>
                        <HeaderPadding>
                            <TitleHeader>Amouzou David</TitleHeader>
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
                        <Button>Etiam faucibus</Button>
                        <Spacer/>
                        <Button>Sed interdum</Button>
                    </Content>
                </CardBody>
            </Card>
        </Container>
    )
}

export default CardPage