import React from "react";
import ArticleCard from "./../../molecules/ArticleCard/index";

const Article = () => {
  return (
    <div className="container mt-5 ">
      <div className="row ">
        <div className="col-12 col-md-4">
          <ArticleCard />
        </div>
        <div className="col-12 col-md-4">
          <ArticleCard />
        </div>
        <div className="col-12 col-md-4">
          <ArticleCard />
        </div>
      </div>
    </div>
  );
};

export default Article;
