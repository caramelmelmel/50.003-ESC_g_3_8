import React, { Component } from "react";
import { getAudits } from "../services/NewAudit";
import * as ReactBootStrap from "react-bootstrap";
import "../index.css";
import { Dropdown } from "react-bootstrap";
import { getTypes, getInstitutes } from "../services/Dropdownmenu";
import SeeUpdates from "../components/SeeUpdatesButton";
import ListGroup from "./ListGroup";
import * as FiIcons from "react-icons/fi";

class Tables extends Component {
  state = {
    audits: [], //initialise to empty array to allow time to get from server and ensure not undefined
    type: [],
    institute: [],
  };

  componentDidMount() {
    const type = [{ name: "All" }, ...getTypes()];
    const institute = [{ name: "All" }, ...getInstitutes()];
    this.setState({ audits: getAudits(), type, institute });
  }

  handleTypeSelect = (type) => {
    console.log(type);
    this.setState({ selectedType: type });
  };

  handleInstituteSelect = (institute) => {
    console.log(institute);
    this.setState({ selectedInstitution: institute });
  };

  render() {
    const { length: auditscount } = this.state.audits;
    const { selectedType, audits: allAudits, selectedInstitution } = this.state;

    if (auditscount == 0)
      return <p>There are no ongoing audits in the database.</p>;

    const filtered =
      selectedType && selectedType._id
        ? allAudits.filter((m) => m.type._id === selectedType._id)
        : allAudits;

    const filtered2 =
      selectedInstitution && selectedInstitution._id
        ? filtered.filter((m) => m.institution._id === selectedInstitution._id)
        : filtered;

    return (
      <div>
        <div className="ongoingtable">
          <div class="sentence">
            {" "}
            There are currently {filtered2.length} ongoing audits
          </div>

          <div class="dropdowntype">
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-type">
                <FiIcons.FiFilter size="10" style={{ marginRight: "5" }} />
                Filter Tenants
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Divider />
                <Dropdown.Header>By Type</Dropdown.Header>
                <ListGroup
                  items={this.state.type}
                  selectedItem={this.state.selectedType} //apply active class to selectedItem
                  onItemSelect={this.handleTypeSelect}
                />
                <Dropdown.Divider />

                <Dropdown.Header>By Institute</Dropdown.Header>
                <ListGroup
                  items={this.state.institute}
                  selectedItem={this.state.selectedInstitution}
                  onItemSelect={this.handleInstituteSelect}
                />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div>
          <ReactBootStrap.Table>
            <thead>
              <tr>
                <th>Tenants with Updates</th>
                <th>Audit Date</th>
                <th>See Updates from Tenants</th>
                <th>Performance Score</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered2.map((audit) => (
                <tr key={audit.id}>
                  <td>{audit.tenantname}</td>
                  <td>{audit.auditdate}</td>
                  <td>
                    <SeeUpdates key={audit.auditid} itemId={audit.auditid} />
                  </td>
                  <td>{audit.performancescore}</td>
                </tr>
              ))}
            </tbody>
          </ReactBootStrap.Table>
        </div>
      </div>
    );
  }
}

export default Tables;
//audits.map(RenderAudit)
{
  /*this.state.audits.map*/
}
