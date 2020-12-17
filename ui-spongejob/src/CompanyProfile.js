var CompanyProfile = (function () {
  var createProfile = function (name, address, phone, email, companyId) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.companyId = companyId;
  };

  var clearAllInfo = function () {
    this.name = null;
    this.address = null;
    this.phone = null;
    this.email = null;
    this.companyId = null;
  };

  var getName = function () {
    return this.name; // Or pull this from cookie/localStorage
  };

  var setName = function (name) {
    this.name = name;
    // Also set this in cookie/localStorage
  };

  var getAddress = function () {
    return this.address; // Or pull this from cookie/localStorage
  };

  var setAddress = function (address) {
    this.address = address;
    // Also set this in cookie/localStorage
  };

  var getPhone = function () {
    return this.phone; // Or pull this from cookie/localStorage
  };

  var setPhone = function (phone) {
    this.phone = phone;
    // Also set this in cookie/localStorage
  };

  var getEmail = function () {
    return this.email; // Or pull this from cookie/localStorage
  };

  var setEmail = function (email) {
    this.email = email;
    // Also set this in cookie/localStorage
  };

  var getCompanyID = function () {
    return this.companyId; // Or pull this from cookie/localStorage
  };

  var setCompanyID = function (companyId) {
    this.companyId = companyId;
    // Also set this in cookie/localStorage
  };

  return {
    getName: getName,
    setName: setName,
    getAddress: getAddress,
    setAddress: setAddress,
    getPhone: getPhone,
    setPhone: setPhone,
    getEmail: getEmail,
    setEmail: setEmail,
    getCompanyID: getCompanyID,
    setCompanyID: setCompanyID,
    createProfile: createProfile,
    clearAllInfo: clearAllInfo,
  };
})();

export default CompanyProfile;
