import "./ChatBotPage.css";

type Message = {
  from: "me" | "bot";
  text: string;
};

const ChatBotPage = () => {
  const listaTitle = [
    "l'edificio è in fiamme",
    "trova un'ambulanza",
    "ho perso il mio cane",
    "cosa fare in caso di terremoto",
    "come si fa la pasta",
    "l'edificio è in fiamme",
    "trova un'ambulanza",
  ];

  const conversation: Message[] = [
    {
      from: "me",
      text: "Posso brevettare un attrezzo per la raccolta dei fichi d'india?",
    },
    {
      from: "bot",
      text: "Nella provincia di Lecce esiste un brevetto per lo sficatore, un attrezzo creato proprio per la raccolta dei fichi d'india, quindi purtroppo non è possibile avvalersi di tale brevetto",
    },
    {
      from: "me",
      text: "Ma il mio attrezzo funzionerebbe grazie all'alimentazione della batteria solare di Daitarn III, in questo modo la mia invenzione non potrebbe risultare abbastanza innovativa da meritarsi un brevetto?",
    },
    {
      from: "bot",
      text: "Le mie ricerche non hanno prodotto risultati nella ricerca di un brevetto su un attrezzo per raccogliere i fichi d'india alimentato con la batteria solare di Daitarn III, è quindi possibile depositare un brevetto per questa invenzione.",
    },
    {
      from: "me",
      text: "Posso chiamare la mia invenzione sficatore solare?",
    },
    {
      from: "bot",
      text: 'Purtroppo la parola "sficatore" è già stata depositato all\'ufficio brevetti, ti consiglio di cercare un nome più originale per la tua invenzione, che ne diresti di "deficatore solare"',
    },
  ];

  return (
    <div className="chatbotPage">
      <div className="chats">
        {listaTitle.map((title, index) => (
          <div key={index} className="titleChat">
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div className="chat">
        {conversation.map((message) => (
          <div className={"conversation-box " + message.from}>
            {message.text}
          </div>
        ))}
        <textarea name="chatbox" className="chatbox" />
      </div>
    </div>
  );
};

export default ChatBotPage;
