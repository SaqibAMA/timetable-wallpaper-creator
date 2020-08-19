function resetFields() {
    $('#wallpaper').html('');
}

function addDay() {

    var dayValue = $('#contentField').val();
    var day = `<p class="day">${dayValue}</p>`;


    $('#wallpaper').append(day);

}

function addCourse() {

    var courseValue = $('#contentField').val();
    var course = `<p class="course">${courseValue}</p>`;


    $('#wallpaper').append(course);

}