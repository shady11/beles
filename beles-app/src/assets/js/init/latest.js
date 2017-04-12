window.addEventListener('scroll', function(e) {
    var d = window.pageYOffset || document.documentElement.scrollTop,
        shrinkFirst = 120,

        posts = document.querySelector('#topPosts'),
        postsWidth = document.querySelector('#topPosts').offsetWidth,
        postsHeight = document.querySelector('#topPosts').offsetHeight,

        footer = document.querySelector('#topPosts'),
        footerHeight = document.querySelector('.footer').offsetHeight,

        windowWidth = document.body.offsetWidth,
        windowHeight = document.body.offsetHeight;

    if (d > shrinkFirst) {

        var stylePosts =
            'position: fixed;' +
            'top: 0;' +
            'width: ' + postsWidth + 'px;';
        posts.setAttribute('style', stylePosts);

        if (d > (windowHeight - footerHeight - postsHeight - 48)) {
            posts.removeAttribute("style");

            var top = windowHeight - footerHeight - postsHeight - shrinkFirst - 48;

            var stylePosts2 =
                'position: absolute;' +
                'top: ' + top + 'px;' +
                'width: ' + postsWidth + 'px;';

            posts.setAttribute('style', stylePosts2);
        }

    } else {
        posts.removeAttribute("style");
    }
});