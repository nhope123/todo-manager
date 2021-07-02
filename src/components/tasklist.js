import React, { Component } from 'react';
import moment from 'moment';
import {v4 as uuidv4} from 'uuid';

import Task from './task';
import {capitalize, addTask, removeTask} from '../redux/helper';

class TaskList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      creation_date: moment().format('ddd, Do MMMM, YYYY'),
      title: '',
      task_list: [],
    }

  }

  shouldComponentUpdate(nextProps,nextState){
    return ((this.state.task_list.length !== nextState.task_list.length) ||this.state !== nextState)? true : false;
  }

  /**
  * @function updateTitle
  * @description This function updates the task title state.
  * @param {string} value A string of less than 20 char.
  */
  updateTitle =(value)=>{
    if (value.length < 21) this.setState(() =>({title: capitalize(value) }))
  }

  /**
  * @function updateTask
  * @description This function updates the task in the task list.
  * @param {object} value
  *
  */
  updateTask =  (process,value) =>{
      if(process === 'add'){
        this.setState( state => ({task_list: addTask(state.task_list,value)}))
      }
      else if (process === 'remove'){
        this.setState( state => ({task_list: removeTask(state.task_list, value)}))
      }
  }

  render() {

    return (
      <div className={'container-fluid d-flex flex-column justify-content-center align-items-center bg-info min-vh-100 '} >
        <div id={'item-list'} className={'container border  border-radius-6 m-5 p-0 bg-white'}  >

          {/* Todo title header */}
          <div id={'item-title'} className={'header w-100  '} >
            <input id={'title-input'} className={'w-100 text-center fs-3 '}
                   type={'text'} tabIndex={'0'} value={this.state.title}
                   placeholder={'Title'}
                   onChange={(event) =>{this.updateTitle(event.target.value)}}/>
          </div >

          {/* Todo date */}
          <div id={'date'} className={'text-center align-middle text-black mt-1 fst-italic'}>
              {this.state.creation_date}
          </div >

          {/* Todo list */}
          <div >
            {
              this.state.task_list.map((item,index) => {
                  return (
                          <Task key={item.id} {...item} callback={this.updateTask}
                                user_input={false} new_input={false}/>
                          );
              })
             }
          </div >

          {/* Intial input task */}
          <Task autoFocus {...{
                                id: uuidv4(), complete: false, task:'',
                                user_input: true, callback: this.updateTask,
                                new_input: true
                              }} />
        </div >
      </div >
    )
  }
}

export default TaskList