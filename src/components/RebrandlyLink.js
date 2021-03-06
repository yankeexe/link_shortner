import React, { Component } from 'react';
import Table from 'material-ui/Table/Table';
import { TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import TableBody from 'material-ui/Table/TableBody';
import TableRowColumn from 'material-ui/Table/TableRowColumn';
import EditIcon from 'material-ui/svg-icons/image/edit'; 
import Header from './Header';
import IconButton from 'material-ui/IconButton/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
class RebrandlyLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Table>
                    <TableHeader displaySelectAll={false} >
                        <TableRow>
                            <TableHeaderColumn> Title </TableHeaderColumn>
                            <TableHeaderColumn> Destination </TableHeaderColumn>
                            <TableHeaderColumn> Short URL </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody  displayRowCheckbox={false}>
                        {
                            this.state.links.map((link) => {
                                return (
                                    <TableRow key={link.id}>
                                        <TableRowColumn>{link.title}</TableRowColumn>
                                        <TableRowColumn>{link.destination}</TableRowColumn>
                                        <TableRowColumn> {link.shortUrl}</TableRowColumn>
                                        <TableRowColumn>  
                                            {/* Edit Button                                      */}
                                            <IconButton
                                            onClick = {() => this.props.history.push(`/links/${link.id}/edit`)} >
                                            <EditIcon />
                                            </IconButton>
                                            {/* Delete Button */}
                                            <IconButton
                                                onClick = {() => this.deleteLink(link.id)}>
                                                <DeleteIcon />
                                            </IconButton>

                                       </TableRowColumn>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        );
    }

    componentWillMount() {
        fetch('https://api.rebrandly.com/v1/links',
            {
                headers: {
                    apikey: sessionStorage.getItem('apikey')
                }
            })
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        this.setState({
                            links: data
                        })
                    })
                }
                else {
                    alert(res.statusText)
                }
            })

    }
}

export default RebrandlyLink;