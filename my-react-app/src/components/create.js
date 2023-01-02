import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import React, { useState } from 'react';

function Create() {
    const [firstName, setFirstName] = useState('');

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='Cat name' />
                </Form.Field>
        </div>
    )
}

const postCats = () => {
        console.log(firstName);
}

class CatStory extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Cat name' placeholder='Cat name' />
          
          <Form.Select
            fluid
            options={options}
            
          />
        </Form.Group>
        <Form.Group inline>
          <label>Size</label>
          <Form.Radio
            label='Small'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Medium'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Large'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Enter your funny cat story here' />
        <Form.Button onClick={postCats} type='submit'>Submit Story</Form.Button>
      </Form>
    )
  }
}

export default CatStory;
