import { safeLoad } from 'js-yaml';

const findMetadataIndicies = (mem: number[], item: string, i: number) => {
  if (/^---/.test(item)) {
    mem.push(i);
  }

  return mem;
};

const parseMetaData = ({
  lines,
  metadataIndices,
}: {
  lines: string[];
  metadataIndices: number[];
}) => {
  if (metadataIndices.length > 0) {
    let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
    return safeLoad(metadata.join('\n'));
  }
  return {};
};

const parseContent = ({
  lines,
  metadataIndices,
}: {
  lines: string[];
  metadataIndices: number[];
}) => {
  if (metadataIndices.length > 0) {
    lines = lines.slice(metadataIndices[1] + 1, lines.length);
  }
  return lines.join('\n');
};

const parseMD = (contents: string) => {
  const lines = contents.split('\n');
  const metadataIndices = lines.reduce(findMetadataIndicies, []);
  const metadata = parseMetaData({ lines, metadataIndices });
  const content = parseContent({ lines, metadataIndices });
  return { metadata, content };
};

export default parseMD;
