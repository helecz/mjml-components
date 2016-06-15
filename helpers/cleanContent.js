export default (content) => {
	const cdataExp = /<!\[CDATA\[([^]*)\]\]>/gm;
	while(cdataExp.test(content)) {
		content = content.replace(cdataExp, '$1');
	}
	return content.trim();
}
