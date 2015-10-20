


window.onload = function() {
  console.log("Hi");


  // As a user, I want cards in the done column to disappear
  // when I click 'X', so I can keep my done column compact.
  $('.card-list').on('click', '.delete', function() {
    $(this).closest('.card').remove();
  });

  // As a user, I want cards in the to do column to move to the done column
  // when I click 'Finish', so I can keep track of my progress
  $('#todo-column').on('click', '.finish', function() {
    var newDoneCard = $(this).closest('.card.todo');
    newDoneCard.find('.finish').remove();
    newDoneCard.addClass('done').removeClass('todo');
    $('#done-column').find('.card-list').append(newDoneCard);
  });

  // As a user, I want to a new card to be added to the todo column
  // when I enter text and click the 'Add Card' button,
  // so I can add new things to my list
  $('#new-card-button').on('click', function() {
    var newCard = $('<li class=\"card todo\">' +
                        $('#new-card-text').val() +
                        '<span class="delete">X</span>' +
                        '<span class="finish">Finish</span>' +
                      '</li>');
    $('#todo-column').find('.card-list').append(newCard);
  });
};
