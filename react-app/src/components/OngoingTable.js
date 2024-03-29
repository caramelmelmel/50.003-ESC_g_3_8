import React, { Component } from "react";
import { audits, getAudits } from "../services/NewAudit";
import * as ReactBootStrap from "react-bootstrap";
import "../index.css";
import { Dropdown } from "react-bootstrap";
import { getTypes, getInstitutes } from "../services/Dropdownmenu";
import ListGroup from "./ListGroup";
import * as FiIcons from "react-icons/fi";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import * as AiIcons from "react-icons/ai";


class OngoingTables extends Component {
  state = {
    audits: [], //initialise to empty array to allow time to get from server and ensure not undefined
    type: [],
    institute: [],
    isLoaded: false,
  };

  componentDidMount() {
    const type = [{ name: "All" }, ...getTypes()];
    const institute = [{ name: "All" }, ...getInstitutes()];

    /*fetch("http://localhost:8080/audit/ongoingaudits", {
      method: "GET",
      mode: "cors",
      headers: { jwt_token: localStorage.token }, 
       //{ staff_email: localStorage.getItem("staff_email") } //ongoing audits is the whole json right? why need store name
    }).then(response => {
      const audits = response.data
      this.setState({audits})
      console.log(response.status)

      if (!response.status.ok) {
        console.log("fail to send audit");

      }
      else {
        console.log("success");
        this.props.history.push("/audits-staff");
      }
    })*/
    
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
    const { isLoaded, selectedType, audits: allAudits, selectedInstitution } = this.state;

    /*if (!isLoaded)
      return <div>Loading...</div>;
*/

    if (auditscount == 0)
      return <p>There are no ongoing audits in the database.</p>;

    const ongoingAudits = allAudits.filter((m) => m.noncompliances.length > 0);
    //allAudits.filter((m) => console.log(m.noncompliances.length));

    const ongoingAudits2 = [];
    for (var i = 0; i < ongoingAudits.length; i++) {
      console.log(ongoingAudits[i]);
      //check if all resolved is true
      const tryresolved =[];
      for (var x = 0; x < ongoingAudits[i].noncompliances.length; x++) {
        tryresolved.push(ongoingAudits[i].noncompliances[x].resolved);
        
      }
      console.log(tryresolved);
      if (tryresolved.includes(false) === true) {
        ongoingAudits2.push(ongoingAudits[i]);
      }
      else {
        
      }
      
    }
    console.log(ongoingAudits2);
    //post ongoinAudit2 to server
    


      const filtered =
        selectedType && selectedType._id
          ? ongoingAudits2.filter((m) => m.type._id === selectedType._id)
          : ongoingAudits2;
      //console.log(ongoingAudits);

      const filtered2 =
        selectedInstitution && selectedInstitution._id
          ? filtered.filter((m) => m.institution._id === selectedInstitution._id)
          : filtered;
      //console.log(this.state.audits);

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
                    key={this.state.type._id}
                    items={this.state.type}
                    selectedItem={this.state.selectedType} //apply active class to selectedItem
                    onItemSelect={this.handleTypeSelect}
                  />
                  <Dropdown.Divider />

                  <Dropdown.Header>By Institute</Dropdown.Header>
                  <ListGroup
                    key={this.state.institute._id}
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
                  <tr key={audit.store_name}>
                    <td>{audit.store_name}</td>
                    <td>{audit.date_recorded}</td>
                    <td style={{alignContent: "center"}}>

                      <Link to={{pathname: '/see-updates', state: {store_name: audit.store_name}}}>
                        <button className="btn btn-warning">
                          <AiIcons.AiOutlineFolder/>
                        </button>
                          <h4 style={{display: "inline-block"}}>
                            <span className="badge badge-danger">
                              3
                            </span>
                          </h4>
                      </Link>
                    </td>
                    <td>{audit.audit_score}</td>
                  </tr>
                ))}
              </tbody>
            </ReactBootStrap.Table>
          </div>
        </div>
      )
    }
  }


export default OngoingTables;
//audit.noncompliances
//                      <SeeUpdatesButton key={audit.store_name} itemId={audit.store_name} />
//<SeeUpdatesButton key={audit.store_name} itemId={audit.store_name} />
