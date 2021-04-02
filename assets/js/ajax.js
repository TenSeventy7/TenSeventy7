    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function lazyLoadImages() {
        let lazyImages = document.querySelectorAll(".lazy");
        new LazyLoad(lazyImages);
    }

    function showPreloader() {
        var preloaderScreen = document.getElementById('preloader');
        preloaderScreen.classList.remove('hide', 'fade-out');
        preloaderScreen.classList.add('fade-in')
    }

    function hideFullPreloader() {
        var preloaderScreen = document.getElementById('preloader');
        preloaderScreen.classList.add('fade-out');
        preloaderScreen.classList.remove('fade-in');
        setTimeout(function() {
                preloaderScreen.classList.add('hide');
                lazyLoadImages();
            }, 500) //Note that this interval matches the timing of CSS animation
    }

    function showContent() {
        var contents = document.querySelectorAll('.articles');
        for (var i = 0; i < contents.length; i++) {
            contents[i].classList.remove('hide');

        };
        for (var i = 0; i < contents.length; i++) {
            contents[i].classList.add('fade-in');

        };
        lazyLoadImages();
    }

    function hideFullPlaceholder() {
        var placeholders = document.querySelectorAll('.placeholders');
        for (var i = 0; i < placeholders.length; i++) {
            placeholders[i].classList.add('hide');

        };
        showContent();
    }

    async function hidePreloader() {
        if(window.location.hash) {
            var hash = window.location.hash.substring(1);

            if (!hash.includes('gid') || !hash.includes('pid')) {         
                document.getElementById(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                document.getElementById('content').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            document.getElementById('content').scrollIntoView({
                behavior: 'smooth'
            });
        }

        await sleep(3000);
        hideFullPreloader();
    }

    async function hidePlaceholder() {
        await sleep(3000);
        hideFullPlaceholder();
    }

    // we want to re-load our main scripts so things such as search and sliders work
    function loadMainScript() {
        (
            function(document, tag) {
                var scriptTag = document.createElement(tag),
                    firstScriptTag = document.getElementsByTagName(tag)[0];
                scriptTag.src = '/js/script.min.js';
                firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM
            }
            (document, 'script')
        );
    }

    var currentUrl = window.location.href;

    function navigatePage(newPage) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState !== XMLHttpRequest.DONE)
                return;

            var newDocument = httpRequest.responseXML;
            if (newDocument === null)
                return;

            var newContent = httpRequest.responseXML.getElementById("posts");
            if (newContent === null)
                return;

            document.title = newDocument.title;

            var contentElement = document.getElementById("posts");
            contentElement.replaceWith(newContent);
            document.getElementById('content').scrollIntoView({
                behavior: 'smooth'
            });
            hidePlaceholder();
        }

        httpRequest.responseType = "document";
        httpRequest.open("GET", newPage);
        httpRequest.send();
    }

    function loadPage(newUrl) {
        currentUrl = newUrl;

        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            var offlinePage = '/offline';

            if (httpRequest.readyState !== XMLHttpRequest.DONE)
                return;

            var newDocument = httpRequest.responseXML;
            if (newDocument === null)
                window.location.href = '/offline/';

            var newContent = httpRequest.responseXML.getElementById("content");
            if (newContent === null)
                window.location.href = '/offline/';

            document.title = newDocument.title;

            var contentElement = document.getElementById("content");
            contentElement.replaceWith(newContent);
            loadMainScript();
        }

        httpRequest.responseType = "document";
        httpRequest.open("GET", newUrl);
        httpRequest.send();
    }

    window.onload = function() {
        // Make links load asynchronously
        document.body.addEventListener("click", function(event) {
            var newUrl = '';

            if (event.target.id.toLowerCase() == 'figure') {
                return;
            } else if (event.target.tagName.toLowerCase() == 'svg') {
                var newUrl = event.target.parentElement.href;
            } else if (event.target.tagName.toLowerCase() == 'img') {
                var newUrl = event.target.parentElement.href;
            } else if (event.target.tagName.toLowerCase() == 'button') {
                return;
            } else if (event.target.tagName.toLowerCase() != 'a') {
                return;
            } else {
                var newUrl = event.target.href;
                var cleanNewPage = event.target.href.split('#')[0];
            }

            var domain = window.location.origin;
            var currentPage = window.location.href;
            var cleanCurrentPage = currentPage.split('#')[0];

            // We don't want AJAX loads on AJAX-loaded content
            if (newUrl === '')
                return;

            if (newUrl === null)
                return;

            if (newUrl === undefined) {
                return;
            }

            // History API needed to make sure back and forward still work
            if (history === null)
                return;

            if (newUrl.includes('#') && cleanNewPage === cleanCurrentPage) 
                return;

            if (newUrl.includes('javascript:;')) 
                return;

            // External links should instead open in a new tab

            if (newUrl === undefined) {
                return;
            } else if (newUrl.includes(domain)) {
                if (newUrl.includes('posts')) {
                    event.preventDefault();
                    history.pushState(null /*stateObj*/ , "" /*title*/ , newUrl);
                    navigatePage(newUrl);
                } else {
                    event.preventDefault();
                    showPreloader();
                    history.pushState(null /*stateObj*/ , "" /*title*/ , newUrl);
                    setTimeout(function() {
                        loadPage(newUrl);
                    }, 500)
                }
            } else {
                return
            }
        });
    }

    window.onpopstate = function(event) {
        var domain = window.location.origin;
        oldUrl = window.location.href;
        cleanOldUrl = oldUrl.split('#')[0];
        prevUrl = currentUrl.split('#')[0];

        if (oldUrl.includes(domain)) {
            if (oldUrl.indexOf("posts") > 0) {
                navigatePage(oldUrl);
            } else {
                if (oldUrl.includes('#') && cleanOldUrl === prevUrl || cleanOldUrl === prevUrl) {
                    return
                } else {
                    showPreloader();
                    setTimeout(function() {
                        loadPage(window.location.href);
                    }, 500)
                }
            };
        } else {
            return
        }
    }