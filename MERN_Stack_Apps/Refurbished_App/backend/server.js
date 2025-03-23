require('dotenv').config();
const fetchDat = async () => {
    const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.API_KEY_H_F}`,
            "Content-Type": "application/json"
          },
        body: JSON.stringify({ inputs: "Can you tell me about sun" }),
      });
      
    const data = await response.json();
    console.log(data);
}

fetchDat();