export const ownerDocument = (node: Node): Document => {
  return (node && node.ownerDocument) || document;
};
