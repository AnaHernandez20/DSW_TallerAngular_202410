export class Serie {

    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    webSite: string;
    imagen: string;

    public constructor(id: number, nombre:string, canal: string, temporadas: number, descripcion: string, webSite: string, imagen: string){
   
    //Usaré el this para cuando se instancie ;)

    this.id = id;
    this.nombre = nombre;
    this.canal = canal;
    this.temporadas = temporadas;
    this.descripcion = descripcion;
    this.webSite = webSite;
    this.imagen = imagen;


}
}
