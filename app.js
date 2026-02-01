<!DOCTYPE html>
<html>
<body>
    <div id="greeting"></div>

    <script>
        // SOURCE: Egy külsőleg kontrollálható forrás (URL paraméter)
        const urlParams = new URLSearchParams(window.location.search);
        const userName = urlParams.get('name');

        // SINK: Egy veszélyes végpont, ami értelmezi a HTML-t
        // A CodeQL itt "js/xss" vagy "js/dom-based-xss" hibát fog jelezni
        document.getElementById('greeting').innerHTML = "Üdvözöllek, " + userName;
    </script>
</body>
</html>
