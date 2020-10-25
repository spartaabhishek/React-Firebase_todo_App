import {List, ListItem, ListItemAvatar, ListItemText,Avatar} from '@material-ui/core'
import React from 'react'
import './Todo.css'

export default function Todo(props) {
    return (
        
        <List className="todo_list">
        
            <ListItem>
            <ListItemAvatar>
            <Avatar>
                
            </Avatar>
            </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Dummy Deadline"></ListItemText>
            </ListItem>
        </List>
    )
}
  