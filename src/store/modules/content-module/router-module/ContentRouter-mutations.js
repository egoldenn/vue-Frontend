/**
 * Created by Alexandru Ionut Budisteanu - SkyHub on 6/25/2017.
 * (C) BIT TECHNOLOGIES
 */

import ContentObjectService from 'store/helpers/ContentObject.service'

export default{

    SET_CURRENT_ROUTER_OBJECT: (state, { routerObject, notFound, url }) => {

        state.routerObject.currentRouterObject = ContentObjectService.createObject(routerObject);

        if (url === '/') state.routerObject.type = "home";
        else state.routerObject.type = ContentObjectService.extractObjectTypeFromId(routerObject);

        state.routerObject.pageURL = url;
        state.routerObject.notFound = notFound;
    },


    SET_CURRENT_ROUTER_PARENT_OBJECT: (state, { routerObject, notFound, url }) => {

        state.routerParentObject.currentRouterObject = ContentObjectService.createObject(routerObject);

        if (url === '/') state.routerParentObject.type = "home";
        else state.routerParentObject.type = ContentObjectService.extractObjectTypeFromId(routerObject);

        state.routerParentObject.notFound = notFound;
    },

}