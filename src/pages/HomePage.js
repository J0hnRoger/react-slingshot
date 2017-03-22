import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
import {bindActionCreators} from 'redux'

import * as signatureActions from '../actions/signatureActions'

import 'semantic-ui-css/semantic.min.css'

class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
        signature: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange (event) {
    const val = event.target.value
    this.setState({
        signature: val
    })
  }

  onSave (event) {
    event.preventDefault()
    this.props.actions.createSignature(this.state.signature)
    console.log(`${this.state.signature} Saved`)
  }

  render () {
  return ( 
      <div class="ui relaxed grid">
    <form className="ui form">
        <div className="field">
            <label>Signature</label>
            <input onChange={this.onChange} value={this.state.signature} type="text" name="first-name" placeholder="First Name"/>
        </div>
        <div className="field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div className="field">
            <div className="ui checkbox">
            <input type="checkbox" className="hidden" />
            <label>I agree to the Terms and Conditions</label>
            </div>
        </div>
        <button onClick={this.onSave} className="ui button" type="submit">Submit</button>
    </form>
    </div>
      )  
    }
}

function mapStateToProps (state, ownProps) {
    return {
        signatures: state.signatures
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(signatureActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)