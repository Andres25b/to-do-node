# To Do App
Descripción: Esta es una aplicación para crear, eliminar, actualizar y listar tareas.

# Temas a tocar
1. Realizar validaciones con Yargs.
2. Crear ayuda automática para nuestros comandos.
3. Grabar en FyleSystem.
4. Leer un archivo JSON.
5. CRUD al archivo JSON.

# Modo de uso de la app
1. Clonar el repositorio [aquí](https://github.com/Andres25b/tod-do-node)
2. Para instalar las dependencias. Ejecute el siguiente comando:

        npm install

3. Ejecute el siguiente comando para crear una tarea.

        node app crear --descripcion "Estudiar programación"

        ó

        node app crear -d "Estudiar programación"

4. Ejecute el siguiente comando para eliminar una tarea.

        node app borrar --descripcion "Estudiar programación"

        ó

       node app borrar -d "Estudiar programación"

5. Ejecute el siguiente comando para actualizar una tarea.

        node app actualizar --descripcion "salir a correr" -c true

        ó

       node app actualizar -d "salir a correr" -c false

6. Ejecute el siguiente comando para listar las tareas.

        node app listar