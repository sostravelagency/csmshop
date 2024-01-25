"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateBody = exports.schemas = void 0;
var _joi = _interopRequireDefault(require("joi"));
var _joiDateExtensions = _interopRequireDefault(require("joi-date-extensions"));
var Joi = _joi["default"].extend(_joiDateExtensions["default"]);
var validateBody = function validateBody(schema) {
  return function (req, res, next) {
    var result = req.method != 'GET' ? Joi.validate(req.body, schema) : Joi.validate(req.query, schema);
    if (result.error) {
      return res.status(400).json(result.error);
    }
    if (!req.value) {
      req.value = {};
    }
    req.value['body'] = result.value;
    next();
  };
};
exports.validateBody = validateBody;
var schemas = {
  registerSchema: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phoneNo: Joi.number().required(),
    address: Joi.string().required(),
    role: Joi.string().required(),
    verify: Joi.string().required()
  }),
  loginSchema: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }),
  userCheckSchema: Joi.object().keys({
    email: Joi.string().email().required()
  }),
  sendResetPassword: Joi.object().keys({
    email: Joi.string().email().required()
  }),
  resetPassword: Joi.object().keys({
    email: Joi.string().email().required(),
    verificationCode: Joi.string().required(),
    password: Joi.string().required()
  }),
  supplierDetails: Joi.object().keys({
    storename: Joi.string().required(),
    status: Joi.number().required(),
    shopaddress: Joi.string().required(),
    shopdesc: Joi.string().required(),
    ownername: Joi.string().required(),
    owneraddress: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    phone: Joi.string().required(),
    areaId: Joi.number().required()
  }),
  category: Joi.object().keys({
    name: Joi.string().required(),
    slug: Joi.string().required()
  }),
  location: Joi.object().keys({
    name: Joi.string().required(),
    status: Joi.number().required()
  }),
  area: Joi.object().keys({
    name: Joi.string().required(),
    locationId: Joi.number().required(),
    status: Joi.number().required()
  })
};
exports.schemas = schemas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfam9pIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfam9pRGF0ZUV4dGVuc2lvbnMiLCJKb2kiLCJCYXNlSm9pIiwiZXh0ZW5kIiwiRGF0ZUV4dGVuc2lvbiIsInZhbGlkYXRlQm9keSIsInNjaGVtYSIsInJlcSIsInJlcyIsIm5leHQiLCJyZXN1bHQiLCJtZXRob2QiLCJ2YWxpZGF0ZSIsImJvZHkiLCJxdWVyeSIsImVycm9yIiwic3RhdHVzIiwianNvbiIsInZhbHVlIiwiZXhwb3J0cyIsInNjaGVtYXMiLCJyZWdpc3RlclNjaGVtYSIsIm9iamVjdCIsImtleXMiLCJmaXJzdE5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInBob25lTm8iLCJudW1iZXIiLCJhZGRyZXNzIiwicm9sZSIsInZlcmlmeSIsImxvZ2luU2NoZW1hIiwidXNlckNoZWNrU2NoZW1hIiwic2VuZFJlc2V0UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwidmVyaWZpY2F0aW9uQ29kZSIsInN1cHBsaWVyRGV0YWlscyIsInN0b3JlbmFtZSIsInNob3BhZGRyZXNzIiwic2hvcGRlc2MiLCJvd25lcm5hbWUiLCJvd25lcmFkZHJlc3MiLCJwaG9uZSIsImFyZWFJZCIsImNhdGVnb3J5IiwibmFtZSIsInNsdWciLCJsb2NhdGlvbiIsImFyZWEiLCJsb2NhdGlvbklkIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvdmFsaWRhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlSm9pIGZyb20gJ2pvaSc7XG5pbXBvcnQgRGF0ZUV4dGVuc2lvbiBmcm9tICdqb2ktZGF0ZS1leHRlbnNpb25zJztcbmNvbnN0IEpvaSA9IEJhc2VKb2kuZXh0ZW5kKERhdGVFeHRlbnNpb24pO1xuXG5leHBvcnQgdmFyIHZhbGlkYXRlQm9keSA9IChzY2hlbWEpID0+IHtcbiAgICByZXR1cm4gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcS5tZXRob2QgIT0gJ0dFVCcgPyBKb2kudmFsaWRhdGUocmVxLmJvZHksIHNjaGVtYSkgOiBKb2kudmFsaWRhdGUocmVxLnF1ZXJ5LCBzY2hlbWEpO1xuICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24ocmVzdWx0LmVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVxLnZhbHVlKSB7IHJlcS52YWx1ZSA9IHt9OyB9XG4gICAgICAgIHJlcS52YWx1ZVsnYm9keSddID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBuZXh0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIHNjaGVtYXMgPSB7XG4gICAgcmVnaXN0ZXJTY2hlbWE6IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgZmlyc3ROYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgbGFzdE5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcbiAgICAgICAgcGFzc3dvcmQ6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICBwaG9uZU5vOiBKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcbiAgICAgICAgYWRkcmVzczogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgIHJvbGU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICB2ZXJpZnk6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpXG4gICAgfSksXG4gICAgbG9naW5TY2hlbWE6IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXG4gICAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICB9KSxcbiAgICB1c2VyQ2hlY2tTY2hlbWE6IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXG4gICAgfSksXG4gICAgc2VuZFJlc2V0UGFzc3dvcmQ6IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXG4gICAgfSksXG4gICAgcmVzZXRQYXNzd29yZDogSm9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICBlbWFpbDogSm9pLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoKSxcbiAgICAgICAgdmVyaWZpY2F0aW9uQ29kZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKVxuICAgIH0pLFxuICAgIHN1cHBsaWVyRGV0YWlsczogSm9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICBzdG9yZW5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICBzdGF0dXM6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxuICAgICAgICBzaG9wYWRkcmVzczogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgIHNob3BkZXNjOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgb3duZXJuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgb3duZXJhZGRyZXNzOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXG4gICAgICAgIHBhc3N3b3JkOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgcGhvbmU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICBhcmVhSWQ6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpXG4gICAgfSksXG4gICAgY2F0ZWdvcnk6IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgIHNsdWc6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgIH0pLFxuICAgIGxvY2F0aW9uOiBKb2kub2JqZWN0KCkua2V5cyh7XG4gICAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICBzdGF0dXM6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxuICAgIH0pLFxuICAgIGFyZWE6IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgIGxvY2F0aW9uSWQ6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxuICAgICAgICBzdGF0dXM6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxuICAgIH0pLFxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLElBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGtCQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFNRSxHQUFHLEdBQUdDLGVBQU8sQ0FBQ0MsTUFBTSxDQUFDQyw2QkFBYSxDQUFDO0FBRWxDLElBQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxNQUFNLEVBQUs7RUFDbEMsT0FBTyxVQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFLO0lBQ3ZCLElBQU1DLE1BQU0sR0FBR0gsR0FBRyxDQUFDSSxNQUFNLElBQUksS0FBSyxHQUFHVixHQUFHLENBQUNXLFFBQVEsQ0FBQ0wsR0FBRyxDQUFDTSxJQUFJLEVBQUVQLE1BQU0sQ0FBQyxHQUFHTCxHQUFHLENBQUNXLFFBQVEsQ0FBQ0wsR0FBRyxDQUFDTyxLQUFLLEVBQUVSLE1BQU0sQ0FBQztJQUNyRyxJQUFJSSxNQUFNLENBQUNLLEtBQUssRUFBRTtNQUNkLE9BQU9QLEdBQUcsQ0FBQ1EsTUFBTSxD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