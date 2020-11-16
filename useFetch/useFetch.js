import { useEffect, useRef, useState } from 'react'

const useFetch = ( url ) => 
{

  const isMounted = useRef( true );

  const [ state, setState ] = useState( { data : null, loading : true, error : null } );

  useEffect(() => 
  {
    
    return ()=>{ isMounted.current = false };

  }, [])


  useEffect( () => 
  {

        setState( { data : null, loading : true, error : null } );

        fetch( url ).then( ( respuesta ) => respuesta.json() )
        .then( ( datos ) => { 

       
          if(isMounted.current)
          {
            setState( { loading : false, error : null, data: datos } );
          }
          else
          {
            console.log("setState no se llamo")
          }

        })
        .catch( ()=>{ 

            setState( { data : null, loading : false, error : "No se puedo cargar la data" } );

        } );

  }, [ url ]);

  return state;

}

export default useFetch
