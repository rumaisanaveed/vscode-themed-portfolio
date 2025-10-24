import { Helmet, HelmetProvider } from "react-helmet-async";
import ArticleCard from "./ArticleCard";
import { articles } from "./constants";

function Articles() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rumaisa Naveed | Articles</title>
      </Helmet>
      <div className="p-8">
        <h1 className="pb-8 text-3xl font-semibold text-textColor">
          Recent posts from&nbsp;
          <a
            className="underline decoration-accentColor"
            href="https://rumaisanaveed.hashnode.dev"
            target="_blank"
            rel="noreferrer"
          >
            Hashnode
          </a>
        </h1>
        <div className="grid gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => {
            return (
              <ArticleCard
                key={index}
                url={article.url}
                image={article.image}
                title={article.title}
                desc={article.description}
              />
            );
          })}
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Articles;
