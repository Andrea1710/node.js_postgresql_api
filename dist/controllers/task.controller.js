"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTaskByProject = exports.getOneTask = exports.deleteTask = exports.updateTask = exports.getTasks = exports.createTask = void 0;

var _task = _interopRequireDefault(require("../models/task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createTask =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, done, projectId, newTask;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectId = _req$body.projectId;
            _context.prev = 1;
            _context.next = 4;
            return _task["default"].create({
              name: name,
              done: done,
              projectId: projectId
            }, {
              fields: ["name", "done", "projectId"]
            });

          case 4:
            newTask = _context.sent;
            res.json({
              message: "New Task created"
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function createTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createTask = createTask;

var getTasks =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _task["default"].findAll({
              attributes: ["id", "name", "done", "projectid"],
              order: [["id", "ASC"]]
            });

          case 3:
            tasks = _context2.sent;
            res.json({
              tasks: tasks
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getTasks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTasks = getTasks;

var updateTask =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body2, name, done, projectId, updatedTask;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done, projectId = _req$body2.projectId;
            _context3.prev = 2;
            _context3.next = 5;
            return _task["default"].findOne({
              attributes: ["id", "name", "done", "projectId"],
              where: {
                id: id
              }
            });

          case 5:
            updatedTask = _task["default"].update({
              name: name,
              done: done,
              projectId: projectId
            }, {
              where: {
                id: id
              }
            });
            res.json({
              message: "Task Updated",
              updatedTask: updatedTask
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 9]]);
  }));

  return function updateTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateTask = updateTask;

var deleteTask =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _task["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            res.json({
              message: "Task Deleted successfully"
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 7]]);
  }));

  return function deleteTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var getOneTask =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _task["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            task = _context5.sent;
            res.json(task);
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));

  return function getOneTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getOneTask = getOneTask;

var getTaskByProject =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var id, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.prev = 1;
            _context6.next = 4;
            return _task["default"].findAll({
              attributes: ["id", "name", "done", "projectid"],
              where: {
                id: id
              }
            });

          case 4:
            tasks = _context6.sent;
            res.json(tasks);
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));

  return function getTaskByProject(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getTaskByProject = getTaskByProject;