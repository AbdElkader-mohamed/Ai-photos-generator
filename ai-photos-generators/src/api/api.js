const apiKey = "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";

export const getData = async (inputValue) => {
  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      'prompt': inputValue,
      'n': 3,
      'size': "256x256"
    })
  };
  const response = await fetch(
    "https://api.openai.com/v1/images/generations",
    methods
  );
  return response.json();
};
