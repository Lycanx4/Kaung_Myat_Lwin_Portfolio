document.addEventListener('DOMContentLoaded', function () {
    const correctPassword = 'nothingIsImpossibleToTheWillingMind';

    $('#download-button').on('click', function (event) {
        event.preventDefault();
        $('#passwordModal').modal('show');
    });

    $('#submit-password').on('click', function () {
        const enteredPassword = $('#password').val();

        if (enteredPassword === correctPassword) {
            $('#passwordModal').modal('hide');
            window.location.href = 'https://drive.google.com/file/d/14v58sY_LHVT44J0HBFSiQRNtlG21OAFl/view?usp=drive_link';
        } else {
            alert('Incorrect password. Please try again.');
        }
    });
});