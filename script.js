    function iniciar(){
        var boton=document.getElementById('grabar');
        boton.addEventListener('click',nuevoitem,false);
        window.addEventListener("storage",mostrar,false);
        mostrar();
    }

    function nuevoitem(){
        var nombre=document.getElementById('nombre').value;
        var email=document.getElementById('email').value;
        localStorage.setItem(nombre,email);
        mostrar();
        document.getElementById('nombre').value='';
        document.getElementById('email').value='';
    }

    function mostrar(){
        var cajadatos=document.getElementById('cajadatos');
        cajadatos.innerHTML='';
        for (var i=0;i<localStorage.length;i++)
            {
                var nombre=localStorage.key(i);
                var email=localStorage.getItem(nombre);
                cajadatos.innerHTML='<div>'+nombre+' - '+email+'</div>';
            }
        }
    window.addEventListener('load',iniciar,false);

