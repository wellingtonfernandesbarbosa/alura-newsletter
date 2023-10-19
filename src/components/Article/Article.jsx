import PropTypes from 'prop-types';

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  alt: PropTypes.string,
};

const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="p-5 bg-gray-300 flex flex-col gap-3 items-center dark:bg-dark-200 sm:rounded-lg sm:shadow-lg">
      <h3 className="text-xl text-alura-200 font-bold text-center dark:text-gray-400">{title}</h3>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p className="text-alura-200 dark:text-gray-400 text-justify" key={index}>{content}</p>
        ))}
      </div>
    </div>
  );
};




export default Article;
