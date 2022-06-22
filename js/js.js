
        function imgSlider(anything) {
            document.querySelector('.pepsi').src = anything;
        }

        function changeBgColor(color) {
            const sec = document.querySelector('.sec');
            sec.style.background = color;
        }

        function menuToggle() {
            const toggleMenu = document.querySelector('.toggleMenu');
            const navigation = document.querySelector('.navigation');
            toggleMenu.classList.toggle('active');
            navigation.classList.toggle('active')
        }

        let spHienThi = document.getElementById('sanphaman');

        function hienThiPepsi() {
            spHienThi.style.display = 'block'
        }
        function anBotPepsi() {
            spHienThi.style.display = 'none'
        }

        $(document).ready(function () {
            $(".tabs-menu a").click(function (event) {
                event.preventDefault();
                $(this).parent().addClass("current");
                $(this).parent().siblings().removeClass("current");
                var tab = $(this).attr("href");
                $(".tab-content").not(tab).css("display", "none");
                $(tab).fadeIn();
            });
        });