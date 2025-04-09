var ai_version = "1.0.2";

function validateAIInput(input) {
  return input && input.query && input.query.length > 0;
}

function getAIFallbackResponse() {
  return "对不起，我现在不太明白你的意思。";
}