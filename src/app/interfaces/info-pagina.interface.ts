//poner un signo de interrogacion al final de la propiedad
//la convierte en opcional 

export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  equipo_trabajo?: any[];
}