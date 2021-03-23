import styled, { keyframes } from "styled-components";
import { useForm } from "react-hook-form";
import Colors from "components/Colors";

const fadeOut = keyframes`
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;
const fadeIn = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
  }
`;
const Page = styled.div``;

const Container = styled(Page)`
  width: 100%;
  height: 95vh;
  position: absolute;
  display: flex;
  top: 40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &.page-enter {
    animation: ${fadeIn} 1s forwards;
  }
  &.page-exit {
    animation: ${fadeOut} 1s forwards;
  }

  background-color: rgb(255, 255, 255);
  color: #ff7675;
  font-style: italic;
  font-size: 12px;
  padding: 10px;
`;

const Title = styled.div`
  width: 75%;
  min-width: 320px;
  color: rgb(20, 20, 20);
  padding: 15px 0px;
  font-size: 25px;
  font-weight: 600;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Form = styled.form`
  width: 75%;
  min-width: 320px;
  padding: 20px;
  border-top: 2px solid ${Colors.lineColor};
  border-bottom: 2px solid ${Colors.lineColor};
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const FlexReactive = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Item = styled.div`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Name = styled.input`
  width: 80%;
  padding: 10px;
  border-radius: 20px;
`;
const Email = styled.input`
  width: 80%;
  padding: 10px;
  border-radius: 20px;
`;
const Subject = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  @media (max-width: 500px) {
    width: 80%;
  }
`;
const Message = styled.textarea`
  width: 100%;
  height: 30vh;
  min-width: 280px;
  padding: 10px;
  border-radius: 20px;
  resize: none;
`;
const Submit = styled.input`
  cursor: pointer;
  padding: 10px;
  border: 2px solid ${Colors.lineColor};
  border-radius: 25px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  background-color: ${Colors.lineColor};
  :hover {
    background-color: rgb(255, 255, 255);
    color: rgb(20, 20, 20);
  }
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
`;

const Text = styled.span`
  color: rgb(20, 20, 20, 0.7);
  font-weight: 700;
  font-size: 14px;
`;

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };

  const onSubmit = (data, r) => {
    console.log(r);
    alert(`Merci pour votre message via ${data.email}`);
    const templateId = "template_f02ahzm";
    const serviceID = "portfolio_email";
    sendFeedback(serviceID, templateId, {
      to_name: "Kyubong",
      from_name: data.name,
      message: data.message,
      subject: data.subject,
      reply_to: data.email,
    });
    r.target.reset();
  };

  return (
    <Container>
      <Title>Contactez-moi</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexReactive>
          <Item>
            <Text>Nom </Text>
            <Name
              name="name"
              placeholder="Comment vous appelez-vous.."
              ref={register({
                required: "Entrez votre nom",
                maxLength: {
                  value: 20,
                  message: "Veuillez entrer votre nom moins de 20 caractères.",
                },
              })}
            />
            <br />
            {errors.name && errors.name.message}
            <br />
          </Item>
          <Item>
            <Text>Email </Text>
            <Email
              name="email"
              placeholder="Où vais-je répondre..."
              ref={register({
                required: "Entrez votre adresse de l'email.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "adresse de l'email invalide",
                },
              })}
            />
            <br />
            {errors.email && errors.email.message}
            <br />
          </Item>
        </FlexReactive>
        <Text>Objet </Text>
        <Subject
          name="subject"
          placeholder="De quoi s'agit-il..."
          ref={register({
            required: true,
          })}
        />
        <br />
        {errors.subject && "Veuillez écrire le titre de votre message"}
        <br />
        <Text>Message</Text>
        <Message
          name="message"
          placeholder="Que voulez-vous me dire..."
          ref={register({
            required: true,
          })}
        />
        <br />
        {errors.message && "Vous avez oublié d'écrire le contenu..."}
        <br />
        <Submit type="submit" value="Envoyer" />
      </Form>
    </Container>
  );
};

export default Contact;
