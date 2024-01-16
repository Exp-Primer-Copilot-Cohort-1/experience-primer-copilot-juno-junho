function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/member/member.html',
    controller: 'MemberController',
    controllerAs: 'member'
  };
}

angular.module('skillsApp').directive('skillsMember', skillsMember);

})();