import axios from "axios";

//About button images
export const btnImages = () => axios("/api/about/images");

export const competenceApi = () => axios("/api/about/competences");

//About-page > Me
export const MeObj = {
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

//About-page > Compentence
export const dataObjArray = [
  {
    title: "Acquises",
    subtitle: '"Je suis capable de coder avec" : ',
    languages: [
      {
        name: "HTML5",
        icon_url:
          "https://cdn4.iconfinder.com/data/icons/blackicon/54/html5_icon-512.png",
      },
      {
        name: "CSS3",
        icon_url:
          "https://cdn4.iconfinder.com/data/icons/blackicon/54/css3_icon-512.png",
      },
      {
        name: "JavaScript(ES6)",
        icon_url: "https://www.agile-web.net/res/images/logos/javascript.png",
      },
      {
        name: "React JS",
        icon_url:
          "https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp_400x400.jpg",
      },
      {
        name: "Node JS",
        icon_url: "http://cdn.onlinewebfonts.com/svg/img_189697.png",
      },
    ],
  },
  {
    title: "En cours",
    subtitle: '"Je suis en train d\'apprendre" :',
    languages: [
      {
        name: "TypeScript",
        icon_url:
          "https://d33wubrfki0l68.cloudfront.net/58f9f46aa7c55d69b118dbea6899525f14ee257e/bd73d/img/tech/typescript.svg",
      },
      {
        name: "Github",
        icon_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOk2uzJkQw5MAnJ7UqMongGV0Ohe0zHPiUdA&usqp=CAU",
      },
      {
        name: "Express",
        icon_url: "https://images.tute.io/tute/topic/express-js.png",
      },
    ],
  },
  {
    title: "A venir",
    subtitle: '"J\'aimerais apprendre" :',
    languages: [
      {
        name: "Redux",
        icon_url: "https://img.icons8.com/ios-filled/452/redux.png",
      },
      {
        name: "React Native",
        icon_url: "https://img.icons8.com/ios/452/react-native.png",
      },
      {
        name: "GraphQL",
        icon_url:
          "https://cdn.icon-icons.com/icons2/2248/PNG/512/graphql_icon_137529.png",
      },
      {
        name: "Nest JS",
        icon_url:
          "https://ih1.redbubble.net/image.1084299831.8155/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      },
    ],
  },
  {
    title: "Autre connaissance",
    subtitle: '"J\'ai appris et comprends" :',
    languages: [
      {
        name: "Python",
        icon_url: "https://img.icons8.com/ios/452/python.png",
      },
      {
        name: "C",
        icon_url:
          "https://www.creartbot.com/files/attach/images/1718/777/001/20c6043731e58613e81870ff0702f379.png",
      },
      {
        name: "Java",
        icon_url: "https://img.icons8.com/ios/452/java-coffee-cup-logo.png",
      },
      {
        name: "Spring Boot",
        icon_url:
          "http://steveperkins.com/wp-content/uploads/2014/02/spring-boot-logo.png",
      },
      {
        name: "MySQL",
        icon_url:
          "https://www.signl4.com/de/wp-content/uploads/sites/2/2019/01/3.png",
      },
      {
        name: "Firebase",
        icon_url:
          "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/firebase-512.png",
      },
    ],
  },
];

// about-page > SideProject
export const projectObjArray = [
  {
    title: "Movistagram",
    subtitle: "Projet personnel",
    description:
      "Il s'agit d'une application qui permet de consulter la list des films, séries populaires et d'en chercher par le mot clé.",
    techniques: [
      "HTML",
      "CSS",
      "JavaScript",
      "ES6",
      "Arrow function",
      "filter / map function",
      "async / await",
      "Axios",
      "React Hooks",
      "The Movie DB API",
    ],
    demo: {
      images: [
        "images/movistagram/1.png",
        "images/movistagram/2.png",
        "images/movistagram/3.png",
        "images/movistagram/4.png",
        "images/movistagram/5.png",
      ],
      video: "images/movistagram/demo.mp4",
    },
    link: "https://jeanoza.github.io/movistagram",
  },
  {
    title: "Jwitter",
    subtitle: "Projet personnel",
    description:
      "Il s'agit d'une application clonné à l'instar de Twitter afin de tester et d'expérimenter Firebase, et aussi, de pratiquer TypeScript.",
    techniques: [
      "React",
      "Firebase",
      "TypeScript",
      "ES6",
      "React Router Dom",
      "Styled Components",
    ],
    demo: {
      images: [
        "images/jwitter/1.png",
        "images/jwitter/2.png",
        "images/jwitter/3.png",
      ],
      video: "images/jwitter/demo.mp4",
    },
    link: "https://jeanoza.github.io/jwitter_ts",
  },
];
