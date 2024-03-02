import React, { useState } from "react";
import { Card } from "./components/Card";
import { Input } from "./components/Input";

const default_citations = [
  {
    image: "https://wallpapercave.com/wp/wp5227274.jpg",
    author: "Elon Musk",
    content: "Lorsque quelque chose est suffisamment important, vous le faites même si les chances ne sont pas en votre faveur.",
    yes: 25,
    no: 10,
  },
  {
    image: "https://wallpapercave.com/wp/wp6760233.jpg",
    author: "Satya Nadella",
    content: "Notre industrie ne respecte pas la tradition, elle ne respecte que l'innovation.",
    yes: 18,
    no: 12,
  },
  // {
  //   image: "sheryl-sandberg.png",
  //   author: "Sam Altman",
  //   content: "Fait vaut mieux que parfait.",
  //   oui: 30,
  //    no: 8,
  // },
   // {
  //   image: "https://wallpapercave.com/wp/wp13320173.jpg",
  //   author: "Sam Altman",
  //   content: "La façon de créer des entreprises milliardaires consiste d’abord à créer quelque chose que les gens aiment. Il n’y a pas vraiment de raccourci là-bas.",
  //   oui: 20,
  //    no: 15,
  // },
  {
    image: "https://c4.wallpaperflare.com/wallpaper/659/348/835/celebrity-tim-cook-wallpaper-preview.jpg",
    author: "Tim Cook",
    content: "Les lignes de touche ne sont pas l'endroit où vous voulez vivre votre vie. Le monde a besoin de vous dans l'arène.",
    yes: 22,
    no: 8,
  },
  {
    image: "https://wallpapercave.com/wp/wp2126146.jpg",
    author: "Mark Zuckerberg",
    content: "Dans un monde qui change très rapidement, la seule stratégie garantie pour échouer est de ne pas prendre de risques.",
    yes: 28,
    no: 5,
  },
];

function App() {
  const [card_list, setCard] = useState(default_citations);
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [showForm, setShowForm] = useState(false);

  const add_card = (e) => {
    e.preventDefault();

    const newCard = {
      image: image,
      author: author,
      content: content,
      yes: 0,
      no: 0,
    };

    setCard([...card_list, newCard]);
    setShowForm(false); // Fermer le formulaire après soumission
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const create_card = (list_card) => {
    return list_card.reverse().map((card, index) => (
      <Card
        key={index}
        image={card.image}
        author={card.author}
        content={card.content}
        yes={card.yes}
        no={card.no}
        like={() => setCard([...card_list.slice(0, index), { ...card, yes: card.yes + 1 }, ...card_list.slice(index + 1)])}
        delike={() => setCard([...card_list.slice(0, index), { ...card, no: card.no + 1 }, ...card_list.slice(index + 1)])}
      />
    ));
  };
  

  const all_card = create_card(card_list);

  return (
    <div>
      <div class="title-container">
        <h1 class="main-title">Techs Citations</h1>
        <p class="subtitle">Les citations les plus inspirantes des grandes personnalités</p>
      </div>
      <div className={`grid ${showForm ? "blur-background" : ""}`}>{all_card}</div>
      <button onClick={toggleForm} className="open-form-btn">
        Ajouter une citation
      </button>
      {showForm && (
        <div className="form-popup">
          <span className="close-form-btn" onClick={closeForm}>
            &times;
          </span>
          <Input submit={add_card} author_method={setAuthor} content_method={setContent} image_method={setImage}/>
        </div>
      )}
    </div>
  );
}

export default App;
