var ai_version = "1.0.3";
log("JS 收到参数：" + JSON.stringify(input));
function validateAIInput(input) {
  return input && input.query && input.query.length > 0;
}

function getAIFallbackResponse() {
  return "对不起，我现在不太明白你的意思。";
}