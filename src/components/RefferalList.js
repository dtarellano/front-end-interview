import React from 'react';
import ListItem from './ListItem.js';

const RefferalList = (props) => {
  const listLength = props.list.length;
  let list = ''
  if (listLength) {

    list = props.list.map((data, index) => {
      let expanded = true;
      let title = 'New Refferal';
      if (listLength > 1 && index < listLength - 1) {
        expanded = false;
        title = `${data.firstName} ${data.lastName}`
      }
      return <ListItem title={title} formData={data} key={index} expanded={expanded} index={index} handleChange={props.handleChange} handleDelete={props.handleDelete}/>
    })
  } else {
    list = null
  }
  // console.log(list)
  return(
    <React.Fragment>
      { list }
    </React.Fragment>
    
  )
}

export default RefferalList;