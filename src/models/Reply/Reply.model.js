/* eslint-disable import/prefer-default-export */

import Attachments from 'models/Attachment/Attachments.model';

export default class Reply {

    constructor( data) {

        if (typeof data === "undefined") data = {};

        this.id = data.id||'';

        this.title = data.title || '';
        this.topicId = data.topicId || '';

        this.parentReplyId = data.parentReplyId || '';
        this.parentId = data.parentId || '';

        this.authorId = data.authorId || '';

        this.description = data.description || '';
        this.shortDescription = data.shortDescription || '';

        this.preview = data.preview||false;

        this.isOwner = data.isOwner || false;

        this.attachments = data.attachments || [];
        this.URL = data.URL || '';

        this.dtCreation = ((typeof data.dtCreation === "string")&&(data.dtCreation !== '')) ? Date.parse(data.dtCreation) : new Date(data.dtCreation||new Date());
        this.dtLastActivity = ((typeof data.dtLastActivity === "string")&&(data.dtLastActivity !== '')) ? Date.parse(data.dtLastActivity) : new Date(data.dtLastActivity||new Date());

        console.log('Reply assigned ', data, data.title, data.parentReplyId);
    }


    static getTitle(Reply){
        if (Reply.title !== '') return Reply.title;
        if (Attachments.getLinkAttachment(Reply) !== null) return Attachments.getLinkAttachment(Reply).title;
        if (Reply.attachments.length > 0 ) return Reply.attachments[0].title;

        return '';
    }

    static getDescription(Reply){
        if (Reply.shortDescription !== '') return Reply.shortDescription;
        if (Attachments.getLinkAttachment(Reply) !== null) return Attachments.getLinkAttachment(Reply).description;
        if (Reply.attachments.length > 0 ) return Reply.attachments[0].description;

        return '';
    }

    static getImage(Reply){
        if ((typeof Reply.image !== "undefined")&&(Reply.image !== '')) return Reply.image;

        if (Reply.attachments.length > 0 ) //I have an uploaded image
            for (let i=0; i<Reply.attachments.length; i++)
                if ((Reply.attachments[i].type === "file")&&(Reply.attachments[i].typeFile.indexOf("image") >= 0 ))
                    return Reply.attachments[0].img;

        if (Attachments.getLinkAttachment(Reply) !== null) return Attachments.getLinkAttachment(Reply).img;

        return '';
    }

    static getKeywords(Reply){
        if ((typeof Reply.keywords !== "undefined")&&(Reply.keywords !== '')) return Reply.keywords;
        if (Attachments.getLinkAttachment(Reply) !== null) return Attachments.getLinkAttachment(Reply).keywords;
        if (Reply.attachments.length > 0 ) return Reply.attachments[0].keywords;

        return '';
    }




}