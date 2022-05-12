$(document).ready( function () {
    $('#tablita').DataTable();
    'ajax' ; './contactos/data.json' ,
    'columns' ; [

        {'contactos' : 'id'},
        {'contactos' : 'Nombres'},
        {'contactos' : 'Apellidos'},
        {'contactos' : 'Direcciones'},
        {'contactos' : 'Telefonos'},
        {'contactos' : 'Correo'},        

    ]
} );

