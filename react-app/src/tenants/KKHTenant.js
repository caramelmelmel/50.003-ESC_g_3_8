import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import * as FcIcons from "react-icons/fc";
import { Button } from "react-bootstrap";
import { getTenants, getpastAudits } from "../services/TenantInfo";
import { getAudits } from "../services/NewAudit";
import { Link } from "react-router-dom";


class KKHTenant extends Component {
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
 
      
    //tenants with institution KKH
    const KKHtenants = tenants.filter((m) => m.institution.name === this.props.institutechosen.activeTab);
    

    const storename = []
    const currentaudit = []
    const pastaudit = []
    for (var i = 0; i < KKHtenants.length; i++) {
        pastaudit.push("null");
        currentaudit.push("null");
        storename.push(KKHtenants[i]);
        
        for (var j = 0; j < audits.length; j++) {

            if (KKHtenants[i].Tenant_id == audits[j].Tenant_id) {
                currentaudit[i] = audits[j].performancescore; 
            }
        }
        
        for (var z = 0; z < pastaudits.length; z++) {
            if (KKHtenants[i].Tenant_id === pastaudits[z].Tenant_id) {
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
                            Anytenants: KKHtenants
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
                
            </tr>
        )
    });
      
    const past = pastaudit
    .map(item => {
        return (
            <tr key={item.Tenant_id } >
                <td>{item}</td>

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

export default KKHTenant;