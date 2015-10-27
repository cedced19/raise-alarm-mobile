(function () {
    var saveButton = document.getElementById('save'),
        raiseButton = document.getElementById('raise'),
        urlInput = document.getElementById('url');

    urlInput.value = localStorage.getItem('url', urlInput.value);
    
    saveButton.addEventListener('click', function () {
        if (urlInput.value === '') {
            return phonon.alert('No url!', 'Error', false);
        }
        localStorage.setItem('url', urlInput.value);
    });

    raiseButton.addEventListener('click', function () {
        if (urlInput.value === '') {
            return phonon.alert('No url!', 'Error', false);
        }
        if (navigator.connection.type == Connection.NONE) {
            return phonon.alert('No network!', 'Error', false);
        }
        var socket = io.connect('http://' + urlInput.value);
        socket.emit('send');
        phonon.alert('The alarm is running!', 'Information', false);
    });
})();