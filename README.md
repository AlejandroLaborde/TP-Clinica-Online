# TP-Clinica-Online

Este es un trabajo practico para UTN-FRA, consta de realizar un sistema el cual tenga manejo de usuarios, y permita al usuario reservar turnos, y ser atendido

## Requerimientos de la aplicación 🚀

“La clínica OnLine, especialista en salud, cuenta
actualmente con consultorios (6 en la actualidad),
dos laboratorios (físicos en la clínica), y una sala
de espera general. Está abierta al público de lunes
a viernes en el horario de 8:00 a 19:00, y los
sábados en el horario de 8:00 a 14:00.
Trabajan en ella profesionales de diversas
especialidades, que ocupan los consultorios acorde a su disponibilidad, y reciben en ellos
pacientes con turno para consulta o tratamiento. Dichos turnos son pedidos por la web
seleccionando el profesional o la especialidad .La duración mínima de un turno es 30 minutos.”
pero los profesionales pueden cambiar la duración según su especialidad. un profesional puede
tener más de una especialidad
Estamos necesitando un sistema para que cada uno de los tipos de usuarios realicen las tareas
que se detallan a continuación.




### Usuarios 🔧

_Tenemos 3 tipos de usuarios, ADMIN, PROFESIONAL y USUARIO_



```
ADMIN_ Puede agregar a otros admin al sistema, y es el unico que puede aceptar a los profesionales para atender en la clinica y dar de alta especialidades
```

```
PROFESIONAL_ Se registra como profesional de la clinica, y debe ser aceptado para atender en la misma, 
puede configurar el tiempo de sus turnos, por defecto es de 30 min
```

```
USUARIO_ Se registra en el sistema con dos imagenes, puede reservar turnos eligiendo el profesional o la especialidad
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_


## Despliegue 📦

_El sistema esta deployado en firebase, y se deja el link para poder ingresar a el_
```
https://clinica-online.firebaseapp.com/
```


## Construido con 🛠️

_Angular - firebase_
