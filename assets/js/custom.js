$(document).ready(function() {

  var userfeed = new Instafeed({
    get: 'user',
    userId: '14021425868',
    limit: 12,
    resolution: 'standard_resolution',
    sort:  'most_recent',
    accessToken: 'IGQVJYdXgxLUQtbG1zVi1lZAXoyQ1o1VEluamVoR3kzaC1xRUJtM3NkWC1fdWlNZAUozVFlfcmRpczYxcDNJbC1oa1VMenUwdVVOcDV3MjRNbTRnUUpiNUYxNDNHczNrcEY1UEo2bTRGb1owUUdGenBlbwZDZD',
    sortBy: 'most-recent',
    template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid" /></a></div>',
  });
  userFeed.run();


  
});