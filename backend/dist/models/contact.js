'use strict';

module.exports = function (sequelize, DataTypes) {
  var contact = sequelize.define('contact', {
    name: DataTypes.STRING,
    date_send: DataTypes.STRING,
    phone: DataTypes.STRING,
    content: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.STRING,
    reply_text: DataTypes.STRING,
    user_reply: DataTypes.INTEGER,
    type: DataTypes.STRING,
    product: DataTypes.STRING
  }, {});
  return contact;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiRGF0YVR5cGVzIiwiY29udGFjdCIsImRlZmluZSIsIm5hbWUiLCJTVFJJTkciLCJkYXRlX3NlbmQiLCJwaG9uZSIsImNvbnRlbnQiLCJlbWFpbCIsInN0YXR1cyIsInJlcGx5X3RleHQiLCJ1c2VyX3JlcGx5IiwiSU5URUdFUiIsInR5cGUiLCJwcm9kdWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3QgPSBzZXF1ZWxpemUuZGVmaW5lKCdjb250YWN0Jywge1xuICAgIG5hbWU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgZGF0ZV9zZW5kOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHBob25lOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGNvbnRlbnQ6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgZW1haWw6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgc3RhdHVzOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHJlcGx5X3RleHQ6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgdXNlcl9yZXBseTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBwcm9kdWN0OiBEYXRhVHlwZXMuU1RSSU5HXG4gIH0sIHt9KTtcbiAgcmV0dXJuIGNvbnRhY3Q7XG59OyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFDWkEsTUFBTSxDQUFDQyxPQUFPLEdBQUcsVUFBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUs7RUFDekMsSUFBTUMsT0FBTyxHQUFHRixTQUFTLENBQUNHLE1BQU0sQ0FBQyxTQUFTLEVBQUU7SUFDMUNDLElBQUksRUFBRUgsU0FBUyxDQUFDSSxNQUFNO0lBQ3RCQyxTQUFTLEVBQUVMLFNBQVMsQ0FBQ0ksTUFBTTtJQUMzQkUsS0FBSyxFQUFFTixTQUFTLENBQUNJLE1BQU07SUFDdkJHLE9BQU8sRUFBRVAsU0FBUyxDQUFDSSxNQUFNO0lBQ3pCSSxLQUFLLEVBQUVSLFNBQVMsQ0FBQ0ksTUFBTTtJQUN2QkssTUFBTSxFQUFFVCxTQUFTLENBQUNJLE1BQU07SUFDeEJNLFVBQVUsRUFBRVYsU0FBUyxDQUFDSSxNQUFNO0lBQzVCTyxVQUFVLEVBQUVYLFNBQVMsQ0FBQ1ksT0FBTztJQUM3QkMsSUFBSSxFQUFFYixTQUFTLENBQUNJLE1BQU07SUFDdEJVLE9BQU8sRUFBRWQsU0FBUyxDQUFDSTtFQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDTixPQUFPSCxPQUFPO0FBQ2hCLENBQUMifQ==