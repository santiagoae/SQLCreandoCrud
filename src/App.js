import React, { Component } from "react";
import "./styles/App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faArrowsRotate, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";


const url = "http://localhost:8080"

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      contactos:[],
      modalInsertar: false,
      modalEliminar: false,
      modalEliminarLogico: false,
      form:{
        id: '',
        nombre: '',
        telefono: '',
        correo: '',
        fechaNacimiento: '',
        tipoModal: ''
      }
    }
  }

  modalInsertar = () =>{
    this.setState({
      modalInsertar: !this.state.modalInsertar
    });
  }

  modalEliminarLogico = () =>{
    this.setState({
      modalEliminarLogico: !this.state.modalEliminarLogico
    });
  }

  peticionGet = () =>{
    axios.get(url + "/contactos")
    .then(response => {      
      this.setState({contactos: response.data});
    }).catch(error => {
      console.log(error.message);
    });
  }

  peticionPost = async() => {
    delete this.state.form.id;
    try {
      //await axios.post(url + "/contacto", this.state.form)   
      await axios.post(`${url}/contacto?nombre=${this.state.form.nombre}&telefono=${this.state.form.telefono}&correo=${this.state.form.correo}&fechaNacimiento=${this.state.form.fechaNacimiento}`,{})   
      .then(response => {
      console.log(response.data);        
      this.modalInsertar();
      this.peticionGet();
    })
    } catch (error) {      
      console.error(error.response.data);
    }
    
  }

  peticionPut = async () => {
    //axios.put(url+'/contacto/'+this.state.form.id, this.state.form)
    await axios.put(`${url}/contacto/${this.state.form.id}?nombre=${this.state.form.nombre}&telefono=${this.state.form.telefono}&correo=${this.state.form.correo}&fechaNacimiento=${this.state.form.fechaNacimiento}`,{})
    .then(Response => {
      this.modalInsertar();
      this.peticionGet();
    }).catch(error => {
      console.log(error.message);
    });
  }

  //borrado logico
  peticionPatch = async () => {
    await axios.patch(`${url}/contacto/nombre/${this.state.form.id}?nombre=${this.state.form.nombre}`,{})
    .then(Response => {
      this.modalEliminarLogico();
      this.peticionGet();
    }).catch(error => {
      console.log(error.message);
    }); 

  }

  peticionDelete = () => {
    axios.delete(url+'/contacto/'+this.state.form.id).then(Response => {
      this.setState({modalEliminar: false})
      this.peticionGet();
    })
  }

  seleccionarContacto = (contacto) => {
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: contacto.id,
        nombre: contacto.nombre,
        telefono: contacto.telefono,
        correo: contacto.correo,
        fechaNacimiento: contacto.fechaNacimiento        
      }
    })
  }

  handleChange = (event) => {
     event.persist();
     this.setState({ 
        form:{
          ...this.state.form, //copiar el objeto
          [event.target.name]: event.target.value
        }
      });    
  }

  componentDidMount(){
    this.peticionGet();
  }

  render() {
    const {form} = this.state;
    return(
      <div className="App">
        <br />
        <button className="btn btn-success" onClick={ () => {this.setState({form: '', tipoModal: 'insertar'}); this.modalInsertar()}}> <FontAwesomeIcon icon={faAddressCard} /> Agregar Contacto </button>
        {"  "}
        <button className="btn btn-warning" onClick={ () => {this.setState({form: '', tipoModal: 'borradoLogico'}); this.modalEliminarLogico()}}> <FontAwesomeIcon icon = {faArrowsRotate}/> Borrado Nombre Logico</button>
        <br /><br />
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>FechaNacimiento</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactos.map( (contacto, item) => {
              return(
                <tr key={item}>
                  <td >{contacto.id}</td>
                  <td>{contacto.nombre}</td>
                  <td>{contacto.telefono}</td>
                  <td>{contacto.correo}</td>
                  <td>{contacto.fechaNacimiento}</td>
                  <td>
                    <button className="btn btn-primary" onClick={ () => {this.seleccionarContacto(contacto); this.modalInsertar();}}> <FontAwesomeIcon icon = {faEdit}/> </button>
                    {"  "}
                    <button className="btn btn-danger" onClick={ () => {this.seleccionarContacto(contacto); this.setState({modalEliminar: true})}}> <FontAwesomeIcon icon = {faTrashAlt}/></button>
                    
                  </td>
                </tr>
              )
            })}            
          </tbody>
        </table>
        <p style={{fontSize: "14px"}}> <b>Hecho por Santiago Avendaño Escobar</b></p>

        <Modal isOpen = {this.state.modalInsertar}>
            <ModalHeader style = {{display:"block"}}>
              <button style = {{float:"right", pointerEvents:"auto", border:"none"}} onClick={() => this.modalInsertar()}>X</button>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label htmlFor = "id">ID</label>
                <input className="form-control" type="text" name="id" id="ids" readOnly  value={this.state.contactos.length + 1} />
                <br />
                <label htmlFor = "nombre">Nombre</label>
                <input className="form-control" type="text" name="nombre" id="nombres" onChange={this.handleChange} value={form.nombre} />
                <br />
                <label htmlFor = "telefono">Telefono</label>
                <input className="form-control" type="text" name="telefono" id="telefonos" onChange={this.handleChange} value={form.telefono} />
                <br />
                <label htmlFor = "correo">Correo</label>
                <input className="form-control" type="text" name="correo" id="correos" onChange={this.handleChange} value={form.correo} />
                <br />
                <label htmlFor = "fechaNacimiento">FechaNacimiento</label>
                <input className="form-control" type="text" name="fechaNacimiento" id="fechas" onChange={this.handleChange} value={form.fechaNacimiento} />
              </div>
            </ModalBody>
            <ModalFooter>
              {this.state.tipoModal === "insertar"?<button className="btn btn-success" onClick={ () => this.peticionPost()}>
                  Insertar
                </button> :
                <button className="btn btn-success" onClick={() => this.peticionPut()} >
                Actualizar
              </button>
              }              
              <button className="btn btn-danger" onClick={ () => this.modalInsertar()}>
                Cancelar
              </button>
            </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
              Estas seguro que deseas eliminar este contacto {form && form.nombre}
          </ModalBody>
          <ModalFooter>
              <button className="btn btn-danger" onClick={() => this.peticionDelete()}> Si</button>
              <button className="btn btn-Secundary" onClick={() => this.setState({modalEliminar: false})}> No</button>
          </ModalFooter>
        </Modal>

        <Modal isOpen = {this.state.modalEliminarLogico}>
            <ModalHeader style = {{display:"block"}}>
              <button style = {{float:"right", pointerEvents:"auto", border:"none"}} onClick={() => this.modalEliminarLogico()}>X</button>
            </ModalHeader>
            <ModalBody>
              <div className="form-group"> 
                <label htmlFor = "id">Id</label>
                <input className="form-control" type="text" name="id" id="ids" onChange={this.handleChange} value={form.id} />                
                <br />             
                <label htmlFor = "nombre">Nombre</label>
                <input className="form-control" type="text" name="nombre" id="nombres" onChange={this.handleChange} value={form.nombre} />                
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-success" onClick={ () => this.peticionPatch()}>
                 Eliminar/Cambiar 
              </button>                           
              <button className="btn btn-danger" onClick={ () => this.modalEliminarLogico()}>
                Cancelar
              </button>
            </ModalFooter>
        </Modal>

      </div>
    )
  }
}
export default App;
