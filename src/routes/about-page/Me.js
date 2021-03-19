import styled from "styled-components";

const Container = styled.div`
  opacity: ${(props) => (props.isHidden ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  height: 200px;
  position: absolute;
`;

const Me = ({ isClicked }) => {
  return (
    <Container isHidden={isClicked}>
      <div>Kyubong?</div>
      <div>
        <div>
          <img />
        </div>
        <div>
          <div>Je suis développeur front-end junior - React JS / Node JS</div>
          <span>
            Du print(‘hello world’) au app.get(‘/’, (req,res) ={">"} {"{...}"});
          </span>
          <p>
            L’an dernier, j’ai commencé à coder via Python considéré un langage
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
            programmation de low-level. Au bout de ces études « vagabondes », je
            me suis rendu compte qu’il faudrait choisir un langage comme force
            principale pour ne pas me confondre au niveau grammatical et que
            j’apprendrais plus vite d’autres langages après avoir maîtrisé un
            langage jusqu’au fond. Dans ce sens, j’ai choisi JavaScript
            puisqu’il me permettait d’apprendre, à la fois, le Front-end et le
            Back-end grâce à ses bibliothèques riches – Node JS et React JS. Je
            peux donc me concentrer sur l’application et sa structure en seul
            langage. D’ailleurs, ces références, telles que MDN(Mozilla
            Developer Network) ou React Manuel, sont lisibles et
            compréhensibles.
          </p>
          <span>Sortie du localhost :8080</span>
          <p>
            Quand je codais tout seul, je me disais souvent qu’il me faudrait
            sortir du port 8080(3000 ou 3306), cela dit, afin d’améliorer mes
            compétences informatiques et de coder de manière clean, j’aurais
            besoin d’un projet collectif avec d’autres développeurs et une
            expérience professionnelle dans laquelle je pourrai apprendre le
            savoir-faire des développeurs seniors. Dans ce sens, travailler chez
            Spectral convient exactement à mon intention et me permettrait
            d’acquérir une expérience professionnelle concrète que je ne
            retrouve pas durant ma période autodidacte. Je pourrais donc, plutôt
            que de me contenter de sortir des résultats suite à des entrées,
            comprendre le principe de fonctionnement des codes que j’avais
            écrits. Notamment, le React et Typescript qu’utilise votre société,
            sont ce par quoi je suis passionné et ce dont je voudrais être
            spécialiste pour ma carrière professionnelle. Enfin, comme je suis
            persévérant lorsque je code, je ne lâcherai pas mon travail jusqu’à
            ce que j’écrive $git push origin master.
          </p>
        </div>
      </div>
    </Container>
  );
};
export default Me;
