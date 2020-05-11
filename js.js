
// 点击切换电影作品
var switchleft=document.getElementById("switch-left");
var switchright=document.getElementById("switch-right");
var boxone=document.getElementById("moviebox-one");
var boxtwo=document.getElementById("moviebox-two");
var showtext=document.getElementById("showtext");
var index=1;
showtext.innerHTML=index+"/2";
switchright.onclick=function () {
	if (index==1) {
		boxone.className="option";
		index=2;
		boxtwo.className="option selected";
		showtext.innerHTML=index+"/2";
	}

}
switchleft.onclick=function () {
	if (index==2) {
		boxone.className="option selected";
		index=1;
		boxtwo.className="option";
		showtext.innerHTML=index+"/2";
	}
}


//返回到目录处
var footer=document.getElementById("footer");
window.onscroll=function(){
	 
	if(document.documentElement.scrollTop > 1180){
		// footer.style.setProperty('visibility','visible');
		 footer.style.setProperty('display','block');
	}else{
		 footer.style.setProperty('display','none');

	}
	 
	 
}
