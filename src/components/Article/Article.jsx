/* eslint-disable react/prop-types */
const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="p-5 bg-gray-300 flex flex-col gap-3 items-center dark:bg-dark-200 sm:rounded-lg sm:shadow-lg">
      <h3 className="text-xl text-alura-200 font-bold text-center dark:text-gray-400">
        {title}
      </h3>
      <div className="w-full justify-end gap-2 hidden sm:flex ">
        {tags.map((tag) => (
          <span key={tag} className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 font-bold text-xs uppercase">{tag}</span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p
            className="text-alura-200 dark:text-gray-400 text-justify"
            key={index}
          >
            {content}
          </p>
        ))}
      </div>
      {image && <img className="sm:p-4" src={image} />}
      {image && alt && (
        <span className="text-alura-200 dark:text-gray-400 sr-only">{alt}</span>
      )}
    </div>
  );
};

export default Article;
