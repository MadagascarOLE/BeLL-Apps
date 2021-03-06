var couchapp = require('couchapp'),
    path = require('path');

ddoc = {
    _id: '_design/bell'
}

ddoc.views = {
    /*getCommunityByCode: {
        map: function(doc) {
            if (doc && (doc.Code || doc.code))
                emit(doc._id, doc);
        }
    }*/
    getCommunityByCode: {
        map: function(doc) {
            if (doc && doc.Code)
                emit(doc.Code, doc);
        }
    },
    getCommunityByNoPending: {
        map: function(doc) {
            if (doc && doc.registrationRequest != 'Pending')
                emit(doc.registrationRequest, doc);
        }
    },
    getCommunityByRegion: {
        map: function(doc) {
            if (doc && doc.region)
                emit(doc.region, doc);
        }
    },
    getCommunityByUniqueRegion: {
        map: function(doc) {
            if (doc && doc.region)
                emit(doc.region, doc);
        },
        reduce: function(keys, values, rereduce) {
            return values[0].region;
        }
    }
}

module.exports = ddoc;
