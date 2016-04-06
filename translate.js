document.addEventListener('DOMContentLoaded', function () {
    var scriptEl = document.querySelector('script[data-vocabulary]');

    if (!scriptEl) {
        return false;
    }

    var languageDefault = scriptEl.dataset.defaultLanguage || 'en';
    var language = (window.navigator.userLanguage || window.navigator.language).substr(0, 2) || languageDefault;

    dataSource = scriptEl.dataset.vocabulary;

    function getElementByXpath(path) {
        var els = [];
        var result = document.evaluate(path, document, null, XPathResult.ANY_TYPE, null);

        while (e = result.iterateNext()) {
            els.push(e);
        }

        return els;
    }

    var e = document.createElement('script');
    e.src = dataSource;
    e.type = 'text/json';
    e.onload = function () {
        console.log('Done!');
    }

    document.getElementsByTagName('head')[0].appendChild(e);

    var request = new XMLHttpRequest();
    request.open('GET', dataSource, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var vocab = JSON.parse(request.responseText);
            var elements = document.querySelectorAll('[data-translate]');

            Array.prototype.forEach.call(elements, function (el) {
                var dataKey = el.dataset.translate;
                var childNodes = Array.prototype.filter.call(el.childNodes, function (child) {
                    return child.nodeType === 3 && child.textContent.trim().length;
                });

                if (childNodes.length) {
                    for (key in vocab) {
                        if (dataKey === key) {
                            childNodes[0].nodeValue = vocab[key][language];
                            return true;
                        }
                    }
                }
            });

            var els = getElementByXpath('//*[@*[starts-with(name(.), "data-translate-")]]');

            Array.prototype.forEach.call(els, function (el) {
                var dataKeys = Object.keys(el.dataset);

                for (dataKey in dataKeys) {
                    var dataKey = dataKeys[dataKey];
                    var dataValue = el.dataset[dataKey];
                    var attrToTranslate = dataKey.replace('translate', '').toLowerCase();

                    for (key in vocab) {
                        if (dataValue === key) {
                            el.setAttribute(attrToTranslate, vocab[key][language]);
                        }
                    }
                }
            });
        } else {
            // Error
        }
    };

    request.onerror = function () {
        // Error
    };

    request.send();
});
