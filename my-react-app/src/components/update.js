import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

<Link to='/update'>
  <Table.Cell> 
     <Button>Update</Button>
   </Table.Cell>
</Link>

export default function Update() {
    const [catName, setCatName] = useState('');

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='Cat name' onChange={(e) => setCatName(e.target.value)}/>
                </Form.Field>
                <Button type='submit'>Update</Button>
            </Form>
        </div>
    )
}