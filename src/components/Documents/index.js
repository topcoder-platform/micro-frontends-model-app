/**
 * Document display component
 *
 */
import React, { useEffect } from 'react';
import Loadable from "react-loadable";
import { preToCodeBlock } from "mdx-utils";
import { MDXProvider } from "@mdx-js/react";
import appMenu from "../../constants/appMenu";
import _ from "lodash";
import { Code } from "../CodeRenderer";
import styles from "../../constants/componentStyles";

const Documents = ({ folderId, documentId }) => {
  // This is used to decorate the various md/mdx tags by MDXProvider
  const components = {
    a: styles.urlStyle,
    ul: styles.listStyle,
    ol: styles.numberStyle,
    p: styles.paragraphStyle,
    h1: styles.h1Style,
    h2: styles.h2Style,
    h3: styles.h3Style,
    h4: styles.h4Style,
    inlineCode: styles.inlineCodeStyle,
    blockquote: styles.blockquoteStyle,
    strong: styles.strongStyle,
    pre: (preProps) => {
      const props = preToCodeBlock(preProps);
      // Code component is used for rendering code which has a copy function as well
      if (props) {
        return <Code {...props} />;
      } else {
        return <pre {...preProps} />;
      }
    }
  };
  
  var selDocument = {}
  if (documentId) {
    if (folderId) {
      appMenu.forEach(item => {
        if (item.hasOwnProperty("id")) {
          if (item.id === documentId  && item.filePath === "/" + folderId) {
            selDocument = item
          }
        } else {
          if (item.hasOwnProperty("children")) {
            item.children.forEach(subitem => {
              if (subitem.hasOwnProperty("id")) {
                if (subitem.id === documentId && subitem.filePath === "/" + folderId) {
                  selDocument = subitem
                }
              }
            })
          }
        }
      });
    } else {
      appMenu.forEach(item => {
        if (item.hasOwnProperty("id")) {
          if (item.id === documentId) {
            selDocument = item
          }
        }
      });
    }
  } else {
    appMenu.forEach(item => {
      if (item.hasOwnProperty("id")) {
        if (item.id === "documentation") {
          selDocument = item
        }
      }
    });
  }

  let LoadDocument;
  if (selDocument) {
    // set page title and triggering analytics
    useEffect(() => {
      let formattedPageTitle = "Documentation | Topcoder"
      if (selDocument.title && selDocument.title != "Documentation") {
        formattedPageTitle = selDocument.title + " | " + formattedPageTitle
      }
      document.title = formattedPageTitle
      // call analytics if the parent Frame app initialized it
      if (window.analytics && typeof window.analytics.page === "function") {
        window.analytics.page();
      }
    });
    // Dynamically import the document to be displayed
    LoadDocument = Loadable({
      loader: async () =>
        import(`../../pages${selDocument.filePath || ""}/${selDocument.fileName}`), // eslint-disable-line no-alert
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
