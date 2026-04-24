const PASSWORD='npc-atlas';

export default {
  async fetch(request) {
    const cookie = request.headers.get('Cookie') || '';
    if (cookie.includes('auth=ok')) {
      // Serve the actual site
      return fetch(request);
    }

    // Check POST (password submission)
    if (request.method === 'POST') {
      const form = await request.formData();
      if (form.get('password') === PASSWORD) {
        return new Response('OK', {
          status: 302,
          headers: { 'Location': '/', 'Set-Cookie': 'auth=ok; Path=/; Max-Age=86400' }
        });
      }
    }

    // Password gate page
    return new Response(LOGIN_PAGE, {
      headers: { 'Content-Type': 'text/html' },
      status: 401
    });
  }
};

const LOGIN_PAGE = \`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>🔒 Private</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#080810;font-family:system-ui,sans-serif;color:#d0d0e8}
  .box{background:#10101c;border:1px solid #1e1e30;border-radius:16px;padding:40px;max-width:360px;width:90%;text-align:center}
  h2{margin-bottom:24px;font-size:1.5rem}
  input{width:100%;padding:12px 16px;border:1px solid #2a2a40;border-radius:8px;background:#0a0a14;color:#fff;font-size:1rem;margin-bottom:16px;outline:none}
  input:focus{border-color:#9b8fff}
  button{width:100%;padding:12px;background:#9b8fff;color:#080810;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer}
  button:hover{background:#b8a8ff}
  .error{margin-top:12px;color:#ff6060;font-size:0.875rem;display:none}
</style>
</head>
<body>
<div class="box">
  <h2>🔒 Locked</h2>
  <form method="POST">
    <input type="password" name="password" placeholder="Enter password" autofocus>
    <button type="submit">Unlock</button>
    <p class="error">Incorrect password</p>
  </form>
</div>
</body>
</html>
\`;
