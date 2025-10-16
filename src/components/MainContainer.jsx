import Article from './Article';
import Sidebar from './Sidebar';
import RelatedPost from './RelatedPost';
import Footer from './Footer';

/**
 * MainContainer component - Contains the main grid layout with all content sections
 */
function MainContainer() {
  return (
    <div className="container">
      <header className="header">
        Cristian
      </header>

      <main className="content">
        <Article />
        <Article />
        <Article />
      </main>

      <Sidebar />

      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />

      <Footer />
    </div>
  );
}

export default MainContainer;