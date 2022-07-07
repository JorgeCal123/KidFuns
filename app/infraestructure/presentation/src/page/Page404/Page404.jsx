import imagen from '../../image/404_not_found.png'

/** 
 * Page404 main page 
 * return component with image 404
*/
function Page404(){
    return (
        <body>
            <img src={ imagen } alt=''/>
        </body>
    );
}

export { Page404 };