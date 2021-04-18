import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import { Button } from "react-bootstrap";
import { getTenants, getpastAudits } from "../services/TenantInfo";
import { getAudits } from "../services/NewAudit";
import { Link } from "react-router-dom";


class CGHTenant extends Component {
  constructor(props){
      super(props);
      this.state = {
        institutechosen:this.props.institutechosen,
        tenants: getTenants(), 
        audits:getAudits(),
        pastaudits: getpastAudits(),
      };
  }
  

 

  render() {
    const { tenants, audits, pastaudits } = this.state;
 
      
    //tenants with institution CGH
    const CGHtenants = tenants.filter((m) => m.institution.name === this.props.institutechosen.activeTab);
    

    const storename = []
    const currentaudit = []
    const pastaudit = []
    for (var i = 0; i < CGHtenants.length; i++) {
        pastaudit.push("null");
        currentaudit.push("null");
        storename.push(CGHtenants[i]);
        
        for (var j = 0; j < audits.length; j++) {
            //console.log(CGHtenants[i].Tenant_id);

            if (CGHtenants[i].Tenant_id == audits[j].Tenant_id) {
                //currentaudit[performance].push([audits[j].performancescore, audits[j].noofnoncompliances]);
                currentaudit[i] = audits[j].performancescore;
                
            }
        }
        
        for (var z = 0; z < pastaudits.length; z++) {
            if (CGHtenants[i].Tenant_id === pastaudits[z].Tenant_id) {
                pastaudit[i] = pastaudits[z].audit_end_date;
            }
            
        }
            
           
        
    }
      
    
    //implement date functionality
      
   //rendering from 3 diff tables in database
    const stores = storename
        .map(item => {
            return (
                <tr key={item.Tenant_id }>
                    <Link to={{
                        pathname: `/tenant-profile/CGH/${item.Tenant_id}`,
                        state: {
                            Tenant_id: item.Tenant_id,
                            Anytenants: CGHtenants
                        },
                    }}>
                        <td>{item.store_name}</td>
                    </Link>
                </tr>
            )
        });
      
    const curren = currentaudit
    .map(item => {
        return (
            <tr key={item.Tenant_id }>
                <td>{item}</td>
                {/*<td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>*/}
            
                
            </tr>
        )
    });
      
    const past = pastaudit
    .map(item => {
        return (
            <tr key={item.Tenant_id } >
                <td>{item}</td>
            {/*<td></td>
                <td></td>
                <td></td>
                <td></td>*/}
            </tr>
        )
    });
   
    
    return (
      <ReactBootStrap.Table>
        <thead>
          <tr>
            <th>Tenant Details</th>
            <th>Current Audit Performance Score</th>
            <th>Previous Audit Date</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
            <tr>  
                 
                <td>{stores}</td>   
                <td>{curren}</td>
                <td>{past}</td>
                
                
                
                <td></td>
            </tr>
        
        </tbody>
      </ReactBootStrap.Table>
    );
  }
}

export default CGHTenant;
//tenant details should be a link to profile page

//institution: { _id: "1", name: "CGH" },
//add into empty array, all tennats with this.props.institutechosen.activeTab == tenants.institution.name
//render the tenants.store_name
//pass the tenants.Tenants_id as link and to other columns


//create an array to map

//current audit
//look under Audit_in_progress.Tenant_ID == tenant.Tenant_id
//Audit_in_progress.Audit_ID
//audit.noofnoncompliances
//audit.performancescore(+graph)

//past audit
//look under past_audits.Tenant_ID == tenant.Tenant_id
//pastaudits.Audit_ID
//pastaudits.date_recorded > 2 weeks of current date: button to create new audit


/*
{allTenants.map((tenant) => (
            <tr
              key={tenant.Tenant_id}
            >
              <Link
                to={{
                  pathname: `/tenant-profile/CGH/${tenant.Tenant_id}`,
                  state: {
                    Tenant_id: tenant.Tenant_id,
                  },
                }}
              >
                <td>{tenant.representative_name}</td>


*/