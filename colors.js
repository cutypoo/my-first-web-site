window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-9TGF667ZD4');

//Method를 포함하는 객체
var Body= {
    setBackgroundColor: function(color){
      document.querySelector('body').style.backgroundColor= color;
    },
    setColor: function(color){
      document.querySelector('body').style.color= color;
    }
}
function setColor(color){
  var alist=document.querySelectorAll('a');
  var i=0;
  while(i < alist.length){
    alist[i].style.color= color;
    i=i+1;
  }
}

//야간모드
function nightandday(self){
  if(self.value === '야간모드'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = '야간모드 끄기';
    setColor('SlateBlue');
  }

  else {
    Body.setBackgroundColor('lavender');
    Body.setColor('black');
    self.value = '야간모드';
    setColor('black');
  }
}
