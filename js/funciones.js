function validarVacios() {
   // Variables de alerta
   let nombre_de_usuario = "";
   let correo = "";
   let mensaje = "";

   // Identificar cada campo vacío
   if (document.getElementById("nombre_de_usuario").value == "") {
      nombre_de_usuario = "\nNombre de usuario";
   }
   if (document.getElementById("correo").value == "") {
      correo = "\nCorreo";
   }
   if (document.getElementById("mensaje").value == "") {
      mensaje = "\nMensaje";
   }

   // Si hay algún campo vacío genera alerta y desactiva el botón submit
   if (document.getElementById("nombre_de_usuario").value == "" ||
       document.getElementById("correo").value == "" ||
       document.getElementById("mensaje").value == "") {
         alert("Debe llenar los campos que faltan:\n"+nombre_de_usuario+correo+mensaje);
         document.getElementById("enviar").type = "button";
   }  else
         document.getElementById("enviar").type = "submit";
}