import _ from 'lodash';
import moment from 'moment';

const dbCollection = [
  { id: '0', title: 'my first task', cdate: '2015-09-08T18:39:37+03:00', desc: 'I have to finish this first task' },
  { id: '1', title: 'another task', cdate: '2015-09-09T20:41:37+03:00', desc: 'I can skip this one' },
  { id: '2', title: 'get beers', cdate: '2015-09-10T08:39:37+03:00', desc: 'Do not forget the beers' }
];

function get(id) {
    return _.find(dbCollection, { id: id });
}

function getAll() {
    return dbCollection;
}

function insert(title, desc) {
  let id = parseInt(_.last(dbCollection).id) + 1;
  id = id.toString();
  const task = {
    id: id,
    title: title,
    desc: desc,
    cdate: moment().format()
  };
  dbCollection.push(task);

  return task;
}

function update(id, title, desc) {
    const task = _.find(dbCollection, { id: id });
    task.title = title;
    task.desc = desc;

    return task;
}

function remove(id) {
    return _.pullAt(dbCollection, _.findIndex(dbCollection, { id: id }));
}

// export the module
export default {
    get,
    getAll,
    insert,
    update,
    remove 
};

