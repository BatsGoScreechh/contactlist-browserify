(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const buildContactObject = (first, last, phone, address) => {
  return {
    first: first,
    last: last,
    phone: phone,
    address: address
  };
};

var _default = buildContactObject;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const contact = contactObject => {
  return `<div>
    <h3>${contactObject.first} ${contactObject.last}</h3>
    <p>${contactObject.phone}</p>
    <p>${contactObject.address}</p>
    </div>`;
};

var _default = contact;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const contactCollection = {
  contactCollection: () => {
    return fetch("http://localhost:8088/contacts").then(contacts => contacts.json());
  },
  createContact: taskObject => {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskObject)
    });
  }
};
var _default = contactCollection;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactCollection = _interopRequireDefault(require("./contactCollection.js"));

var _buildContact = _interopRequireDefault(require("./buildContact.js"));

var _contactList = _interopRequireDefault(require("./contactList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_contactCollection.default.contactCollection();

const contactForm = () => {
  document.querySelector("#save-btn").addEventListener("click", event => {
    const contactToAdd = (0, _buildContact.default)(document.querySelector("#first-name-input").value, document.querySelector("#last-name-input").value, document.querySelector("#phone-input").value, document.querySelector("#address-input").value);

    _contactCollection.default.createContact(contactToAdd).then(() => {
      _contactCollection.default.contactCollection();
    });

    (0, _contactList.default)();
  });
};

var _default = contactForm;
exports.default = _default;

},{"./buildContact.js":1,"./contactCollection.js":3,"./contactList.js":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contact = _interopRequireDefault(require("./contact.js"));

var _contactCollection = _interopRequireDefault(require("./contactCollection.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printAllContacts = () => {
  document.querySelector("#contact-list").innerHTML = "";

  _contactCollection.default.contactCollection().then(parsedContacts => {
    parsedContacts.forEach(contactObject => {
      document.querySelector("#contact-list").innerHTML += (0, _contact.default)(contactObject);
    });
  });
};

var _default = printAllContacts;
exports.default = _default;

},{"./contact.js":2,"./contactCollection.js":3}],6:[function(require,module,exports){
"use strict";

var _contactList = _interopRequireDefault(require("./contactList.js"));

var _contactForm = _interopRequireDefault(require("./contactForm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _contactForm.default)();
(0, _contactList.default)();

},{"./contactForm.js":4,"./contactList.js":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2J1aWxkQ29udGFjdC5qcyIsIi4uL3NjcmlwdHMvY29udGFjdC5qcyIsIi4uL3NjcmlwdHMvY29udGFjdENvbGxlY3Rpb24uanMiLCIuLi9zY3JpcHRzL2NvbnRhY3RGb3JtLmpzIiwiLi4vc2NyaXB0cy9jb250YWN0TGlzdC5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQSxNQUFNLGtCQUFrQixHQUFHLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxLQUFkLEVBQXFCLE9BQXJCLEtBQWlDO0FBQ3hELFNBQU87QUFDTCxJQUFBLEtBQUssRUFBRSxLQURGO0FBRUwsSUFBQSxJQUFJLEVBQUUsSUFGRDtBQUdMLElBQUEsS0FBSyxFQUFFLEtBSEY7QUFJTCxJQUFBLE9BQU8sRUFBRTtBQUpKLEdBQVA7QUFNRCxDQVBIOztlQVNpQixrQjs7Ozs7Ozs7Ozs7QUNUakIsTUFBTSxPQUFPLEdBQUksYUFBRCxJQUFtQjtBQUMvQixTQUFRO1VBQ0YsYUFBYSxDQUFDLEtBQU0sSUFBRyxhQUFhLENBQUMsSUFBSztTQUMzQyxhQUFhLENBQUMsS0FBTTtTQUNwQixhQUFhLENBQUMsT0FBUTtXQUgzQjtBQUtILENBTkQ7O2VBUWUsTzs7Ozs7Ozs7OztBQ1JmLE1BQU0saUJBQWlCLEdBQUc7QUFDdEIsRUFBQSxpQkFBaUIsRUFBRSxNQUFNO0FBQ3JCLFdBQU8sS0FBSyxDQUFDLGdDQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVILEdBSnFCO0FBTXRCLEVBQUEsYUFBYSxFQUFHLFVBQUQsSUFBZ0I7QUFDM0IsV0FBTyxLQUFLLENBQUMsZ0NBQUQsRUFBbUM7QUFDN0MsTUFBQSxNQUFNLEVBQUUsTUFEcUM7QUFFN0MsTUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZvQztBQUs3QyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLFVBQWY7QUFMdUMsS0FBbkMsQ0FBWjtBQU9EO0FBZG1CLENBQTFCO2VBa0JlLGlCOzs7Ozs7Ozs7OztBQ2xCZjs7QUFDQTs7QUFDQTs7OztBQUNBLDJCQUFrQixpQkFBbEI7O0FBR0EsTUFBTSxXQUFXLEdBQUcsTUFBTTtBQUMxQixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLEVBQW9DLGdCQUFwQyxDQUFxRCxPQUFyRCxFQUE4RCxLQUFLLElBQUk7QUFDbkUsVUFBTSxZQUFZLEdBQUcsMkJBQ2pCLFFBQVEsQ0FBQyxhQUFULENBQXVCLG1CQUF2QixFQUE0QyxLQUQzQixFQUVqQixRQUFRLENBQUMsYUFBVCxDQUF1QixrQkFBdkIsRUFBMkMsS0FGMUIsRUFHakIsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUMsS0FIdEIsRUFJakIsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBSnhCLENBQXJCOztBQU9BLCtCQUFrQixhQUFsQixDQUFnQyxZQUFoQyxFQUE4QyxJQUE5QyxDQUFtRCxNQUFNO0FBQ3JELGlDQUFrQixpQkFBbEI7QUFFSCxLQUhEOztBQUlBO0FBRUgsR0FkRDtBQWVDLENBaEJEOztlQWtCZSxXOzs7Ozs7Ozs7OztBQ3hCZjs7QUFDQTs7OztBQUVBLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTTtBQUMzQixFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDLFNBQXhDLEdBQW9ELEVBQXBEOztBQUNBLDZCQUFrQixpQkFBbEIsR0FDQyxJQURELENBQ08sY0FBRCxJQUFvQjtBQUN0QixJQUFBLGNBQWMsQ0FBQyxPQUFmLENBQXVCLGFBQWEsSUFBSTtBQUNwQyxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLEVBQXdDLFNBQXhDLElBQXFELHNCQUFRLGFBQVIsQ0FBckQ7QUFFSCxLQUhEO0FBSUgsR0FORDtBQU9ILENBVEQ7O2VBV2UsZ0I7Ozs7OztBQ2RmOztBQUNBOzs7O0FBRUE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGJ1aWxkQ29udGFjdE9iamVjdCA9IChmaXJzdCwgbGFzdCwgcGhvbmUsIGFkZHJlc3MpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZpcnN0OiBmaXJzdCxcclxuICAgICAgbGFzdDogbGFzdCxcclxuICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgYnVpbGRDb250YWN0T2JqZWN0OyIsImNvbnN0IGNvbnRhY3QgPSAoY29udGFjdE9iamVjdCkgPT4ge1xyXG4gICAgcmV0dXJuIGA8ZGl2PlxyXG4gICAgPGgzPiR7Y29udGFjdE9iamVjdC5maXJzdH0gJHtjb250YWN0T2JqZWN0Lmxhc3R9PC9oMz5cclxuICAgIDxwPiR7Y29udGFjdE9iamVjdC5waG9uZX08L3A+XHJcbiAgICA8cD4ke2NvbnRhY3RPYmplY3QuYWRkcmVzc308L3A+XHJcbiAgICA8L2Rpdj5gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3QiLCJjb25zdCBjb250YWN0Q29sbGVjdGlvbiA9IHtcclxuICAgIGNvbnRhY3RDb2xsZWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RzXCIpXHJcbiAgICAgICAgLnRoZW4oY29udGFjdHMgPT4gY29udGFjdHMuanNvbigpKVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVDb250YWN0OiAodGFza09iamVjdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9jb250YWN0c1wiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2tPYmplY3QpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDb2xsZWN0aW9uIiwiaW1wb3J0IGNvbnRhY3RDb2xsZWN0aW9uIGZyb20gXCIuL2NvbnRhY3RDb2xsZWN0aW9uLmpzXCJcclxuaW1wb3J0IGJ1aWxkQ29udGFjdE9iamVjdCBmcm9tIFwiLi9idWlsZENvbnRhY3QuanNcIlxyXG5pbXBvcnQgcHJpbnRBbGxDb250YWN0cyBmcm9tIFwiLi9jb250YWN0TGlzdC5qc1wiO1xyXG5jb250YWN0Q29sbGVjdGlvbi5jb250YWN0Q29sbGVjdGlvbigpO1xyXG5cclxuXHJcbmNvbnN0IGNvbnRhY3RGb3JtID0gKCkgPT4ge1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICBjb25zdCBjb250YWN0VG9BZGQgPSBidWlsZENvbnRhY3RPYmplY3QoXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaXJzdC1uYW1lLWlucHV0XCIpLnZhbHVlLFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGFzdC1uYW1lLWlucHV0XCIpLnZhbHVlLFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmUtaW5wdXRcIikudmFsdWUsXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRyZXNzLWlucHV0XCIpLnZhbHVlLFxyXG5cclxuICAgICk7XHJcbiAgICBjb250YWN0Q29sbGVjdGlvbi5jcmVhdGVDb250YWN0KGNvbnRhY3RUb0FkZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29udGFjdENvbGxlY3Rpb24uY29udGFjdENvbGxlY3Rpb24oKTtcclxuXHJcbiAgICB9KVxyXG4gICAgcHJpbnRBbGxDb250YWN0cygpO1xyXG5cclxufSlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RGb3JtIiwiaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiXHJcbmltcG9ydCBjb250YWN0Q29sbGVjdGlvbiBmcm9tIFwiLi9jb250YWN0Q29sbGVjdGlvbi5qc1wiXHJcblxyXG5jb25zdCBwcmludEFsbENvbnRhY3RzID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWxpc3RcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnRhY3RDb2xsZWN0aW9uLmNvbnRhY3RDb2xsZWN0aW9uKClcclxuICAgIC50aGVuKChwYXJzZWRDb250YWN0cykgPT4ge1xyXG4gICAgICAgIHBhcnNlZENvbnRhY3RzLmZvckVhY2goY29udGFjdE9iamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1saXN0XCIpLmlubmVySFRNTCArPSBjb250YWN0KGNvbnRhY3RPYmplY3QpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmludEFsbENvbnRhY3RzOyIsImltcG9ydCBwcmludEFsbENvbnRhY3RzIGZyb20gXCIuL2NvbnRhY3RMaXN0LmpzXCJcclxuaW1wb3J0IGNvbnRhY3RGb3JtIGZyb20gXCIuL2NvbnRhY3RGb3JtLmpzXCJcclxuXHJcbmNvbnRhY3RGb3JtKCk7XHJcbnByaW50QWxsQ29udGFjdHMoKTsiXX0=
