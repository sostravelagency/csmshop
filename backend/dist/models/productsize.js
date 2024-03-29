'use strict';

module.exports = function (sequelize, DataTypes) {
  var productsize = sequelize.define('productsize', {
    productId: DataTypes.INTEGER,
    size: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {});
  productsize.associate = function (models) {
    // associations can be defined here
    models.productsize.belongsTo(models.product, {
      foreignKey: 'productId'
    });
  };
  return productsize;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiRGF0YVR5cGVzIiwicHJvZHVjdHNpemUiLCJkZWZpbmUiLCJwcm9kdWN0SWQiLCJJTlRFR0VSIiwic2l6ZSIsIlNUUklORyIsImFtb3VudCIsImFzc29jaWF0ZSIsIm1vZGVscyIsImJlbG9uZ3NUbyIsInByb2R1Y3QiLCJmb3JlaWduS2V5Il0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9wcm9kdWN0c2l6ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIERhdGFUeXBlcykgPT4ge1xuICBjb25zdCBwcm9kdWN0c2l6ZSA9IHNlcXVlbGl6ZS5kZWZpbmUoJ3Byb2R1Y3RzaXplJywge1xuICAgIHByb2R1Y3RJZDogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgc2l6ZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBhbW91bnQ6IERhdGFUeXBlcy5JTlRFR0VSXG4gIH0sIHt9KTtcbiAgcHJvZHVjdHNpemUuYXNzb2NpYXRlID0gZnVuY3Rpb24obW9kZWxzKSB7XG4gICAgLy8gYXNzb2NpYXRpb25zIGNhbiBiZSBkZWZpbmVkIGhlcmVcbiAgICBtb2RlbHMucHJvZHVjdHNpemUuYmVsb25nc1RvKG1vZGVscy5wcm9kdWN0LCB7IGZvcmVpZ25LZXk6ICdwcm9kdWN0SWQnIH0pO1xuXG4gIH07XG4gIHJldHVybiBwcm9kdWN0c2l6ZTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUNaQSxNQUFNLENBQUNDLE9BQU8sR0FBRyxVQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBSztFQUN6QyxJQUFNQyxXQUFXLEdBQUdGLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLGFBQWEsRUFBRTtJQUNsREMsU0FBUyxFQUFFSCxTQUFTLENBQUNJLE9BQU87SUFDNUJDLElBQUksRUFBRUwsU0FBUyxDQUFDTSxNQUFNO0lBQ3RCQyxNQUFNLEVBQUVQLFNBQVMsQ0FBQ0k7RUFDcEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ05ILFdBQVcsQ0FBQ08sU0FBUyxHQUFHLFVBQVNDLE1BQU0sRUFBRTtJQUN2QztJQUNBQSxNQUFNLENBQUNSLFdBQVcsQ0FBQ1MsU0FBUyxDQUFDRCxNQUFNLENBQUNFLE9BQU8sRUFBRTtNQUFFQyxVQUFVLEVBQUU7SUFBWSxDQUFDLENBQUM7RUFFM0UsQ0FBQztFQUNELE9BQU9YLFdBQVc7QUFDcEIsQ0FBQyJ9