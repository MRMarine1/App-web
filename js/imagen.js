// JavaScript source code


(function () {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    var closeButton = document.querySelector('.close');
    // Recupero todas las imágenes por su clase
    var images = Array.prototype.slice.call(document.querySelectorAll('.img-thumbnail'));

    images.forEach(function (image) {
        image.onclick = function (e) {
            modal.style.display = 'block';
            modalImg.src = e.target.src;
            captionText.innerHTML = e.target.alt;
        }
    });

    closeButton.onclick = function () {
        modal.style.display = 'none';
    }
})();