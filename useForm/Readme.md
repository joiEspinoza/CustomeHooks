# useForm use

Ejemplo de uso: 
```

const [ formValues, handleInputChange, reset ] = useForm( { name : "", email : "" } );

const { name, email } = formValues;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

<input type="text" placeholder="name" |||name="name"||| value={ name } onChange={ handleInputChange }/>

<input type="text" placeholder="email" |||name="email"||| value={ email } onChange={ handleInputChange }/>

```
