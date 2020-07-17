    var response = prompt("Enter your OS name and its version seperated by space");
    var osversion = response.split(" ");
    console.log(osversion);
    var os = osversion.slice(0,1);
    os = String(os);
    var version = osversion.slice(1);
    version = Number(version);
    console.log(`The OS name is ${os} and version is ${version}`)
