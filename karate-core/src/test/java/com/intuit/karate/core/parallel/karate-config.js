function fn() {
  var config = { 
    serverUrl: 'http://localhost:' + karate.properties['server.port']
  };  
  var result = karate.callSingle('call-single.feature', config);
  config.message = result.response.message;
  return config;
}