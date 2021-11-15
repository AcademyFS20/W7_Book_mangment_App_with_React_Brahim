import React, { Component } from 'react'
import 'bootswatch/dist/lumen/bootstrap.min.css'
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import Button from '../components/Button';


export default class Books extends Component {
    render() {
        return (

            <div>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>Identifier</th>
                            <th>Book name</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Nb of pages</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>
                                <Button inclination='btn-warning' text="update"/>
                                <Button inclination='btn-danger' text="delete"/>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Otto</td>
                            <td>
                                 <Button inclination='btn-warning' text="update"/>
                                <Button inclination='btn-danger' text="delete"/>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>
                                <Button inclination='btn-warning' text="update"/>
                                <Button inclination='btn-danger' text="delete"/>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}




