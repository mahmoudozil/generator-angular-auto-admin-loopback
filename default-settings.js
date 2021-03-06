module.exports = {
    addTestFiles: true,
    addStyleFiles: true,
    testSuffix: '.spec',
    testPassOnDefault: true,
    stylePrefix: '_',
    editorCommand: 'idea',
    uiRouter: true,
    baseState: 'private.',
    moduleName: 'aaal',
    pathOutputStyle: 'dasherize',
    routesFile: 'app/scripts/aaal/aaal-routes.js',
    slcServiceCommandArgs: ['../server/server.js', 'app/scripts/aaal/global-services/lb-services-s.js'],
    pathToModels: './../common/models',
    fileExt: {
        script: '.js',
        tpl: '.html',
        style: '.scss'
    },
    modelListSettings: {
        additionalFields: {
            '*': {
                updatedAt: {
                    type: 'date',
                    readonly: true
                },
                createdAt: {
                    type: 'date',
                    readonly: true
                }
            }
        }
    },
    dirs: {
        app: 'app',
        basePath: 'scripts/aaal',
        routes: 'routes',
        components: 'components',
        filters: 'global-filters'
    },
    subGenerators: {
        overview: {
            stateSuffix: 'List',
            subRoute: 'list',
            suffix: '-list-c',
            nameSuffix: 'ListCtrl',
            createDirectory: true
        },
        edit: {
            stateSuffix: 'Edit',
            subRoute: 'edit',
            suffix: '-edit-c',
            nameSuffix: 'EditCtrl',
            createDirectory: true
        },
        view: {
            stateSuffix: 'View',
            subRoute: 'view',
            suffix: '-view-c',
            nameSuffix: 'ViewCtrl',
            createDirectory: true
        }
    }
};