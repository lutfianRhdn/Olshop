import React from 'react'
import { connect } from 'react-redux'
import AdminLayout from '../layouts/adminLayout'
export const Dashboard = (props) => {
     return (
          <div>
               <AdminLayout header="Dashboard" >
                    <h1>asiap</h1>
               </AdminLayout>
          </div>
     )
}

const mapStateToProps = (state) => ({
     
})

const mapDispatchToProps = {
     
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
