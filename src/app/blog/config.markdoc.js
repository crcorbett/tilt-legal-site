import { Heading, Callout, Paragraph } from "./(components)";

export const config = {
  nodes: {
    paragraph: {
      render: "Paragraph",
    },
    heading: {
      render: "Heading",
      attributes: {
        level: { type: number },
      },
    },
  },
  tags: {
    callout: {
      render: "Callout",
      attributes: {
        title: {
          type: string,
          default: "", // default heading for callout component
        },
      },
    },
  },
};

export const components = {
  Paragraph,
  Heading,
  Callout,
};
