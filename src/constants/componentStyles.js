/**
 * These constants are used for overrding the css of components rendered from md file
 * The default rendering by MDXProvider does not seem to apply a lot of css unless
 * provided in-line in the mdx file
 */
import styled from "styled-components";

const urlStyle = styled.a`
  color: #0c93e4 !important;
  text-decoration-line: underline;
  text-decoration-style: single;
  font-weight: 600;
`;

const listStyle = styled.ul`
  list-style: disc;
  line-height: 150%;
  padding-left: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const paragraphStyle = styled.p`
  line-height: 150%;
`;

const h2Style = styled.h2`
  line-height: 150%;
`;

const h3Style = styled.h3`
  line-height: 150%;
`;

const inlineCodeStyle = styled.code`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  padding: 2px 4px;
`;

export default {
  urlStyle,
  listStyle,
  paragraphStyle,
  h2Style,
  h3Style,
  inlineCodeStyle,
};
