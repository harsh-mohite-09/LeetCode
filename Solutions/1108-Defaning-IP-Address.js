// Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

const defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};

console.log(defangIPaddr("1.1.1.1"));
