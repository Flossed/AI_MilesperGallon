/* File             : index.js
   Author           : Daniel S. A. Khan
   Copywrite        : Daniel S. A. Khan (c) 2025
   Description      : Main file for Application
   Notes            :
*/

const mongoose                         = require( 'mongoose' );
const express                          = require( 'express' );
const bodyParser                       = require( 'body-parser' );
const fileUpload                       = require( 'express-fileupload' );
const favicon                          = require( 'serve-favicon' );
const path                             = require( 'path' );
const cors                             = require( 'cors' );
const {logger}                         = require( './services/generic' );
const {ApplicationPort}                = require( './services/generic' );
const {applicationName}                = require( './services/generic' );
const {dbName}                         = require( './services/generic' );
const { getCurrentVersions }           = require( './services/manageVersion' );
const db                                = mongoose.connection;
const app                               = express();
const usedDB                            = dbName;

// eslint-disable-next-line no-undef
const directoryName                     = __dirname;
app.set( 'view engine','ejs' );
mongoose.connect( usedDB ); 
app.use( bodyParser.json() );
app.use( fileUpload() );
app.use( bodyParser.urlencoded( {extended:true} ) );
app.use( express.static( 'public' ) );
app.use( favicon( path.join( directoryName, 'public', 'img', 'zandd.ico' ) ) );
app.use( cors() );
app.use( '/css',express.static( path.join( directoryName, 'node_modules/bootstrap/dist/css' ) ) );
app.use( function ( req, res, next )
{   res.header( 'Access-Control-Allow-Origin', '*' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
    next();
} );



const genCntrl                          = require( './controllers/generic' );



function setRouting ()
{   try
    {   logger.trace( applicationName + ':index:setRouting:Started ' );        
        app.use( '*', genCntrl.main );
        logger.trace( applicationName + ':index:setRouting:Done ' );
    }
    catch ( ex )
    {   logger.exception( applicationName + ':index:setRouting:An exception Occured:[' + ex + ']' );
    }
}



async function initializeServices ()
{   try
    {   logger.trace( applicationName + ':index:initializeServices: Starting' );

        const timeStamp                = new Date();
        const versions                 = getCurrentVersions();
        const dbNameArray              = usedDB.split( '/' );
        const lastFix                  = versions.tagList.length < 2 ? '' : versions.tagList[versions.tagList.length - 2].slice( 16 );
        const appNameString            = 'Starting ' + applicationName;
        const timeStampString          = 'Time: ' + timeStamp.toLocaleTimeString( 'de-DE' );
        const dateString               = 'Date: ' + timeStamp.toLocaleDateString( 'de-DE' );
        const portString               = 'App listening on port [' + ApplicationPort + ']';
        const dbString                 = 'DB Name: [' + dbNameArray[dbNameArray.length - 1] + ']';
        const versionString            = 'Version: [' + versions.currentTag[0] + ']';
        const lastFixString            = 'Last Fix: [' + lastFix + ']';

        logger.info( '********************************************************************************' );
        logger.info( '*'.padEnd( 21 ,' ' ) + appNameString.padEnd( '58',' ' ) + '*' );
        logger.info( '*'.padEnd( 21 ,' ' ) + timeStampString.padEnd( '58',' ' ) + '*' );
        logger.info( '*'.padEnd( 21 ,' ' ) + dateString.padEnd( '58',' ' ) + '*' );
        logger.info( '*'.padEnd( 21 ,' ' ) + portString.padEnd( '58',' ' ) + '*' );
        logger.info( '*'.padEnd( 21 ,' ' ) + dbString.padEnd( '58',' ' ) + '*' );
        logger.info( '*'.padEnd( 21 ,' ' ) + versionString.padEnd( '58',' ' ) + '*' );
        logger.info( '*'.padEnd( 21 ,' ' ) + lastFixString.padEnd( '58',' ' ) + '*' );
        logger.info( '********************************************************************************' );

        db.on( 'error', console.error.bind( console, 'connection error: ' ) );
        db.once( 'open',function () { console.log( 'Connected to DB' ); } );


        logger.trace( applicationName + ':index:initializeServices: Done' );
    }
    catch ( ex )
    {   logger.exception( applicationName + ':index:initializeServices:An exception occured:[' + ex + ']' );
    }
}



function main ()
{   try
    {   logger.trace( applicationName + ':index:main:Starting' );
        setRouting();
        initializeServices();
        logger.trace( applicationName + ':index:main:Done' );
    }
    catch ( ex )
    {   logger.exception( applicationName + 'index:main:An exception Occurred:[' + ex + ']' );
    }
}



module.exports = app.listen( ApplicationPort );
main();



/* LOG:
*/
