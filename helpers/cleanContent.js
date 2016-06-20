export default (content) => {
  const cdataExp = /<!\[CDATA\[([^]*)\]\]>/gm;
  let cleanedContent = content;
  while (cdataExp.test(cleanedContent)) {
    cleanedContent = cleanedContent.replace(cdataExp, '$1');
  }
  return cleanedContent.trim();
};
