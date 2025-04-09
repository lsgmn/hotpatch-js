var ai_version = "1.0.4";
function validateAIInput(input) {
  log("JS 收到参数：" + JSON.stringify(input));
  log("Hello from JS");
  return input && input.query && input.query.length > 0;
}

function getAIFallbackResponse() {
  return "对不起，我现在不太明白你的意思。";
}

log("Hello from JS");