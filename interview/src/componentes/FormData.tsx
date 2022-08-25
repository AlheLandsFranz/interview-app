import { useEffect, useState } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
// import { Form, Input, Button  } from 'bootstrap';
import { data } from '../utils/data';

export default function FormData(): JSX.Element {

    const [formData, setFormData] = useState({
        nombre: '',
        edad: 0,
        carrera: '',
        hobbie: ''
    })
    const [render, setRender] = useState({
        nombre: '',
        edad: 0,
        carrera: '',
        hobbie: ''
    })

    useEffect(() => {
        return resetAll();
    }, [])

    function resetAll() {

        (document.getElementById("name") as HTMLFormElement).value = '';
        (document.getElementById("age") as HTMLFormElement).value = '';
        (document.getElementById("career") as HTMLFormElement).value = '';
        (document.getElementById("hobbie") as HTMLFormElement).value = '';

        setFormData({
            nombre: '',
            edad: 0,
            carrera: '',
            hobbie: ''
        });
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            if (formData.edad !== 0 && formData.nombre && formData.carrera && formData.hobbie) {
                setRender({
                    nombre: formData.nombre,
                    edad: formData.edad,
                    carrera: formData.carrera,
                    hobbie: formData.hobbie
                })
                resetAll()
            } else {
                alert('Debes llenar todos los campos solicitados.')
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1rem' }}>

                <Form onSubmit={(e) => handleSubmit(e)}>
                    <div className="grid text-center" style={{ justifyContent: 'center' }}>
                        <div className="g-col-3" style={{ paddingTop: '1em', width: '15em' }}>
                            <Input name='nombre' type='text' placeholder='Nombre' onChange={(e) => handleChange(e)} id='name' />
                        </div>
                        <div className="g-col-3" style={{ paddingTop: '1em', width: '15em' }}>
                            <Input name='edad' type='number' placeholder='Edad' onChange={(e) => handleChange(e)} id='age' />
                        </div>
                        <div className="g-col-3" style={{ paddingTop: '1em', width: '15em' }}>
                            <Input name='carrera' type='text' placeholder='Carrera' onChange={(e) => handleChange(e)} id='career' />
                        </div>
                        <div className="g-col-3" style={{ paddingTop: '1em', width: '15em' }}>
                            <Input name='hobbie' type='text' placeholder='Hobbie' onChange={(e) => handleChange(e)} id='hobbie' />
                        </div>
                        <div className="g-col-3" style={{ paddingTop: '1em', width: '15em' }}>
                            <Button type="submit" color="danger" >Enviar</Button>
                        </div>
                    </div>
                </Form>
                {
                    render.nombre.length > 0 &&
                    <div style={{
                        backgroundColor: '#FF4A4A', height: 'max-content', borderRadius: '1rem', margin: '1rem',
                        padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center'
                    }}>
                        <h1>{render.nombre}</h1>
                        <p>{render.edad}</p>
                        <p>{render.carrera}</p>
                        <p>{render.hobbie}</p>
                    </div>
                }
            </div>
        </div>
    )
}