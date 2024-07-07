import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=d869bd7fb8a34ae4b2ed692c88a1dd4c`
      );
      setArticles(response.data.articles[2]);
      console.log("article data",articles)
    };

    fetchNews();
  }, []);

  return (
    <div className="flex flex-col items-center bg-indigo-800 text-white p-6 rounded-lg text-center">
      
    
          {articles.urlToImage && <img src={articles.urlToImage} alt="heading" className="mb-2" />}
          <div className="text-xl font-bold">{articles.title}</div>
          <div className="text-base">{articles.description}</div>
          <a href={articles.url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
            Read more
          </a>
        </div>
    
   
  );
};

export default NewsSection;
