import { useEffect, useState } from "react";
import axios from "axios";

import "./index.scss";

function App() {
  interface ITagArticle {
    id: number;
    name_tag: string;
  }
  interface Article {
    id: number;
    name: string;
    quantity: string;
    image: string;
    tag: ITagArticle[];
    volume: number;
    // Другие свойства, если они есть
  }

  const [articles, setArticles] = useState<Article[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Функция для загрузки данных с сервера
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://monstrcorp.com/api/v1/waters/"
        );
        setArticles(response.data); // Обновление данных в состоянии
        setLoad(!load);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="load">
        {load ? (
          <div className="cart">
            {articles?.map((article) => (
              <div className="cart__item" key={article.id}>
                <img src={article.image} alt="image" />
                <span className="cart__title">{article.name}</span>
                <p>{article.quantity}</p>
                <p>{article.volume}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="loader__wrapper">
            <span className="loader"></span>
            <p>Загрузка</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
