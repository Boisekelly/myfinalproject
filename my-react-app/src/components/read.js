import React from 'react';
import { Table } from 'semantic-ui-react'

  const getData = () => {
    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}

const onDelete = (id) => {
    axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
 .then(() => {
    getData();
})
}


export default function Read() {
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>NCat's Name</Table.HeaderCell>
                        <Table.HeaderCell>Humorous Story</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Ragu</Table.Cell>
                        <Table.Cell>Bit Pretty's tail while she was sleeping</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <Table.Cell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
</Table.Cell>


        </div>
    )
}