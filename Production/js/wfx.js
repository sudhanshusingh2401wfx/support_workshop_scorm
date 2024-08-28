var head = document.getElementsByTagName('head');
if (head && head.length != 0) {
    var script = document.createElement("script");
    script.setAttribute("src", "//cdn.whatfix.com/prod/96a8bb49-3fb1-4b95-b2a9-b56422b8bc0e/initiator/initiator.nocache.js");
    script.setAttribute("type", "text/javascript");
    head[0].appendChild(script);
}