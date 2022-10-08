<!DOCTYPE html>
<html>
<body>

<p>Tunggu 1 Detik (1000 milliseconds) Untuk melihat pesan rahasia</p>

<h1 id="demo"></h1>

<script>
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("For Hacktoberfest :*");}, 1000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
</script>

</body>
</html>
