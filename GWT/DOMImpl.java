class DOMImpl {
  public native void setInnerText(Element elem, String text){
    // Remove all children first.
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
    // Add a new text node.
    if (text != null) {
      elem.appendChild($doc.createTextNode(text));
    }
  };
}
