---
---
{% include serverstatus.js %}
.then(data => {
    // siteNav dependent
    {% if site.siteNav %}
    document.getElementById("serverInd").classList.add("text-green-600");
    document.getElementById("serverPlaynow").innerHTML = `<span class="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-thin uppercase text-gray-900 mr-2 shadow-lg">Play Now: ${data.players.online} Online</span>`;
    {% endif %}
});
