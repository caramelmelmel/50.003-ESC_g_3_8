import React, { Component } from 'react';
import AddNCButton from './../components/AddNCButton';

class Category extends Component {
    state = {
        clickedItems: this.props.itemsChecked
      };


    render() { 
        const { id, item, handleCheck } = this.props;

        //console.log("PROPS :", this.props);
        //console.log("CLICKED ITEMS: ", this.state.clickedItems);

        let checked = false;
        if (this.state.clickedItems.includes(id)) checked = true;

        //console.log("CLICKED ITEMS IN CATEGORY: ", this.props.itemsChecked);
        

        return (                    
        <tr key={id}>
            <td className="checklist-body-style">{item}</td>
            <td><input type="checkbox" aria-label="Checkbox for following text input" onClick={handleCheck} defaultChecked={checked}/></td>
            <td>
                <AddNCButton key={id} itemId={id} clickedItems={this.props.itemsChecked}/>
            </td>
        </tr>);
    }
}
 
export default Category;