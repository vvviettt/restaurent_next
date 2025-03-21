import BlogItem from "@components/blog/BlogItem";

const PaginatedBlogPosts = ({ items, columns }) => {
  var columnsClass = "";

  switch (columns) {
    case 2:
      columnsClass = "col-lg-6 d-flex";
      break;
    default:
      columnsClass = "col-lg-4 d-flex";
  }

  return (
    <div className="row tst-feature-box  pt-4">
      {items.map((item, key) => (
        <div className={`${columnsClass}`} key={`blog-post-${key}`}>
          <BlogItem item={item} />
        </div>
      ))}
    </div>
  );
};
export default PaginatedBlogPosts;
