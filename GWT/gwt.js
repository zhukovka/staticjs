//Compiled Javascript (Safari):
$setInnerText(b.element, 'Click Me!');
function $setInnerText(elem, text) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
  if (text != null) {
    elem.appendChild($doc.createTextNode(text));
  }
}
// Compiled Javascript (IE):
b.element.innerText = 'Click Me!';
