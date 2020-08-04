import { ownerDocument } from './ownerDocument';

export const ownerWindow = (node: Node): Window => {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
};
