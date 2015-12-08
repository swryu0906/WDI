angular.module('CardsAgainstAssembly')
  .directive('card', cardView)
  console.log('in cardView.js')

function cardView() {
  console.log('in cardView')
  var directive= {};

  // 'AA = attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl = '_cardView.html';
  directive.scope = {
    question: '@'
  }

  return directive;
}
