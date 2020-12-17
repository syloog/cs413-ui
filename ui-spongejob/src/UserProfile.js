var UserProfile = (function () {
  
  var createProfile = function (firstName, surName, phone, email, age, cv, employeeID) {

    this.firstName = firstName;
    this.surName = surName;
    this.phone = phone;
    this.email = email;
    this.age = age;
    this.cv = cv;
    this.employeeID = employeeID;
  };

  var clearAllInfo = function () {
    this.username = null;
    this.firstName = null;
    this.surName = null;
    this.phone = null;
    this.email = null;
    this.age = null;
    this.cv = null;
    this.employeeID = null;
  };

  var getFirstName = function () {
    return this.firstName; // Or pull this from cookie/localStorage
  };

  var setFirstName = function (firstName) {
    this.firstName = firstName;
    // Also set this in cookie/localStorage
  };

  var getSurname = function () {
    return this.surName; // Or pull this from cookie/localStorage
  };

  var setSurname = function (surName) {
    this.surName = surName;
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

  var getAge = function () {
    return this.age; // Or pull this from cookie/localStorage
  };

  var setAge = function (age) {
    this.age = age;
    // Also set this in cookie/localStorage
  };

  var getCV = function () {
    return this.cv; // Or pull this from cookie/localStorage
  };

  var setCV = function (cv) {
    this.cv = cv;
    // Also set this in cookie/localStorage
  };

  var getEmployeeID = function () {
    return this.employeeID; // Or pull this from cookie/localStorage
  };

  var setEmployeeID = function (employeeID) {
    this.employeeID = employeeID;
    // Also set this in cookie/localStorage
  };

  return {
    getFirstName: getFirstName,
    setFirstName: setFirstName,
    getSurname: getSurname,
    setSurname: setSurname,
    getPhone: getPhone,
    setPhone: setPhone,
    getEmail: getEmail,
    setEmail: setEmail,
    getAge: getAge,
    setAge: setAge,
    getCV: getCV,
    setCV: setCV,
    getEmployeeID: getEmployeeID,
    setEmployeeID: setEmployeeID,
    createProfile: createProfile,
    clearAllInfo: clearAllInfo,
  };
})();

export default UserProfile;
