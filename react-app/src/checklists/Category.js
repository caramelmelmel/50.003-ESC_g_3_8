import React, { Component } from 'react';
import AddNCButton from './../components/AddNCButton';

class Category extends Component {
    render() { 
        const { id, item, handleCheck, itemsChecked } = this.props;
        return (                    
        <tr key={id}>
            <td className="checklist-body-style">{item}</td>
            <td><input type="checkbox" aria-label="Checkbox for following text input" onClick={handleCheck}/></td>
            <td>
                <AddNCButton key={id} itemId={id} itemsChecked={itemsChecked}/>
            </td>
        </tr>);
    }
}
 
export default Category;