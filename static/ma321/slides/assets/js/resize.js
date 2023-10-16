remark.macros.resize = function (altText, width) {
  var url = this;
  return '<img alt="' + altText + '" src="' + url + '" style="width: ' + width + '" />';
};

// Selecting the iframe element 

// window.addEventListener('load', function() {
// 	let message = { height: document.body.scrollHeight, width: document.body.scrollWidth };	

// 	// window.top refers to parent window
// 	window.top.postMessage(message, "*");
// });

// var frame = document.getElementByTagName("iframe"); 
  
// window.addEventListener('message', function(e) {
//   // message that was passed from iframe page
//   let message = e.data;

//   iframe.style.height = message.height + 'px';
//   iframe.style.width = message.width + 'px';
// } , false);   
