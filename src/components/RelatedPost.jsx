/**
 * RelatedPost component - Reusable component for related posts
 * @param {string} title - The post title
 */
function RelatedPost({ title = "Another post" }) {
  return (
    <div className="related-post">
      {title}
    </div>
  );
}

export default RelatedPost;