import React from 'react';
import { ReactAgenda , guid } from 'react-agenda';
import axios from 'axios';

//https://github.com/revln9/react-agenda AQUI LA GUIA PARA LA AGENDA

require('moment/dist/locale/es')

var filtroColor = {
  "Revisión de frenos":"0",
  "Pastillas":"1",
  "Discos":"2",
  "Suspensión":"3",
  "Amortiguadores":"4",
  "Cambio de aceite":"5",
  "Alineación":"6",
  "Rotación de llantas":"7"
}

//saque los colores de aca .
//https://www.rapidtables.com/web/color/RGB_Color.html
var colors2= {
  '0':"rgba(102, 195, 131 , 1)" ,
  "1":"rgba(242, 177, 52, 1)" ,
  "2":"rgba(235, 85, 59, 1)" ,
  "3":"rgba(102, 102, 255, 1)" ,
  "4":"rgba(102, 255, 102, 1)" ,
  "5":"rgba(255, 255, 102, 1)" ,
  "6":"rgba(255, 153, 51, 1)" ,
  "7":"rgba(102, 255, 178, 1)" 
}

var colors= {
  'color-1':"rgba(102, 195, 131 , 1)" ,
  "color-2":"rgba(242, 177, 52, 1)" ,
  "color-3":"rgba(235, 85, 59, 1)"
}
var now = new Date();
//var items = [];

var items = [
  {
   _id            :guid(),
    name          : 'Revisión de frenos, Kevin',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 0),
    classes       : 'color-1'
  },
  {
    _id            :guid(),
     name          : 'Rotación de llantas , Jeimy',
     startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
     endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 0),
     classes       : 'color-3'
   },
   {
    _id            :guid(),
     name          : 'Revisión de frenos , Javier',
     startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 15, 0),
     endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 18, 0),
     classes       : 'color-1'
   },
   {
    _id            :guid(),
     name          : 'Amortiguadores , Jeimy',
     startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+2, 9, 0),
     endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+2, 13, 0),
     classes       : 'color-2'
   },

];

export default class Agenda extends React.Component {
    constructor(props){
    super(props);
    

    {/*  axios.get('http://localhost:4000/citas/')
      .then(res => {
        console.log('got here')
        var data = res.data;         
        var items = []
        
        for(var i=0; i < data.length; i++){

          var dat = data[i].fecha;
          dat = dat.split('T');
          dat = dat[0].split('-');

          var fechaAgendaInicio = new Date(dat[0],dat[1] - 1,dat[2],data[i].hora);
          var fechaAgendaFin = new Date(dat[0],dat[1] - 1,dat[2],parseInt(data[i].hora) + parseInt(data[i].servicio.duracionhoras));

          var agendaItem = { 
            _id:guid(), 
            id: data[i]._id, 
            name: data[i].servicio.nombre + ': '+data[i].servicio.mecanico.label, 
            startDateTime: fechaAgendaInicio,
            endDateTime   : fechaAgendaFin,
            classes : filtroColor[data[i].servicio.nombre]
          }
          //console.log(agendaItem)
          items.push(agendaItem);

          
        }        
        this.setState({
          items: items
        });
      })
      .catch((error) => {
        console.log(error);
      })
      */}
      this.state = {
        items:items,
        selected:[],
        cellHeight:30,
        showModal:false,
        locale:"es",
        rowsPerHour:2,
        numberOfDays:5,
        startDate: new Date()
      }
      this.handleCellSelection = this.handleCellSelection.bind(this)
      this.handleItemEdit = this.handleItemEdit.bind(this)
      this.handleRangeSelection = this.handleRangeSelection.bind(this)
    }
  
  handleCellSelection(item){
    console.log('handleCellSelection',item)
  }
  handleItemEdit(item){
    console.log('handleItemEdit', item)
  }
  handleRangeSelection(item){
    console.log('handleRangeSelection', item)
  }
    render() {
      return (
        <div>
          <ReactAgenda
            minDate={new Date(now.getFullYear(), now.getMonth()-3, now.getDate())}
            maxDate={new Date(now.getFullYear(), now.getMonth()+3, now.getDate())}
            disablePrevButton={false}
            startDate={this.state.startDate}
            cellHeight={this.state.cellHeight}
            locale={this.state.locale}
            items={this.state.items}
            numberOfDays={this.state.numberOfDays}
            rowsPerHour={this.state.rowsPerHour}
            itemColors={colors}
            autoScale={false}
            fixedHeader={true}
            onItemEdit={this.handleItemEdit.bind(this)}
            onCellSelect={this.handleCellSelection.bind(this)}
            onRangeSelection={this.handleRangeSelection.bind(this)}/>
        </div>
      );
    }
  }