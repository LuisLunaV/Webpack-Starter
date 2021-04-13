import '../css/componentes.css';
export const saludar=(nombre)=>{
    console.log('creando equiqueta h1');
    const h1=document.createElement('h1');
    h1.innerText=`${nombre}`;
    document.body.append(h1);
}
