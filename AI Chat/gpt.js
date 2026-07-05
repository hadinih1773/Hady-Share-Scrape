/*
skrep gpt-3.5
creator: nath
base: https://chatopenai.id
note: jangan lupa follow ch
*/

import fetch from "node-fetch";
import FormData from "form-data";

const client_id = () =>
  Math.random().toString(36).slice(2, 12);

async function chat(message, history = []) {
  const form = new FormData();
  form.append("_wpnonce", "289885bd73");
  form.append("post_id", "2");
  form.append("url", "https://chatopenai.id");
  form.append("action", "wpaicg_chat_shortcode_message");
  form.append("message", message);
  form.append("bot_id", "0");
  form.append("chatbot_identity", "shortcode");
  form.append("wpaicg_chat_client_id", client_id());
  form.append("wpaicg_chat_history", JSON.stringify(history));

  const res = await fetch("https://chatopenai.id/wp-admin/admin-ajax.php", {
    method: "POST",
    headers: {
      ...form.getHeaders(),
      "accept": "*/*",
      "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "origin": "https://chatopenai.id",
      "referer": "https://chatopenai.id/",
      "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36",
      "cookie": "__gads=ID=604682d9abba4b37:T=1771508465:RT=1771508465:S=ALNI_MZD6BK-Hugka4qlTfu1OPenYLboGQ",
    },
    body: form,
  });

  const json = await res.json();

  if (json.status !== "success" || !json.data) {
    throw new Error(JSON.stringify(json));
  }

  return json.data;
}
(async () => {
  const result = await chat('Halo');
  console.log(result);
})();