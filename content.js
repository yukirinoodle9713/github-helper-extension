Array.prototype.forEach.call(
    document.getElementsByTagName('pre'),
    x => x.classList.add('notranslate')
);  