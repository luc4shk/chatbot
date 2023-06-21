# Chatbot 🤖

## Directorios

- **_bot_** -> Contienen los archivos necesarios para la funcionalidad del bot.
- **_components_** -> Contiene el archivo donde se coloca el componente principal del chatbot.
- **_widgetsBot_** -> Contiene los widgets que se usan para el chatbot.

 ## Cambiar Información
 ### Cambiar links para adquirir suplementos y planes
- Para cambiar el link que redirige el boton de adquirir suplementos tiene que ir a el archivo **_AdquirirSuplemento.jsx_** ubicado en el directorio **_widgetsBot_**, de igual forma puede cambiar el mensaje que muestre el boton.

        <CardLink link="nuevolink" name="Comprar suplemento"/> 
- El mismo procedimiento para adquirir planes, tiene que ir al archivo **_AdquirirPlan.jsx_** ubicado en el directorio **_widgetsBot_** y editar el link.

        <CardLink link="#" name="Comprar plan"/> 
 
 ### Cambiar link de las redes
 Dirijase al archivo **_Redes.jsx_** en el mismo directorio. Se encuentra un arreglo de la siguiente forma:

        const redes =[
    {
        name:"Facebook",
        bgColor:"#1877F2",
        link:"",
        id:1,
    },
En este caso se colocaría el link específico en el artributo *link* de cada objeto en el arreglo, si quiere añadir otra red tambien puede hacerlo solamente insertandola en el array.

 ### Cambiar entrenadores, planes y suplementos
Cada uno de los elementos nombrados tiene su propia clase en la cual recibe un arreglo para iterar la información:
- Entrenadores: **_Entrenador.jsx_**

        <EntrenadorCard entrenador={arreglonuevo}/>
- Planes: **_Planes.jsx_**

        <PlanCard planes={arreglonuevo} />
- Suplementos: **_Suplementos.jsx_**

         <SuplementoCard suplementos={arreglonuevo}/>

Todos ubicados dentro del directorio **_widgetsBot_**

> Como se puede observar cada componente llama a su vez a otro componente card el cual solamente tiene la función de iterar el arreglo que se paso para mostrar la informacion, estas clases tambien pueden ser modificadas a gusto.


