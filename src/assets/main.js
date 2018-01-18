$(function() {
  $.ajax({
     url: 'https://www.codeschool.com/users/GiantCoder.json',
     dataType: 'jsonp',
     success: function(response) {
       displayCourses(response.courses.completed);
     }
   });

const displayCourses = function (data) {

  const badges = $('#badges');

  data.forEach(function (course) {
    let $course = $('<div />', {
      'class': 'course',
    }).appendTo(badges);

    $('<h3>', {
      text: course.title
    }).appendTo($course);

    $('<img>', {
      src: course.badge
    }).appendTo($course);

    $('<a />', {
      class: 'btn btn-primary',
      target: '_blank',
      href: course.url,
      text: 'See Course'
    }).appendTo($course);

    // let badge = '<div class="course">';
    // badge += '<h3>' + course.title + '</h3>';
    // badge += '<img src="' + course.badge + '"/>';
    // badge += '<a class="btn btn-primary" href="' + course.url + '" target="_blank">See Course</a>'
    // badge += '</div>';
  });
}

});
