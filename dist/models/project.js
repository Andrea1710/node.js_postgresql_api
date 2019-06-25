"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = _interopRequireDefault(require("../database/database"));

var _task = _interopRequireDefault(require("./task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Project = _database["default"].define("project", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  priority: {
    type: _sequelize["default"].INTEGER
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  deliverydate: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

Project.hasMany(_task["default"], {
  foreignKey: "projectid",
  sourceKey: "id"
});

_task["default"].belongsTo(Project, {
  foreignKey: "projectid",
  sourceKey: "id"
});

var _default = Project;
exports["default"] = _default;