var CompanyProfile = (function () {
    var username;
    var firstName;
    var surName;
    var phone;
    var email;
    var age;
    var cv;
    var employeeID;
  
    var createProfile = function (username, firstName, surName, phone, email, age, cv, employeeID) {
      this.username = username;
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
  
    var getUsername = function () {
      return username; // Or pull this from cookie/localStorage
    };
  
    var setUsername = function (username) {
      this.username = username;
      // Also set this in cookie/localStorage
    };
  
    var getFirstName = function () {
      return firstName; // Or pull this from cookie/localStorage
    };
  
    var setFirstName = function (firstName) {
      this.firstName = firstName;
      // Also set this in cookie/localStorage
    };
  
    var getSurname = function () {
      return surName; // Or pull this from cookie/localStorage
    };
  
    var setSurname = function (surName) {
      this.surName = surName;
      // Also set this in cookie/localStorage
    };
  
    var getPhone = function () {
      return phone; // Or pull this from cookie/localStorage
    };
  
    var setPhone = function (phone) {
      this.phone = phone;
      // Also set this in cookie/localStorage
    };
  
    var getEmail = function () {
      return email; // Or pull this from cookie/localStorage
    };
  
    var setEmail = function (email) {
      this.email = email;
      // Also set this in cookie/localStorage
    };
  
    var getAge = function () {
      return age; // Or pull this from cookie/localStorage
    };
  
    var setAge = function (age) {
      this.age = age;
      // Also set this in cookie/localStorage
    };
  
    var getCV = function () {
      return cv; // Or pull this from cookie/localStorage
    };
  
    var setCV = function (cv) {
      this.cv = cv;
      // Also set this in cookie/localStorage
    };
  
    var setEmployeeID = function () {
      return employeeID; // Or pull this from cookie/localStorage
    };
  
    var getEmployeeID = function (employeeID) {
      this.employeeID = employeeID;
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getUsername,
      setName: setUsername,
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
      setEmployeeID: setEmployeeID,
      getEmployeeID: getEmployeeID,
      createProfile: createProfile,
      clearAllInfo: clearAllInfo,
    };
  })();
  
  export default CompanyProfile;
  