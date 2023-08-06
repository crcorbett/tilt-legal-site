import { Config } from "@markdoc/markdoc";
import { Heading, Callout, Paragraph } from "./(components)";

export const config: Config = {
  nodes: {
    paragraph: {
      render: "Paragraph",
    },
    heading: {
      render: "Heading",
      attributes: {
        level: { type: Number },
      },
    },
  },
  tags: {
    callout: {
      render: "Callout",
      attributes: {
        title: {
          type: String,
          default: "", // default heading for callout component
        },
      },
    },
  },
};

export const components = {
  Paragraph: Paragraph,
  Heading: Heading,
  Callout: Callout,
};
