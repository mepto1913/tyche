var all = document.getElementsByTagName("*");
for (var i = 0, max = all.length; i < max; i++) {

    if (all[i].hasAttribute("data-lottie")) {
        all[i].animation = lottie.loadAnimation({
            container: all[i],
            renderer: 'svg',
            loop: all[i].hasAttribute("data-lottie-loop"),
            mode: "normal",
            autoplay: all[i].hasAttribute("data-lottie-autoplay"),
            path: all[i].getAttribute('data-lottie-path')
        });
        all[i].animation.resize();

        if (all[i].hasAttribute('data-lottie-onclick')) {
            all[i].addEventListener('click', function () {
                this.animation.playSegments([0, this.animation.getDuration(true)], true)
            });
        }
        if (all[i].hasAttribute('data-lottie-hover')) {

            all[i].addEventListener('mouseenter', function () {
                this.animation.setDirection(1);
                this.animation.play()
            });
            all[i].addEventListener('mouseleave', function () {
                this.animation.setDirection(-1);
                this.animation.play()
            });
        }


    }
}
