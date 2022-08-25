import { Table } from "reactstrap";
import { data } from './../utils/data';


export default function DataTable(): JSX.Element {

    interface IDataPersona {
        nombre: string,
        edad: number,
        carrera: string,
        hobbie: string
    }

    return (
        <div style={{ marginTop: '2rem', padding: '0.2rem' }}>
            <Table
                hover
                responsive
                size= ''
            >
                <thead >
                    <tr className="table-dark">
                        <th>
                            #
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Edad
                        </th>
                        <th>
                            Carrera
                        </th>
                        <th>
                            Hobbie
                        </th>
                    </tr >
                </thead>
                <tbody>
                    {
                        data.map((persona: IDataPersona, index: number) => {
                            return (
                                <tr key={index} className="table-dark">
                                    <th scope="row">
                                        {index + 1}
                                    </th>
                                    <td>
                                        {persona.nombre}
                                    </td>
                                    <td>
                                        {persona.edad}
                                    </td>
                                    <td>
                                        {persona.carrera}
                                    </td>
                                    <td>
                                        {persona.hobbie}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}