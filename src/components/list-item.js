import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {v4 as uuidv4} from 'uuid'

import {updateTask, capitalize} from '../redux/listSlice'

class ListItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: uuidv4(),
      complete:false,
      task:'',
    }
  }

  static propTypes = {
    updateTask: PropTypes.func,
  }

  /* Update the checkbox value */
  setChecked = e =>{
    this.setState({complete: e.target.checked})
  }
  /* Update the task state */
  changeTask = (name,value) =>{
    this.setState({[name]: (name === 'task')? capitalize(value) : value})
  }
  submitChanges = e =>{
    if(e.charCode === 13 && this.state.task.length >= 1){
      console.log('in kkeypress');
      this.props.updateTask(this.state)
    }
  }

  render(){
    return (
      <div className={' task container-fluid  rounded-pill  w-100'} key={this.props.key}>
        <form className={'row d-flex justify-content-center py-0 px-2 w-100'}

        onKeyPress={event => {
          this.submitChanges(event)
        }}  onSubmit={(event)=> event.preventDefault()}  >
          <div className={'col-1 d-flex justify-content-evenly align-items-center '} >
            <input tabIndex={'0'} type={'checkbox'} name={'complete'}
            onChange={(event) =>{this.changeTask(event.target.name,event.target.checked)}} />
          </div >
          <div className={'col-9 p-0 mx-0 '} >
            <input  type={'text'} tabIndex={'0'} value={this.state.task}
                    name={'task'} placeholder={'Task'} className={'fs-6'}
                    onChange={(event) =>{this.changeTask(event.target.name,event.target.value)}}/>
          </div >
          <div className={'col-1'} >
            <span role={'button'}>&#65049;</span >
          </div >
        </form >
      </div>
    )
  }
}

const mapStateToProps = (state) => ({


})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateTask,
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (ListItem);
