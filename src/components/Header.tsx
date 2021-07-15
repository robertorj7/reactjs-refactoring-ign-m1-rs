import { GenreResponseProps } from "../App";

interface HeaderProps {
  selectedGenre: GenreResponseProps;
}

export function Header(props: HeaderProps) {  
  return <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>  
}