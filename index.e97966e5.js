function e(e){for(var r=e[0].toUpperCase(),t=1;t<e.length;t++)e[t]===e[t].toUpperCase()&&(r+=" "),r+=e[t];return r}document.querySelectorAll("input").forEach(function(r){var t=document.createElement("label");t.classList.add("field-label"),t.htmlFor=r.id,t.innerText=e(r.name),r.before(t),r.placeholder=e(r.name)});
//# sourceMappingURL=index.e97966e5.js.map
