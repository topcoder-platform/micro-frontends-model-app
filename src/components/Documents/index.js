/**
 * Document display component
 *
 */
import React from "react";
import Loadable from "react-loadable";
import { preToCodeBlock } from "mdx-utils";
import { MDXProvider } from "@mdx-js/react";
import appMenu from "../../constants/appMenu";
import _ from "lodash";
import { Code } from "../CodeRenderer";
import styles from "../../constants/componentStyles";

const Documents = ({ documentId }) => {
  // This is used to decorate the various md/mdx tags by MDXProvider
  const components = {
    a: styles.urlStyle,
    ul: styles.listStyle,
    p: styles.paragraphStyle,
    h2: styles.h2Style,
    h3: styles.h3Style,
    inlineCode: styles.inlineCodeStyle,
    pre: (preProps) => {
      const props = preToCodeBlock(preProps);

      // Code component is used for rendering code which has a copy function as well
      if (props) {
        return <Code {...props} />;
      } else {
        return <pre {...preProps} />;
      }
    },
  };
  
  var document = {}
  appMenu.forEach(item => {
    if (item.hasOwnProperty("id")) {
      if (item.id === documentId) {
        document = item
      }
    } else {
      if (item.hasOwnProperty("children")) {
        item.children.forEach(subitem => {
          if (subitem.hasOwnProperty("id")) {
            if (subitem.id === documentId) {
              document = subitem
            }
          }
        })
      }
    }
  });

  let LoadDocument;
  if (document) {
    // Dynamically import the document to be displayed
    LoadDocument = Loadable({
      loader: async () =>
        import(`../../pages${document.filePath || ""}/${document.fileName}`), // eslint-disable-line no-alert
      loading() {
        return <div>Loading...</div>;
      },
    });
  }

  return (
    <div style={{ overflow: "overlay" }}>
      <MDXProvider components={components}>
        <LoadDocument />
      </MDXProvider>
    </div>
  );
};

export default Documents;
