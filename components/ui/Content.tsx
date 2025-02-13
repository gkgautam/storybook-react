import * as React from "react";
// Assuming you've created the AnchorLink component

interface ContentProps {
  children: React.ReactNode; // The nested components (e.g., Heading, Button, Paragraph, etc.)
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="content-container">{children}</div>;
};

export default Content;
