'use strict';

registerRouteData('ec-printviewbuilder', [{
    stateName: 'index',
    url: '/:formTemplateId',
    $permissions: function $permissions(permissionSvc) {
        return !!permissionSvc.permittedActions.activeUser.idmAdministrator || !!permissionSvc.permittedActions.formTemplates.buildOverlay;
    }
}]);
