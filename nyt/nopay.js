
async function getHTML(url) {
  var res = await fetch(url);
  var text = await res.text();
  var doc = new DOMParser().parseFromString(text, 'text/html');
  return doc;
}

async function reloadContent() {
  var doc = await getHTML(refUrl());
  document.body.innerHTML = doc.body.innerHTML;
}

function refUrl(){
  var og_url = Array.from(document.head.getElementsByTagName('meta')).filter(el=> el.getAttribute('property') == 'og:url');
  var ref_url = og_url && og_url.length ? og_url[0].getAttribute('content') : null;
  if(ref_url){
    return ref_url;
  }else{
    return window.location.href;
  }
}
reloadContent()
