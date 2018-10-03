'use strict';

registerRouteData('ec-formbuilder', [{
    stateName: 'form.formBuilder',
    url: '/builder?deactivate',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('formTemplates', 'create') || permissionSvc.isPermittedAction('formTemplates', 'edit');
    }
}, {
    stateName: 'form',
    url: '/form/{formId:[0-9A-Za-z-]+}',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('formTemplates', 'create') || permissionSvc.isPermittedAction('formTemplates', 'edit') || permissionSvc.isPermittedAction('formInstances', 'send');
    }
}, {
    stateName: 'form.formPreview',
    url: '/preview?returnUrl',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('formTemplates', 'view') || permissionSvc.isPermittedAction('formTemplates', 'edit' || permissionSvc.isPermittedAction('formTemplates', 'create'));
    }
}, {
    stateName: 'form.formSettings',
    url: '/settings',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('formTemplates', 'create') || permissionSvc.isPermittedAction('formTemplates', 'edit');
    }
}, {
    stateName: 'packet.packetBuilder',
    url: '/builder',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('packets', 'create') || permissionSvc.isPermittedAction('packets', 'edit');
    }
}, {
    stateName: 'packet',
    url: '/packet/{packetId:[0-9A-Za-z-]+}',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('packets', 'create') || permissionSvc.isPermittedAction('packets', 'edit') || permissionSvc.isPermittedAction('packetInstances', 'send');
    }
}, {
    stateName: 'packet.packetSettings',
    url: '/settings',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('packets', 'create') || permissionSvc.isPermittedAction('packets', 'edit');
    }
}]);
