function logDriverNames(drivers) {
drivers.forEach(function(driver) {
  console.log(driver.name);
})
}


+function logDriverNames(drivers) {
 +  drivers.forEach(function(driver) {
 +    console.log(`${driver.name}`);
 +  })
 +}