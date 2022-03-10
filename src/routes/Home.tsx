import styled  ,{ keyframes }from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCheck, faMap, faEnvelope, faBullhorn} from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";
const Container = styled.div`
background-color:${props=>props.theme.boxColor} ;
height:100vh ;
`;
const Header = styled.header`
display:flex ;
padding:5vh  ;
font-size:22px ;
border-bottom: 1px solid ${props=>props.theme.bgandtextColor};
`;
const Title = styled.h1`
font-weight: 600;
text-transform:uppercase ;
`
const Icon = styled.div`
color:yellow;
margin-right:20px ;

`;
const Main = styled.div`
display:flex ;
flex-direction:column;
align-items:center ;
background-color:${props=>props.theme.boxColor} ;
padding-top: 110px;
`;
const Subtitle = styled.h1`
margin-bottom: 100px;
font-size:22px ;
`;
const Button = styled.div`
padding: 20px 80px;
background-color: ${props=>props.theme.hoverColor};
border-radius: 30px;
&:hover {
background-color:${props=>props.theme.accentColor} ;
color:${props=>props.theme.boxColor} ;
}
span{
  margin-right:10px ;
  
}
`;
const ControllDots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;}
`
const Footer = styled.div`
margin-top: 200px;
text-align:center;
min-width: 535px;
span{
font-size:100px;
padding:20px 30px;
background-color: ${props=>props.theme.hoverColor};
margin-right: 10px;
border-radius:50% ;
animation:${ControllDots} 2s infinite;
&:first-child{
 
}
&:nth-child(2){
  animation-delay: 0.5s;
}
&:last-child{
  animation-delay: 1s;
}
}
`;
function Overview(){
 
    return (
      <Container>
      <Header>
      <Icon><FontAwesomeIcon icon={faGlobe}/></Icon>
        <Title>
         Global Issue Magazine
        </Title>
      </Header>
      <Main>
      <Subtitle>

      Find the latest breaking news and information on the top stories.

      </Subtitle>
      <Link to="all">
      <Button>
        <span>Start Now</span>
        <FontAwesomeIcon icon={faCheck}/>
      </Button>
      </Link>
     
      </Main>
      <Footer>
        <span><FontAwesomeIcon icon={faMap}/></span>
        <span><FontAwesomeIcon icon={faEnvelope}/></span>
        <span><FontAwesomeIcon icon={faBullhorn}/></span>
      </Footer>
      </Container>
    );
}

export default Overview;