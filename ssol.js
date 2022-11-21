var logoElement = document.querySelectorAll("div[id^='Logo']");
if (logoElement.length > 0) {
    logoElement[0].remove();
}

const text = document.querySelectorAll('h1, h2, h3,h4')

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Student Services Online')) {
        text[i].innerHTML = text[i].innerHTML.replace('Student Services Online', 'SSOL Remix')
    }

}































let url = window.location.href;

let lastPart = url.substring(url.lastIndexOf('_') + 1);

console.log(lastPart);

if (lastPart.toLowerCase().includes("subj")) {
    // load subject css
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'subject.css');
    document.head.appendChild(link);
}

else if (lastPart.toLowerCase().includes("callnum")) {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'coursepage.css');
    document.head.appendChild(link);
}


var div = document.createElement("div");
div.innerText = "BLAH BLAH BLAH";
document.body.appendChild(div);


