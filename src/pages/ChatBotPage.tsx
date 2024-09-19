import { useEffect, useState } from "react";
import "./ChatBotPage.css";
import { IoMdSend } from "react-icons/io";

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

  const defaultConversation: Message[] = [
    {
      from: "me",
      text: "Ho un idea per un giocattolo in grado di sviluppare la fantasia e la capacità spaziale dei bambini tramite l'incastro reciproco di vari mattoncini di forme e dimensioni diverse ma in grado di incastrarsi perfettamente tra di loro formando un numero di strutture potenzialmente infinito, posso brevettare questa idea?",
    },
    {
      from: "bot",
      text: "La tua idea è molto simile a quella di Lego, un'azienda danese che ha brevettato questa idea nel 1982, attualmente il brevetto è ancora valido in Italia e Francia sebbene sia scaduto negli Stati Uniti, nel Regno Unito, in Spagna e in Germania.",
    },
    {
      from: "me",
      text: "Se sostituissi l'idea dei mattonicini incastrabili con dei magneti, permettendo dunque alle forme create di avere superfici molto più sinuose e realistiche?",
    },
    {
      from: "bot",
      text: "Non risultano brevetti che corrispondano alla tua idea, dunque potresti depositare un documento all'ufficio brevetti.",
    },
    {
      from: "me",
      text: "Posso chiamare la mia invenzione Meccano?",
    },
    {
      from: "bot",
      text: 'Il nome "Meccano" corrisponde ad un prodotto già brevettato, dovresti scegliere un nome diverso per la tua invenzione.',
    },
  ];

  const [message, setMessage] = useState<string>("");
  const [conversation, setConversation] = useState<Message[]>([]);

  useEffect(() => {
    setConversation(defaultConversation);
  }, []);

  useEffect(() => {}, [conversation]);

  const sendMessage = (text: string) => {
    setConversation((state) => [
      ...state,
      {
        from: "me",
        text,
      },
    ]);
    setMessage("");

    setTimeout(() => {
      console.log("response");
      setConversation((state) => [
        ...state,
        {
          from: "bot",
          text: "Non posso rispondere ora",
        },
      ]);
    }, 1000);
  };

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
        {conversation.map((message, index) => (
          <div key={index} className={"conversation-box " + message.from}>
            {message.text}
          </div>
        ))}
        <div>
          <textarea
            name="chatbox"
            className="chatbox"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <IoMdSend
            className="icon send"
            size={45}
            onClick={() => sendMessage(message)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBotPage;
