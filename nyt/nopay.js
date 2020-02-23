  async function getHTML(url) {
    var res = await fetch(url);
    var text = await res.text();
    var doc = new DOMParser().parseFromString(text, 'text/html');
    return doc;
  }

  async function reloadContent() {
    var doc = await getHTML(window.location.href);
    document.body.innerHTML = doc.body.innerHTML;
  }
  reloadContent()
