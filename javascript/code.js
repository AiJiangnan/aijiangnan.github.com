function code_color(id){
	var str0 = document.getElementById(id).value;
	var str1 = str0.replace(/\t/g,'&emsp;');
	//代码高亮显示
	var keyword = /public|class|static|void|main/;
	var reg_keyword=new RegExp(keyword,"g");
	var note = /(\/\*)[\w\W\r\n]*?(\*\/)|\/\/([^\r\n][\w\W].*)?/;
	var reg_note=new RegExp(note,'g');
	var string = /"[\w\W\r\n]*?"/;
	var reg_string=new RegExp(string,'g');

	str1 = str1.replace(reg_keyword,'<font color=#512DA8>$&</font>');
	str1 = str1.replace(reg_note,'<font color=#4CAF50>$&</font>');
	str1 = str1.replace(reg_string,'<font color=#757575>$&</font>');
	
	//代码高亮显示
	var str2 = str1.split('\n');
	document.write('<table bgcolor=#e0e0e0 border="1" rules="cols">');
	for(i=1;i<(str2.length+1);i++){
		document.write('<tr><td width=30 align="center"><font color=gray>'+i+'</font></td><td width=600 style="padding:0px 12px;font-size:18px;"><code>'+str2[i-1]+'</code></td></tr>');
	}
	document.write('</table>');
}