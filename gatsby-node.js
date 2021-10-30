const path = require('path')

exports.createPages = ({graphql, actions }) => {
    const {createPage} = actions
    const contadorTemplate = path.resolve('scr/templates/contador.js');

    createPage({
        path: '/contador-1',
        component: contadorTemplate,
        context: {
            page: 1
        }
    })
}