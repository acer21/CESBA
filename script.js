    function iniciar(){
        var boton=document.getElementById('grabar');
        boton.addEventListener('click',nuevoitem,false);
        mostrar();
    }

    function nuevoitem(){
        var nombre=document.getElementById('nombre').value;
        var email=document.getElementById('email').value;
        sessionStorage.setItem(nombre,email);
        mostrar();
        document.getElementById('nombre').value='';
        document.getElementById('email').value='';
        document.getElementById('password').value='';
    }

    function mostrar(){
        var cajadatos=document.getElementById('cajadatos');
        cajadatos.innerHTML='';
        for (var i=0;i<sessionStorage.length;i++)
            {
                var nombre=sessionStorage.key(i);
                var email=sessionStorage.getItem(nombre);
                cajadatos.innerHTML='<div>'+nombre+' - '+email+'</div>';
            }
        }
    window.addEventListener('load',iniciar,false);

