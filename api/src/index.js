import { Router } from 'itty-router'
const router = Router()


const corsheaders = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Methods" : "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers" : "Origin, Content-Type, X-Auth-Token"
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function response(text, data = {}) {
  data.headers = {...data.headers, ...corsheaders};
  return new Response(text, data)
}

router.post("/user/login", async request => {
  var user;
  var password;
  try {
    const content = await request.text();
    const buffer = Buffer.from(content, "base64").toString().split(":");
    if (buffer.length != 2) {
      return response("Data error", {status: 401});
    }
    user = buffer[0];
    password = buffer[1];
  } catch (error) {
    return response("Data error", {status: 401});
  }


  const data = JSON.parse(await USERS.get(user));
  if (data === null) {
    return response(JSON.stringify({status: "fail", message: "User or password incorrect."}))
  }

  if (data.password === password) {
    await sleep(Math.floor(Math.random() * (50 - 0 + 1) + 0))
    return response(JSON.stringify({status: "success", token: data.token}))
  } else {
    await sleep(Math.floor(Math.random() * (50 - 0 + 1) + 0))
    return response(JSON.stringify({status: "fail", message: "User or password incorrect."}))
  }
})


router.options("*", () => response("", {status: 200}))

router.all("*", () => response("404, not found", { status: 404}))

addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
})