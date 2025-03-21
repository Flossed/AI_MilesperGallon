/* File                                : generic.js
   Author                              : Daniel S. A. Khan
   Copywrite                           : Daniel S. A. Khan (c) 2024
   Description                         :
   Notes                               :
*/
const config                           = require( '../services/configuration' );
const Logger                           = require( '../services/loggerClass' );
const logFileName                      = config.get( 'application:logFileName' );
const applicationName                  = config.get( 'application:applicationName' );
const ApplicationPort                  = config.get( 'application:ServiceEndPointPort' );
const outputToBrowser                  = config.get( 'application:outputToBrowser' );
const logTracelevel                    = config.get( 'application:logTracelevel' );
const consoleOutput                    = config.get( 'application:consoleOutput' );
const logPath                          = config.get( 'application:logPath' );
const dbName                           = config.get( 'application:dbName' );
const dbNameTst                        = config.get( 'application:dbNameTst' );
const logger                           = new Logger( logFileName );



module.exports.logger                  = logger;
module.exports.applicationName         = applicationName;
module.exports.ApplicationPort         = ApplicationPort;
module.exports.outputToBrowser         = outputToBrowser;
module.exports.logTracelevel           = logTracelevel;
module.exports.consoleOutput           = consoleOutput;
module.exports.logPath                 = logPath;
module.exports.dbName                  = dbName;
module.exports.dbNameTst               = dbNameTst;


/* LOG:
*/
