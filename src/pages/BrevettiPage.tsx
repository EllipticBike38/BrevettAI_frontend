import Patent from "../components/Patent";
import "./BrevettiPage.css";

type Brevetto = {
  title: string;
  author: string;
  status: string;
  description: string;
};

const BrevettiPage = () => {
  const listaTitle = [
    "l'edificio è in fiamme",
    "trova un'ambulanza",
    "ho perso il mio cane",
    "cosa fare in caso di terremoto",
    "come si fa la pasta",
    "l'edificio è in fiamme",
    "trova un'ambulanza",
  ];

  // la description è molto lunga
  const brevetti: Brevetto[] = [
    {
      title: "lanciafiamme",
      author: "Mario Mario",
      status: "in corso",
      description: `il lanciofiamme è la soluzione a tutti i problemi. ecco come si usa: 
      1. prendi il lanciofiamme
      2. accendi il lanciofiamme
      3. spara il lanciofiamme`,
    },
    {
      title: "ambulanza",
      author: "Luigi Mario",
      status: "in corso",
      description: `per trovare un'ambulanza, segui questi passaggi:
      1. apri google maps
      2. cerca "ambulanza"
      3. segui le indicazioni
      4. chiamala
      5. aspetta`,
    },
  ];

  return (
    <div className="brevettiPage">
      <div className="chats">
        {listaTitle.map((title, index) => (
          <div key={index} className="titleChat">
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div className="patent">
        <Patent
          title={brevetti[0].title}
          author={brevetti[0].author}
          status={brevetti[0].status}
          description={brevetti[0].description}
        ></Patent>
      </div>
    </div>
  );
};

export default BrevettiPage;
