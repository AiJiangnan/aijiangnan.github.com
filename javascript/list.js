function list_a(h1,h2){
	for (i = 1; i < (h1 + 1); i++) {
		document.getElementById('P' + i).target = 'myiframe';
		document.getElementById('P' + i).href = 'java/article_' + i + '.html';
		for (j = 1; j < (h2[i - 1] + 1); j++) {
			document.getElementById('P' + i + '_' + j).target = 'myiframe';
			document.getElementById('P' + i + '_' + j).href = 'java/article_' + i + '.html#P' + i + '_' + j;
		}
	}
}