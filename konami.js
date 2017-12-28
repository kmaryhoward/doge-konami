const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
  document.addEventListener('keydown', function(e) {
  const key = parseInt(e.which || e.detail);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
       console.log("Get ready--a doge is coming");
       doge();
        index = 0;
        e.preventDefault();
    }
  } else {
      index = 0;
    }
  console.log(e.which);
  console.log(index);
  console.log(key);
});
var doge = function() {
  var div = document.createElement('div');
  var img = document.createElement('img');
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var ease = "all .1s linear"; 
  
	var topRandom = windowHeight*Math.random()  + 'px';
  var leftRandom = windowWidth*Math.random() + 'px';
  
  div.style.position = 'absolute';
	div.style.zIndex = 10;
	div.style.outline = 0;
  div.style.WebkitTransition = ease;
	div.style.WebkitTransform = "rotate(1deg) scale(1.01,1.01)";
	div.style.transition = ease;
  div.style.top = topRandom;
  div.style.left = leftRandom;
  
  
  var imgSrc = ['https://i.ytimg.com/vi/Yj7ja6BANLM/maxresdefault.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_X37FW49sAa60Ykbgnj61wvl5Z4tLsp6xES6dgO7Vfj1ePeUs1Q', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQyPlHHtCT2kLfB-ZKgqzhiYfMpRc31lvoPiOHuVPf2MubJExf0', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTqKuoLpsqMf5UtzOBe_35iqHmcw1WeeV_35DjnNj0cTvRjqK7tDw', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSL9vx3-3kfmLkr-zGVULfODcxTrCE9amOCw7rFfzCQNIYbbrMBPQ', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRN0hOpmcFsSrGEVTTiQF8nvOlYtcq-QigaHMcJrViimtTZOh7pJw'];
  var randomSrc = Math.floor(Math.random() * imgSrc.length);
  img.setAttribute('src',imgSrc[randomSrc]);
	
  
  var body = document.getElementsByTagName('body')[0];
	body.appendChild(div);
	div.appendChild(img);		
  
 
  div.onclick = doge;
}


