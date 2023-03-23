const  nombre=document.getElementById('nombre')
const boton=document.getElementById('boton')
const apellido=document.getElementById('apellido')
const edad=document.getElementById('edad')
const nombres=document.querySelector('.nombres')
const apellidos=document.querySelector('.apellidos')
const edades=document.querySelector('.edades')


boton.addEventListener('click',()=>{
    const obj={
        nombre:nombre.value,
        apellido:apellido.value,
        edad:edad.value
    }
    // hola.innerHTML=`Nombre:${obj.nombre} <br> Apellido:${obj.apellido} <br> edad:${obj.edad}`
    div1=document.createElement('div')
    div1.textContent=obj.nombre
    nombres.append(div1)

    div2=document.createElement('div')
    div2.textContent=obj.apellido
    apellidos.append(div2)

    div3=document.createElement('div')
    div3.textContent=obj.edad
    edades.append(div3)

    nombre.value=''
    apellido.value=''
    edad.value=''

})

