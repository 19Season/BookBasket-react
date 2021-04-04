import React, { Component } from 'react'
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Button } from '@material-ui/core';

export default class Addproduct extends Component {
    render() {
        return (
            <div>
                <div className="add">
                    <InputLabel>Title</InputLabel>
                    <Input type="text" name="title" required placeholder="Enter title of the book"/>
                    <InputLabel>Author</InputLabel>
                    <Input type="text" name="author" required placeholder="Enter author of the book"/>
                    <InputLabel>Price</InputLabel>
                    <Input type="text" name="price" required placeholder="Enter price of the book"/>
                    <InputLabel>Description</InputLabel>
                    <Input type="textarea" name="description" required placeholder="Enter description of the book"/>
                    <InputLabel>Type</InputLabel>
                    <select>
                        <option value="Sell"> Sell</option>
                        <option value="Borrow">Borrow</option>
                    </select>
                    <InputLabel>Image</InputLabel>
                    <Input type="file" name="image"/>
                    <br ></br>
                   <Button type="submit">Add</Button>
                </div>
            </div>
        )
    }
}
