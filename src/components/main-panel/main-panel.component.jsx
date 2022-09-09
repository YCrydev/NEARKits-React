import Footer from "../Footer";

const MainPanel = ({ children }) => {
  return (
    <div className="main-panel">
      <div className="content-wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default MainPanel;
