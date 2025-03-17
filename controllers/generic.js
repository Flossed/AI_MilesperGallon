/* File             : generic.js
   Author           : Daniel S. A. Khan
   Copywrite        : Daniel S. A. Khan (c) 2025
   Description      :
   Notes            :

*/
const {logger,applicationName}         =   require( '../services/generic' );
const { getCurrentVersions }           =   require( '../services/manageVersion' );
const { toxicityIF }                   =   require( '../services/milesPerGallon' );
const versionInformation               =   getCurrentVersions();



async function aboutHandler ( req,res )
{   try
    {   logger.trace( applicationName + ':generic:aboutHandler():Started' );
        res.render( 'about' , { currentVersions:versionInformation, } );
        logger.trace( applicationName + ':generic:aboutHandler():Done' );
    }
    catch ( ex )
    {   logger.exception( applicationName + ':generic:aboutHandler():An exception occurred :[' + ex + '].' );
    }
}



async function unknownHandler ( req,res )
{   try
    {   logger.trace( applicationName + ':generic:unknownHandler():Started' );
        res.render( 'unknown', { currentVersions:versionInformation, } );
        logger.trace( applicationName + ':generic:unknownHandler():Done' );
    }
    catch ( ex )
    {   logger.exception( applicationName + ':generic:unknownHandler():An exception occurred :[' + ex + '].' );
    }
}



async function homeHandler ( req,res )
{   try
    {   logger.trace( applicationName + ':generic:homeHandler():Started' );
        res.render( 'main', { currentVersions:versionInformation, }  );
        logger.trace( applicationName + ':generic:homeHandler():Done' );
    }
    catch ( ex )
    {   logger.exception( applicationName + ':generic:homeHandler():An exception occurred :[' + ex + '].' );
    }
}



function findTerm ( originalString, searchString )
{   try
    {   if ( originalString.includes( searchString ) )
        {   return originalString;
        }
        return null;
    }
    catch ( ex )
    {   logger.exception( applicationName + ':generic:findterm():An exception occurred :[' + ex + '].' );
        return null;
    }

}



async function milesPerGallonPost ( req,res )
{   try
    {   logger.trace( applicationName + ':generic:milesPerGallonPost():Started' );

        const testString               =   req.body.testString;

        logger.debug( applicationName + ':generic:milesPerGallonPost():Test String:[' + testString + '].' );        
        const analysis                 =   await toxicityIF( testString, 0.5 );
        console.log('antwoord', JSON.stringify(analysis, null, 2));
        res.render( 'milesPerGallon.ejs', { currentVersions:versionInformation, classification:analysis, sentence: testString} );
        logger.trace( applicationName + ':generic:milesPerGallonPost():Done' );
    }
    catch ( ex )
    {   logger.exception( applicationName + ':generic:milesPerGallonPost():An exception occurred :[' + ex + '].' );
    }
}



function milesPerGallonGet ( req,res )
{   try
    {  logger.trace( applicationName + ':generic:milesPerGallonGet():Started' );
       res.render( 'milesPerGallon.ejs', { currentVersions:versionInformation, } );
       logger.trace( applicationName + ':generic:milesPerGallonGet():Done' );
    }
    catch ( ex )
    {   logger.exception( applicationName + ':generic:milesPerGallonGet():An exception occurred :[' + ex + '].' );
    }
}




async function milesPerGallonHandler ( req,res )
{   try
    {   logger.trace( applicationName + ':generic:milesPerGallontestHandler():Started' );

        switch ( req.method )
        {   case 'POST' :   milesPerGallonPost( req,res );
                            break;
            case 'GET'  :   milesPerGallonGet( req,res );
                            break;
            default     :   break;
        }

        logger.trace( applicationName + ':generic:milesPerGallontestHandler():Done' );
    }
    catch ( ex )
    {   logger.exception( applicationName + ':generic:milesPerGallontestHandler():An exception occurred :[' + ex + '].' );
    }
}



/* --------------------------- Public Functions   ----------------------------*/
async function main ( req, res )
{   try
    {   logger.trace( applicationName + ':generic:main():Started' );

        switch ( req.originalUrl )
        {  case '/'                                      :   homeHandler ( req,res );
                                                             break;
           case '/about'                                 :   aboutHandler( req,res );
                                                             break;
           case '/milesPerGallon'                        :   milesPerGallonHandler( req,res  );
                                                             break;
           default                                       :   unknownHandler( req,res );
                                                             break;
        }
        logger.trace( applicationName + ':generic:main():Done' );
    }
    catch ( ex )
    {   logger.exception( applicationName + ':generic:main():An exception occurred: [' + ex + '].' );
    }
}



module.exports.main                     = main;
/* LOG:
*/
