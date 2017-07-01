var HelloWorld = function(){};
stjs.extend(HelloWorld, null, [], function(constructor, prototype){
    constructor.main = function(args) {
        window.onload = function(ev) {
            var form = window.document.forms[0];
            var button = form.elements["say"];
            var text = form.elements["to"];
            button.onclick = function(ev) {
                alert("Hello " + text.value);
                return true;
            };
        };
    };
}, {});

if (!stjs.mainCallDisabled) HelloWorld.main();
