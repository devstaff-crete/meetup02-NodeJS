'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbCollection = [{ id: '0', title: 'my first task', cdate: '2015-09-08T18:39:37+03:00', desc: 'I have to finish this first task' }, { id: '1', title: 'another task', cdate: '2015-09-09T20:41:37+03:00', desc: 'I can skip this one' }, { id: '2', title: 'get beers', cdate: '2015-09-10T08:39:37+03:00', desc: 'Do not forget the beers' }];

function get(id) {
    return _lodash2.default.find(dbCollection, { id: id });
}

function getAll() {
    return dbCollection;
}

function insert(title, desc) {
    var id = parseInt(_lodash2.default.last(dbCollection).id) + 1;
    id = id.toString();
    var task = {
        id: id,
        title: title,
        desc: desc,
        cdate: (0, _moment2.default)().format()
    };
    dbCollection.push(task);

    return task;
}

function update(id, title, desc) {
    var task = _lodash2.default.find(dbCollection, { id: id });
    task.title = title;
    task.desc = desc;

    return task;
}

function remove(id) {
    return _lodash2.default.pullAt(dbCollection, _lodash2.default.findIndex(dbCollection, { id: id }));
}

// export the module
exports.default = {
    get: get,
    getAll: getAll,
    insert: insert,
    update: update,
    remove: remove
};