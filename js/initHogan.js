var loadData = function (data) {
    var extTemplate = $('#stackable').html();
    $('#stackable').hide();
    var template = Hogan.compile(extTemplate);
    var rendered = template.render(data);
    if ($('#root-container').length === 0) {
      $('body').append('<div id="root-container"></div>');
    }
    $('#root-container').append(rendered);
};
