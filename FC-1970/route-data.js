'use strict';

registerRouteData('ec-forms', [{
    stateName: 'formInstance',
    url: '/form-instance/{formInstanceId:[0-9A-Za-z-]+}?from&returnUrl'
}, {
    stateName: 'inboxFormInstance',
    url: '/inbox/{formInstanceId:[0-9A-Za-z-]+}?from&returnUrl'
}, {
    stateName: 'inbox',
    url: '/inbox?activeTab',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('activeUser', 'userKey');
    }
}, {
    stateName: 'index',
    url: '/',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('formTemplates', 'create') || permissionSvc.isPermittedAction('formTemplates', 'edit') || permissionSvc.isPermittedAction('formTemplates', 'send') || permissionSvc.isPermittedAction('formTemplates', 'archive') || permissionSvc.isPermittedAction('packets', 'create') || permissionSvc.isPermittedAction('packets', 'edit') || permissionSvc.isPermittedAction('packets', 'send') || permissionSvc.isPermittedAction('packets', 'archive');
    }
}, {
    stateName: 'send',
    url: '/send/{type:[A-Za-z]+}/{id:[0-9A-Za-z-]+}',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('formTemplates', 'send') || permissionSvc.isPermittedAction('packets', 'send');
    }
}]);
