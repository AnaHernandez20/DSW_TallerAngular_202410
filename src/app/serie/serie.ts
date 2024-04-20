export class Serie {

    //Super importante que estos atributos estén tal cual como en el json, sino no va a funcionar!!!
    //Esto es porque Angular intentará mapear los campos del JSON a las propiedades de la clase Serie, tiene que saber que son equivalentes o algo
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    poster: string;

    public constructor(id: number, nombre:string, canal: string, temporadas: number, descripcion: string, webSite: string, imagen: string){
   
    //Usaré el this para cuando se instancie ;)

    this.id = id;
    this.name = nombre;
    this.channel = canal;
    this.seasons = temporadas;
    this.description = descripcion;
    this.webpage = webSite;
    this.poster = imagen;


}
}
