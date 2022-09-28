import '../assets/styles/top.css'
import Card from './Card';

function Top() {

    const animes=[
        {
            imagen: '/imgs/DN.jpg',
            name: "1. Death Note",
            descripcion: "Light Yagami es un joven estudiante que un día encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes."
        },
        {
            imagen: '/imgs/OP.jpg',
            name: "2. One Piece",
            descripcion: "Sigue las aventuras de Monkey D. Luffy, un chico muy especial y elástico, que sueña con ser el rey de los piratas y encontrar una gran tesoro: el One Piece. Para ello, se hace a la mar en un bote con el que buscará la tripulación que le pueda ayudar en su misión."
        },
        {
            imagen: '/imgs/N.jpg',
            name: "3. Naruto",
            descripcion: "La obra narra la historia de un ninja huérfano adolescente llamado Naruto Uzumaki, cuyos padres murieron en el ataque del Zorro Demonio de Nueve Colas, y quien aspira a convertirse en Hokage (líder de su aldea) con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros."
        },
        {
            imagen: '/imgs/SB.jpg',
            name: "4. Seishun Buta Yaro wa Yumemiru Shōjo no Yume wo Minai",
            descripcion: "Existe un rumor sobre un misterioso fenómeno llamado “síndrome de la pubertad”. Por ejemplo, Sakuta Azusagawa es un estudiante de secundaria que de repente ve a una chica conejita frente a él. La chica es en realidad Mai Sakurajima, una actriz famosa que se ha ido de la industria del entretenimiento. Por alguna razón, las personas que rodean a Mai no pueden ver su figura de conejita. Sakuta se dispone a resolver este misterio, así que él pasa tiempo con Mai,  y descubre sus sentimientos secretos. Otras chicas que tienen el “síndrome de la pubertad” comienzan a aparecer frente a Sakuta."
        },
        {
            imagen: '/imgs/FMA.jpg',
            name: "5. Fullmetal Alchemist",
            descripcion: "Fullmetal Alchemist  es una adaptación de anime y del manga del mismo nombre escrito por Hiromu Arakawa. Posterior a esta salio una segunda serie de televisión titulada en inglés como Fullmetal Alchemist: Brotherhood  (Fullmetal Alchemist: Hermandad), se emitió despues en 2009. Los personajes centrales del anime son Edward y Alphonse Elric: dos hermanos alquimistas que están buscando la Piedra Filosofal para que puedan obtener o recuperar sus cuerpos después de un intento fallido de devolverle la vida a su madre muerta."
        }

    ]

    return ( 
        <div className='tops'>
            {animes.map((animes) => {
                return(<Card img={animes.imagen} name={animes.name} descripcion={animes.descripcion}/>)
            })}
        </div>
     );
    
}

export default Top;