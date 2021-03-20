import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import Colors from "components/Colors";

const MeObj = {
  title: "Je suis développeur front-end junior JavaScript | React JS",
  photo: "images/kyubong_photo.jpg",
  descs: [
    {
      subtitle: `Du print(‘hello world’) au app.get(‘/’, (req,res) => {...});`,
      paragraph: `L’an dernier, j’ai commencé à coder via Python considéré un langage
            éducatif et plus ou moins accessible pour les débutants. Mon
            aspiration à faire quelque chose de visible m’a conduit à étudier
            Web – Html, Css et JavaScript. Après avoir peint mon index.html,
            j’ai voulu y ajouter la fonctionnalité telle que d’écrire et de
            sauvegarder les informations. C’était le moment où j’étudiais le
            Server à travers Java, Spring Boot et MySQL grâce auxquels j’ai
            appris la notion de class, interface, inheritance dans la
            programmation orientée objet. Bien que j’aie pu à peine sortir des
            résultats suite à des entrées, je ne comprenais pas clairement le
            processus de cette production puisque c’étaient IntelliJ et les
            Frameworks de Java qui s’occupaient de tout. Etant insatisfait, j’ai
            commencé à étudier C qui me permettait d’apprendre pas seulement le
            processus de compilation mais aussi l’allocation de mémoire et la
            programmation de low-level. Au bout de ces études "vagabondes", je
            me suis rendu compte qu’il faudrait choisir un langage comme force
            principale pour ne pas me confondre au niveau grammatical et que
            j’apprendrais plus vite d’autres langages après avoir maîtrisé un
            langage jusqu’au fond. Dans ce sens, j’ai choisi JavaScript
            puisqu’il me permettait d’apprendre, à la fois, le Front-end et le
            Back-end grâce à ses bibliothèques riches – Node JS et React JS. Je
            peux donc me concentrer sur l’application et sa structure en seul
            langage. D’ailleurs, ces références, telles que MDN(Mozilla
            Developer Network) ou React Manuel, sont lisibles et
            compréhensibles.`,
    },
    {
      subtitle: `Sortie du localhost :8080`,
      paragraph: `Quand je codais tout seul, je me disais souvent qu’il me faudrait
            sortir du port 8080(3000 ou 3306), cela dit, afin d’améliorer mes
            compétences informatiques et de coder de manière clean, j’aurais
            besoin d’un projet collectif avec d’autres développeurs et une
            expérience professionnelle dans laquelle je pourrai apprendre le
            savoir-faire des développeurs seniors. Dans ce sens, l'alternance
            convient exactement à mon intention et me permettrait
            d’acquérir une expérience professionnelle concrète que je ne
            retrouve pas durant ma période autodidacte. Je pourrais donc, plutôt
            que de me contenter de sortir des résultats suite à des entrées,
            comprendre le principe de fonctionnement des codes que j’avais
            écrits. Enfin, comme je suis persévérant lorsque je code, je ne lâcherai pas mon travail jusqu’à
            ce que j’écrive "$git push origin master."`,
    },
  ],
};
const fadeIn = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;

const Container = styled.div`
  display: ${(props) => (props.isHidden ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  position: absolute;
  border-bottom: 3px solid ${Colors.lineColor};
  padding-bottom: 30px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Section = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Header = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1124px) {
    width: 100%;
  }
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.7;
`;
const Photo = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 75px;
  width: 150px;
  height: 150px;
  margin: 50px 0px;
`;
const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 40px 0px;
  color: rgb(20, 20, 20, 1);
`;
const Paragraph = styled.div`
  line-height: 24px;
`;
const List = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1317px) {
    width: 50%;
  }
  @media (max-width: 1124px) {
    width: 100%;
  }
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(20, 20, 20, 0.7);
`;
const Me = ({ isClicked }) => {
  const [me, setMe] = useState([]);

  useEffect(() => {
    MeObj && setMe(MeObj);
  }, []);

  return (
    <Container isHidden={isClicked}>
      <Title>KYUBONG?</Title>
      <Section>
        <Header>
          <Photo bgImage={`${process.env.PUBLIC_URL}/${me.photo}`} />
          <HeaderTitle>{me.title}</HeaderTitle>
        </Header>
        <List>
          {me.descs &&
            me.descs.length > 0 &&
            me.descs.map((desc, index) => (
              <Article key={index}>
                <Subtitle>{desc.subtitle}</Subtitle>
                <Paragraph>{desc.paragraph}</Paragraph>
              </Article>
            ))}
        </List>
      </Section>
    </Container>
  );
};
export default Me;
