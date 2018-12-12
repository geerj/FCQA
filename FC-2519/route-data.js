'use strict';

registerRouteData('ec-forms-tracking', [{
        stateName: 'index',
        url: '/',
        $permissions: function $permissions(permissionSvc) {
                return permissionSvc.isPermittedAction('formInstances', 'track');
        }
}]);
