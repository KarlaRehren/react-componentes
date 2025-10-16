/**
 * Article component - Reusable component for article content
 * @param {string} title - The article title
 * @param {string[]} paragraphs - Array of paragraph content
 */
function Article({ title = "Title", paragraphs = [] }) {
  const defaultParagraphs = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto expedita voluptatibus quisquam minima doloribus, nihil perspiciatis atque in deleniti.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolores.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, quos."
  ];

  const content = paragraphs.length > 0 ? paragraphs : defaultParagraphs;

  return (
    <article className="article">
      <h2>{title}</h2>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
}

export default Article;