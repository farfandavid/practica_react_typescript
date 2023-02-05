import { Sub } from "../interfaces/types"

interface Props {
    //children: any
    subs: Array<Sub>
}

// export default function List({ subs }: Props) {
// const List: React.FC<Props> = ({ subs }: Props) => {
function List({ subs }: Props) {
    /* const renderElement = (): JSX.Element[] => {
        return subs.map(sub => {
            return (
                <h1>Hola</h1>
            )
        })
    } */
    return (
        <ul>

            {
                subs.map(sub => {
                    return (
                        <li key={sub.nick}>
                            <img src={sub.avatar} alt={sub.nick} />
                            <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                            {/* sub.description ?. ..... solucion si es que existe .description */}
                            <p>{sub.description?.substring(0, 100)}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List;