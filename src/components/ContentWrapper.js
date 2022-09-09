import { React } from "react";
import propTypes from "prop-types";
import Container from "./container/container.module";

const ContentWrapper = ({ children }) => {
  return (
    <div className="container-wrapper">
      <Container children={children} />
    </div>
  );
};

ContentWrapper.propTypes = {
  children: propTypes.node.isRequired,
};

export default ContentWrapper;
