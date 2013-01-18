/*bpm 
   js:test-build.js, 
   css:test-build.css 
*/

(function (baseUrl, paths, callback) {

	for (var i = 0, pi; pi = paths[i++];) {
		document.write('<script type="text/javascript" src="' + baseUrl + pi + '"></script>');
	}

})('./', ['core/base.js', 'dom/base.js'], function use() {
	alert("something is right...");
});


