import React, { Component } from "react";
import { getAllChecklistItems } from "./../data/checklistFB";

class ChecklistFBStaff extends Component {
  /*state = {
    checklistFB: getAllChecklistItems(),
  };*/

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="checklist-header-style">Item Description</th>
            <th className="checklist-header-style">Check</th>
            <th></th>
          </tr>
          <tr>
            <th className="checklist-header-style">Professionalism</th>
          </tr>
        </thead>
        <tbody>
          {this.state.checklistFB.map((checklistItem) => (
            <tr>
              <td>{checklistItem.item}</td>
              <td>{checklistItem.checked}</td>
              <td>
                <button type="button" className="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-folder-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 3l.04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"></path>
                    <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"></path>
                  </svg>
                  Add NC
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ChecklistFBStaff;
