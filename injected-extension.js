var $$ = this;
function beautify() {
  var code = document.getElementsByTagName("pre")[0].innerText;
  safari.self.tab.dispatchMessage("beautifyThis",code);
}
function beautified(code) {
  document.getElementsByTagName("pre")[0].innerText = code;
}
function handle_messages(msg) {
  $$[msg.name].apply($$, [msg.message]);
}
safari.self.addEventListener("message", handle_messages, false);