/**
 * These constants are used for overrding the css of components rendered from md file
 * The default rendering by MDXProvider does not seem to apply a lot of css unless
 * provided in-line in the mdx file
 */
import styled from "styled-components";

const urlStyle = styled.a`
  color: #0c93e4 !important;
`;

const listStyle = styled.ul`
  list-style: disc;
  line-height: 150%;
  padding-left: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const numberStyle = styled.ol`
  list-style: decimal;
  line-height: 150%;
  padding-left: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const paragraphStyle = styled.p`
  line-height: 170%;
  margin: 5px 5px 5px 5px;
`;

const h1Style = styled.h1`
  line-height: 210%;
  font-weight: 500;
`;

const h2Style = styled.h2`
  line-height: 190%;
  font-weight: 500;
`;

const h3Style = styled.h3`
  line-height: 170%;
  font-weight: 500;
`;

const h4Style = styled.h4`
  line-height: 170%;
  font-weight: 500;
`;

const inlineCodeStyle = styled.code`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  padding: 2px 4px;
`;

const blockquoteStyle = styled.blockquote`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  padding: 5px 5px 5px 5px;
`;

const strongStyle = styled.strong`
  font-weight: bold;
`;

export default {
  urlStyle,
  listStyle,
  numberStyle,
  paragraphStyle,
  h1Style,
  h2Style,
  h3Style,
  h4Style,
  inlineCodeStyle,
  blockquoteStyle,
  strongStyle
};
