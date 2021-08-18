const volumeIndicatorShowTime = 4000

function volumeChange() {
    var volumeIndicator = document.getElementById('volumeIndicator');
    volumeIndicator.style.transform = 'translate(0%,0%)';
    setTimeout(function () {
        volumeIndicator.style.transform = 'translate(0%,100%)';
    }, volumeIndicatorShowTime);
}