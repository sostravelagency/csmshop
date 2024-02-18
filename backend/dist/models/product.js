'use strict';

module.exports = function (sequelize, DataTypes) {
  var product = sequelize.define('product', {
    categoryId: DataTypes.INTEGER,
    subCategoryId: DataTypes.INTEGER,
    childCategoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    brand: DataTypes.STRING,
    unitSize: DataTypes.STRING,
    status: DataTypes.STRING,
    buyerPrice: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    discountPer: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    netPrice: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    sortDesc: DataTypes.TEXT,
    desc: DataTypes.TEXT,
    phoneNumber: DataTypes.TEXT,
    square: DataTypes.FLOAT,
    province: DataTypes.STRING,
    district: DataTypes.STRING,
    ward: DataTypes.STRING,
    provinceText: DataTypes.STRING,
    districtText: DataTypes.STRING,
    wardText: DataTypes.STRING,
    budget: DataTypes.FLOAT,
    typeRoom: DataTypes.STRING,
    interior: DataTypes.STRING
  }, {});
  product.associate = function (models) {
    // associations can be defined here
    models.product.belongsTo(models.SubCategory, {
      foreignKey: 'subCategoryId'
    });
    models.product.hasMany(models.productphoto, {
      foreignKey: 'productId'
    });
    models.product.belongsTo(models.SubChildCategory, {
      foreignKey: 'childCategoryId'
    });
    models.product.hasMany(models.vendor_product, {
      foreignKey: 'productId'
    });
  };
  return product;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiRGF0YVR5cGVzIiwicHJvZHVjdCIsImRlZmluZSIsImNhdGVnb3J5SWQiLCJJTlRFR0VSIiwic3ViQ2F0ZWdvcnlJZCIsImNoaWxkQ2F0ZWdvcnlJZCIsIm5hbWUiLCJTVFJJTkciLCJzbHVnIiwiYnJhbmQiLCJ1bml0U2l6ZSIsInN0YXR1cyIsImJ1eWVyUHJpY2UiLCJwcmljZSIsInF0eSIsImRpc2NvdW50UGVyIiwiZGlzY291bnQiLCJ0b3RhbCIsIm5ldFByaWNlIiwicGhvdG8iLCJzb3J0RGVzYyIsIlRFWFQiLCJkZXNjIiwicGhvbmVOdW1iZXIiLCJzcXVhcmUiLCJGTE9BVCIsInByb3ZpbmNlIiwiZGlzdHJpY3QiLCJ3YXJkIiwicHJvdmluY2VUZXh0IiwiZGlzdHJpY3RUZXh0Iiwid2FyZFRleHQiLCJidWRnZXQiLCJ0eXBlUm9vbSIsImludGVyaW9yIiwiYXNzb2NpYXRlIiwibW9kZWxzIiwiYmVsb25nc1RvIiwiU3ViQ2F0ZWdvcnkiLCJmb3JlaWduS2V5IiwiaGFzTWFueSIsInByb2R1Y3RwaG90byIsIlN1YkNoaWxkQ2F0ZWdvcnkiLCJ2ZW5kb3JfcHJvZHVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcHJvZHVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemUsIERhdGFUeXBlcykgPT4ge1xuICBjb25zdCBwcm9kdWN0ID0gc2VxdWVsaXplLmRlZmluZSgncHJvZHVjdCcsIHtcbiAgICBjYXRlZ29yeUlkOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBzdWJDYXRlZ29yeUlkOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBjaGlsZENhdGVnb3J5SWQ6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIG5hbWU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgc2x1ZzogRGF0YVR5cGVzLlNUUklORyxcbiAgICBicmFuZDogRGF0YVR5cGVzLlNUUklORyxcbiAgICB1bml0U2l6ZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBzdGF0dXM6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgYnV5ZXJQcmljZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgcHJpY2U6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIHF0eTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgZGlzY291bnRQZXI6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIGRpc2NvdW50OiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICB0b3RhbDogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgbmV0UHJpY2U6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIHBob3RvOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIHNvcnREZXNjOiBEYXRhVHlwZXMuVEVYVCxcbiAgICBkZXNjOiBEYXRhVHlwZXMuVEVYVCxcbiAgICBwaG9uZU51bWJlcjogRGF0YVR5cGVzLlRFWFQsXG4gICAgc3F1YXJlOiBEYXRhVHlwZXMuRkxPQVQsXG4gICAgcHJvdmluY2U6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgZGlzdHJpY3Q6IERhdGFUeXBlcy5TVFJJTkcsIFxuICAgIHdhcmQ6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgcHJvdmluY2VUZXh0OiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIGRpc3RyaWN0VGV4dDogRGF0YVR5cGVzLlNUUklORyxcbiAgICB3YXJkVGV4dDogRGF0YVR5cGVzLlNUUklORyxcbiAgICBidWRnZXQ6IERhdGFUeXBlcy5GTE9BVCxcbiAgICB0eXBlUm9vbTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBpbnRlcmlvcjogRGF0YVR5cGVzLlNUUklOR1xuICAgIFxuICB9LCB7fSk7XG4gIHByb2R1Y3QuYXNzb2NpYXRlID0gZnVuY3Rpb24obW9kZWxzKSB7XG4gICAgLy8gYXNzb2NpYXRpb25zIGNhbiBiZSBkZWZpbmVkIGhlcmVcbiAgICBtb2RlbHMucHJvZHVjdC5iZWxvbmdzVG8obW9kZWxzLlN1YkNhdGVnb3J5LCB7IGZvcmVpZ25LZXk6ICdzdWJDYXRlZ29yeUlkJyB9KTtcbiAgICBtb2RlbHMucHJvZHVjdC5oYXNNYW55KG1vZGVscy5wcm9kdWN0cGhvdG8sIHsgZm9yZWlnbktleTogJ3Byb2R1Y3RJZCcgfSk7XG4gICAgbW9kZWxzLnByb2R1Y3QuYmVsb25nc1RvKG1vZGVscy5TdWJDaGlsZENhdGVnb3J5LCB7IGZvcmVpZ25LZXk6ICdjaGlsZENhdGVnb3J5SWQnIH0pO1xuICAgIG1vZGVscy5wcm9kdWN0Lmhhc01hbnkobW9kZWxzLnZlbmRvcl9wcm9kdWN0LCB7IGZvcmVpZ25LZXk6ICdwcm9kdWN0SWQnIH0pOyAgXG4gIH07XG4gIHJldHVybiBwcm9kdWN0O1xufTsiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQ1pBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQUNDLFNBQVMsRUFBRUMsU0FBUyxFQUFLO0VBQ3pDLElBQU1DLE9BQU8sR0FBR0YsU0FBUyxDQUFDRyxNQUFNLENBQUMsU0FBUyxFQUFFO0lBQzFDQyxVQUFVLEVBQUVILFNBQVMsQ0FBQ0ksT0FBTztJQUM3QkMsYUFBYSxFQUFFTCxTQUFTLENBQUNJLE9BQU87SUFDaENFLGVBQWUsRUFBRU4sU0FBUyxDQUFDSSxPQUFPO0lBQ2xDRyxJQUFJLEVBQUVQLFNBQVMsQ0FBQ1EsTUFBTTtJQUN0QkMsSUFBSSxFQUFFVCxTQUFTLENBQUNRLE1BQU07SUFDdEJFLEtBQUssRUFBRVYsU0FBUyxDQUFDUSxNQUFNO0lBQ3ZCRyxRQUFRLEVBQUVYLFNBQVMsQ0FBQ1EsTUFBTTtJQUMxQkksTUFBTSxFQUFFWixTQUFTLENBQUNRLE1BQU07SUFDeEJLLFVBQVUsRUFBRWIsU0FBUyxDQUFDSSxPQUFPO0lBQzdCVSxLQUFLLEVBQUVkLFNBQVMsQ0FBQ0ksT0FBTztJQUN4QlcsR0FBRyxFQUFFZixTQUFTLENBQUNJLE9BQU87SUFDdEJZLFdBQVcsRUFBRWhCLFNBQVMsQ0FBQ0ksT0FBTztJQUM5QmEsUUFBUSxFQUFFakIsU0FBUyxDQUFDSSxPQUFPO0lBQzNCYyxLQUFLLEVBQUVsQixTQUFTLENBQUNJLE9BQU87SUFDeEJlLFFBQVEsRUFBRW5CLFNBQVMsQ0FBQ0ksT0FBTztJQUMzQmdCLEtBQUssRUFBRXBCLFNBQVMsQ0FBQ1EsTUFBTTtJQUN2QmEsUUFBUSxFQUFFckIsU0FBUyxDQUFDc0IsSUFBSTtJQUN4QkMsSUFBSSxFQUFFdkIsU0FBUyxDQUFDc0IsSUFBSTtJQUNwQkUsV0FBVyxFQUFFeEIsU0FBUyxDQUFDc0IsSUFBSTtJQUMzQkcsTUFBTSxFQUFFekIsU0FBUyxDQUFDMEIsS0FBSztJQUN2QkMsUUFBUSxFQUFFM0IsU0FBUyxDQUFDUSxNQUFNO0lBQzFCb0IsUUFBUSxFQUFFNUIsU0FBUyxDQUFDUSxNQUFNO0lBQzFCcUIsSUFBSSxFQUFFN0IsU0FBUyxDQUFDUSxNQUFNO0lBQ3RCc0IsWUFBWSxFQUFFOUIsU0FBUyxDQUFDUSxNQUFNO0lBQzlCdUIsWUFBWSxFQUFFL0IsU0FBUyxDQUFDUSxNQUFNO0lBQzlCd0IsUUFBUSxFQUFFaEMsU0FBUyxDQUFDUSxNQUFNO0lBQzFCeUIsTUFBTSxFQUFFakMsU0FBUyxDQUFDMEIsS0FBSztJQUN2QlEsUUFBUSxFQUFFbEMsU0FBUyxDQUFDUSxNQUFNO0lBQzFCMkIsUUFBUSxFQUFFbkMsU0FBUyxDQUFDUTtFQUV0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDTlAsT0FBTyxDQUFDbUMsU0FBUyxHQUFHLFVBQVNDLE1BQU0sRUFBRTtJQUNuQztJQUNBQSxNQUFNLENBQUNwQyxPQUFPLENBQUNxQyxTQUFTLENBQUNELE1BQU0sQ0FBQ0UsV0FBVyxFQUFFO01BQUVDLFVBQVUsRUFBRTtJQUFnQixDQUFDLENBQUM7SUFDN0VILE1BQU0sQ0FBQ3BDLE9BQU8sQ0FBQ3dDLE9BQU8sQ0FBQ0osTUFBTSxDQUFDSyxZQUFZLEVBQUU7TUFBRUYsVUFBVSxFQUFFO0lBQVksQ0FBQyxDQUFDO0lBQ3hFSCxNQUFNLENBQUNwQyxPQUFPLENBQUNxQyxTQUFTLENBQUNELE1BQU0sQ0FBQ00sZ0JBQWdCLEVBQUU7TUFBRUgsVUFBVSxFQUFFO0lBQWtCLENBQUMsQ0FBQztJQUNwRkgsTUFBTSxDQUFDcEMsT0FBTyxDQUFDd0MsT0FBTyxDQUFDSixNQUFNLENBQUNPLGNBQWMsRUFBRTtNQUFFSixVQUFVLEVBQUU7SUFBWSxDQUFDLENBQUM7RUFDNUUsQ0FBQztFQUNELE9BQU92QyxPQUFPO0FBQ2hCLENBQUMifQ==