
//unique tenant id 
export const tenants = [
    {
        Tenant_id: "1",
        representative_name: "Bobby",
        representative_email:"Bobby@gmail.com",
        lease_end:"2020-01-03T19:04:28.809Z",
        store_name:"Subway",
        category_ID: { _id: "1", name: "Food & Beverage Tenant" },
        location: "#01-35",
        institution: { _id: "1", name: "CGH" },
        description:"input from tenant interface",
      },

      {
        Tenant_id: "2",
        representative_name: "Sandy",
        representative_email:"Sandyy@gmail.com",
        lease_end:"2020-01-03T19:04:28.809Z",
        store_name:"Kopitiam",
        category_ID: { _id: "1", name: "Food & Beverage Tenant" },
        location: "#02-20",
        institution: { _id: "1", name: "CGH" },
        description:"input from tenant interface",
    },
    {
        Tenant_id: "3",
        representative_name: "Tom",
        representative_email:"Tom@gmail.com",
        lease_end:"2020-01-03T19:04:28.809Z",
        store_name:"Kopitiam",
        category_ID: { _id: "1", name: "Food & Beverage Tenant" },
        location: "#02-20",
        institution: { _id: "2", name: "SGH" },
        description:"input from tenant interface",
      },
    
      {
        Tenant_id: "4",
        representative_name: "Tom",
        representative_email:"Tom@gmail.com",
        lease_end:"2020-01-03T19:04:28.809Z",
        store_name:"ToastBox",
        category_ID: { _id: "1", name: "Food & Beverage Tenant" },
        location: "#02-20",
        institution: { _id: "6", name: "OCH" },
        description:"input from tenant interface",
    },
    {
        Tenant_id: "5",
        representative_name: "Topy",
        representative_email:"Topy@gmail.com",
        lease_end:"2020-01-03T19:04:28.809Z",
        store_name:"Popular",
        category_ID: { _id: "2", name: "Non Food & Beverage Tenant" },
        location: "#02-20",
        institution: { _id: "1", name: "CGH" },
        description:"input from tenant interface",
    },
    
]

export function getTenants() {
    return tenants;
  }
  
export function getTenant(id) {
    return tenants.find((m) => m._id === id);
}



//once all non compliances have resolved variable == true, move to another table 
export const pastaudits = [
    {
        Audit_id: "10",
        audit_end_date: "19",
        Tenant_id: "1",
        institution: { _id: "1", name: "CGH" },
    
    },

    /*{
        Audit_id: "13",
        audit_end_date: "20",
        Tenant_id: "2",
        institution: { _id: "1", name: "CGH" },
    
    },*/

    {
        Audit_id: "11",
        audit_end_date: "21",
        Tenant_id: "5",
        institution: { _id: "1", name: "CGH" },
    
    }

]

export function getpastAudits() {
    return pastaudits;
  }