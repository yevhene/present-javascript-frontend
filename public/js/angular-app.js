angular.module('currency-converter', [])

.directive('converter', function(converters) {
  return {
    require: 'ngModel',
    link: function($scope, $element, attr, ngModel) {
      var converter = converters[attr.converter];
      ngModel.$formatters.unshift(converter.formatter);
      ngModel.$parsers.push(converter.parser);
      $scope.dollars = 0;
    }
  }
})

.value('converters', {
  d2h: {
    formatter: d2h,
    parser: h2d
  }
});
