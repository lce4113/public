// javascript:void (document.head.appendChild(document.createElement('script')).src = "https://lce4113.github.io/public/EvadesHax.js")

(function main() {
    document.onkeydown = e => {
        let c = document.querySelector("#canvas");
        switch (e.key) {
            case "-":
                c.width += 500;
                window.dispatchEvent(new Event('resize'));
                break;
            case "=":
                if (c.width == 1280) return;
                c.width -= 500;
                window.dispatchEvent(new Event('resize'));
                break;
            case "0":
                c.width = 1280;
                window.dispatchEvent(new Event('resize'));
                break;
        }
    };
})();
