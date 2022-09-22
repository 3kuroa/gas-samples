// This file is sample to use Property Service


function singleSample() {
  const userProperties = PropertiesService.getScriptProperties()

  userProperties.setProperty('SAMPLE_URL', "https://developers.google.com/apps-script/guides/properties");
  Logger.log(userProperties.getProperty('SAMPLE_URL'));

  userProperties.deleteProperty('SAMPLE_URL');
  Logger.log(userProperties.getProperty('SAMPLE_URL'));
}


function multipleSample() {
  const userProperties = PropertiesService.getScriptProperties()
  
  userProperties.setProperties({
    'SAMPLE_URL1' : "https://developers.google.com/apps-script/guides/properties",
    'SAMPLE_URL2' : "https://developers.google.com/apps-script/reference"
  });

  Logger.log(userProperties.getProperty('SAMPLE_URL1'));
  Logger.log(userProperties.getProperty('SAMPLE_URL2'));

  userProperties.deleteAllProperties();
  Logger.log(userProperties.getProperty('SAMPLE_URL1'));
  Logger.log(userProperties.getProperty('SAMPLE_URL2'));
}


