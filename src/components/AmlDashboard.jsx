import React from 'react';
import { Target, Calendar, MoreVertical, Search, Bell, Settings } from 'lucide-react';

const AmlDashboard = () => {
  return (
    <div style={{ background: '#ffffff', borderRadius: '12px', padding: '24px', color: '#333333', fontFamily: 'var(--font-sans)', width: '100%', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', position: 'relative' }}>
      
      {/* Sidebar Mock */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '60px', borderRight: '1px solid #eee', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0', gap: '24px' }}>
         <div style={{ width: '32px', height: '32px', background: 'var(--primary-blue)', borderRadius: '8px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>N7</div>
         <div style={{ width: '24px', height: '24px', color: 'var(--primary-blue)', background: '#e6f0ff', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Search size={16} /></div>
         <div style={{ color: '#999' }}><Bell size={20} /></div>
         <div style={{ color: '#999' }}><Settings size={20} /></div>
      </div>

      <div style={{ marginLeft: '60px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '4px' }}>AML Dashboard</h3>
        <p style={{ fontSize: '12px', color: 'var(--primary-blue)', marginBottom: '24px' }}>XXXXXXXX</p>

        <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
          
          {/* Card 1 */}
          <div style={{ flex: 1, border: '1px solid #ffe5e5', borderRadius: '8px', padding: '16px', borderLeft: '4px solid #ff4d4f', position: 'relative' }}>
            <MoreVertical size={16} color="#ccc" style={{ position: 'absolute', top: '16px', right: '16px' }} />
            <div style={{ fontSize: '36px', fontWeight: '600', color: '#ff4d4f' }}>450</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Total STR ( Suspicious Transaction Report)</div>
            <Target size={24} color="#ff4d4f" style={{ position: 'absolute', bottom: '16px', right: '16px' }} />
          </div>

          {/* Card 2 */}
          <div style={{ flex: 1, border: '1px solid #fff0b3', borderRadius: '8px', padding: '16px', borderLeft: '4px solid #faad14', position: 'relative' }}>
            <MoreVertical size={16} color="#ccc" style={{ position: 'absolute', top: '16px', right: '16px' }} />
            <div style={{ fontSize: '36px', fontWeight: '600', color: '#faad14' }}>3</div>
            <div style={{ fontSize: '12px', color: '#666' }}>Days Pending for AML Process</div>
            <Calendar size={24} color="#faad14" style={{ position: 'absolute', bottom: '16px', right: '16px' }} />
          </div>

        </div>

        <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
          
          {/* Chart 1 */}
          <div style={{ flex: 1, border: '1px solid #eee', borderRadius: '8px', padding: '16px', position: 'relative' }}>
             <MoreVertical size={16} color="#ccc" style={{ position: 'absolute', top: '16px', right: '16px' }} />
             <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '24px' }}>Suspicious Transactions as on 10-01-2022</div>
             
             {/* Mock Doughnut */}
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <div style={{ width: '160px', height: '160px', borderRadius: '50%', border: '24px solid #13c2c2', borderRightColor: '#1890ff', borderBottomColor: '#faad14', borderTopColor: '#ff4d4f', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   <div style={{ textAlign: 'center' }}>
                      <div style={{ fontWeight: '600', fontSize: '20px' }}>450</div>
                      <div style={{ fontSize: '10px', color: '#666' }}>STR</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Chart 2 */}
          <div style={{ flex: 1, border: '1px solid #eee', borderRadius: '8px', padding: '16px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
               <div style={{ fontWeight: '600', fontSize: '14px' }}>STR Summary</div>
               <div style={{ fontSize: '10px', color: '#999', border: '1px solid #eee', padding: '4px 8px', borderRadius: '4px' }}>Start date &rarr; End date</div>
             </div>
             
             {/* Mock Bar Chart */}
             <div style={{ display: 'flex', alignItems: 'flex-end', height: '180px', gap: '16px', justifyContent: 'center', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%' }}>
                  <div style={{ width: '16px', height: '60%', background: '#13c2c2', borderRadius: '2px 2px 0 0' }}></div>
                  <div style={{ width: '16px', height: '40%', background: '#faad14', borderRadius: '2px 2px 0 0' }}></div>
                </div>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%' }}>
                  <div style={{ width: '16px', height: '80%', background: '#13c2c2', borderRadius: '2px 2px 0 0' }}></div>
                  <div style={{ width: '16px', height: '30%', background: '#faad14', borderRadius: '2px 2px 0 0' }}></div>
                </div>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%' }}>
                  <div style={{ width: '16px', height: '50%', background: '#13c2c2', borderRadius: '2px 2px 0 0' }}></div>
                  <div style={{ width: '16px', height: '70%', background: '#faad14', borderRadius: '2px 2px 0 0' }}></div>
                </div>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '100%' }}>
                  <div style={{ width: '16px', height: '45%', background: '#13c2c2', borderRadius: '2px 2px 0 0' }}></div>
                  <div style={{ width: '16px', height: '90%', background: '#faad14', borderRadius: '2px 2px 0 0' }}></div>
                </div>
             </div>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '8px', fontSize: '10px', color: '#999' }}>
               <span>5 Nov 2021</span>
               <span>6 Nov 2021</span>
               <span>7 Nov 2021</span>
               <span>8 Nov 2021</span>
             </div>
          </div>
        </div>

        {/* Table */}
        <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
           <div style={{ padding: '16px', fontWeight: '600', fontSize: '14px', borderBottom: '1px solid #eee' }}>AML Report</div>
           <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
              <thead>
                <tr style={{ background: 'var(--primary-blue)', color: 'white', textAlign: 'left' }}>
                   <th style={{ padding: '12px' }}>AML Case ID</th>
                   <th style={{ padding: '12px' }}>Branch ID</th>
                   <th style={{ padding: '12px' }}>Identified Date</th>
                   <th style={{ padding: '12px' }}>Amount</th>
                   <th style={{ padding: '12px' }}>Type</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '225', branch: 'Branch 1', date: '02-01-2022', amt: '70', type: '70' },
                  { id: '180', branch: 'Branch 3', date: '02-01-2022', amt: '160', type: '160' },
                  { id: '205', branch: 'Branch 4', date: '02-01-2022', amt: '65', type: '65' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px' }}>{row.id}</td>
                    <td style={{ padding: '12px' }}>{row.branch}</td>
                    <td style={{ padding: '12px' }}>{row.date}</td>
                    <td style={{ padding: '12px' }}>{row.amt}</td>
                    <td style={{ padding: '12px' }}>{row.type}</td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
      </div>

    </div>
  );
};

export default AmlDashboard;
