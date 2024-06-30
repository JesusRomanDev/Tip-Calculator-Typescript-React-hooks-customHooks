# React + TypeScript + Vite
## Keys que aprendi en este proyecto
* Cuando se pasa como valor en un type cuando es la funcion modificadora, asi se pone:
type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}

En este caso el setTip es una funcion modificadora, lo unico que hizo falta fue poner el cursor sobre ella y nos muestra que es

* Para instalar Tailwind nos fuimos a tailwind -> docs -> frameworks guides -> vite

* En la funcion addItem, cuando hacemos map para poder incrementar una propiedad existente, en una sola linea no podiamos y tuvimos
que usar el spread operator, a diferencia de otros proyectos cuando usabamos el if, si podiamos

* A diferencia de JS vanilla, no podemos acceder a valores del DOM como const valorDOM = documento.querySelector('.elemento').value
esto lo intente porque queria saber el valor de la propina o subtotal y leerlo de el DOM, en vez de eso, creamos un hook con useState
y usamos el onChange para setear ese valor

* A si mismo, la diferencia entre onClick vs onChange, es que onChange es mas para cuando se cambia el valor de algun input o algo de algun formulario

