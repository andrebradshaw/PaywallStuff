var reg = (o, n) => o ? o[n] : '';
var gi = (o, s) => o ? o.getElementById(s) : console.log(o);
var ele = (t) => document.createElement(t);
var attr = (o, k, v) => o.setAttribute(k, v);

async function noPay(){
  var res = await fetch(window.location.href);
  var text = await res.text();
  var noScript = text.replace(/\n/g,'').replace(/<script.*?>[\w\W\n]+?<\/script>/g, '').replace(/<iframe.*?>[\w\W\n]+?<\/iframe>/g, '').replace(/<meta.*?>[\w\W\n]*?<\/meta>|<meta.*?>/g, '');
  var contentBody = reg(/<body>(.+?)<\/body>/.exec(noScript),1);
  if(gi(document, 'noPay_butThanks')) gi(document, 'noPay_butThanks').outerHTML;
  document.body.innerHTML = '';
  var reader = ele('div');
  attr(reader,'id','noPay_butThanks');
  attr(reader,'style','z-index: 11221; background: #fff;');
  reader.innerHTML = contentBody;
  document.body.appendChild(reader); 
}
noPay();
