import React from 'react';
import { Download, ArrowUpRight, Grip, Home, CreditCard, Repeat, User } from 'lucide-react';

export const MobileAppScreen = ({ children, style }) => (
  <div style={{ 
    width: '320px', 
    height: '650px', 
    background: '#ffffff', 
    borderRadius: '40px', 
    padding: '24px',
    boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
    position: 'relative',
    color: '#333333',
    fontFamily: 'var(--font-sans)',
    overflow: 'hidden',
    ...style
  }}>
    {/* Notch */}
    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '24px', background: '#222', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', zIndex: 10 }}></div>
    {children}

    {/* Bottom Nav */}
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'white', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '0 16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--primary-blue)' }}><Home size={20} /><span style={{ fontSize: '10px' }}>Home</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#999' }}><CreditCard size={20} /><span style={{ fontSize: '10px' }}>Card</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#999' }}><Repeat size={20} /><span style={{ fontSize: '10px' }}>Transaction</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#999' }}><User size={20} /><span style={{ fontSize: '10px' }}>Profile</span></div>
    </div>
    <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '4px', background: '#ccc', borderRadius: '2px' }}></div>
  </div>
);

export const DashboardScreen = () => (
  <div style={{ paddingTop: '40px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
       <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ccc', backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100)', backgroundSize: 'cover' }} />
         <div>
           <div style={{ fontSize: '14px', fontWeight: '600' }}>Toni Kross</div>
           <div style={{ fontSize: '10px', color: '#999' }}>Good Morning</div>
         </div>
       </div>
    </div>
    
    <div style={{ fontSize: '28px', fontWeight: '700', color: 'var(--primary-blue)', marginBottom: '32px' }}>$42,295.00 USD</div>
    
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '32px' }}>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '48px', height: '48px', background: '#f5f5f5', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <Download size={20} color="#333" />
          </div>
          <span style={{ fontSize: '12px', fontWeight: '500' }}>Fund Transfer</span>
       </div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '48px', height: '48px', background: '#f5f5f5', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <ArrowUpRight size={20} color="#333" />
          </div>
          <span style={{ fontSize: '12px', fontWeight: '500' }}>Add Money</span>
       </div>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '48px', height: '48px', background: '#f5f5f5', borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
             <Grip size={20} color="#333" />
          </div>
          <span style={{ fontSize: '12px', fontWeight: '500' }}>More</span>
       </div>
    </div>

    <div>
      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Recent activity</h4>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
         <span style={{ fontSize: '10px', padding: '6px 12px', background: '#f5f5f5', color: '#333', borderRadius: '16px' }}>This Day</span>
         <span style={{ fontSize: '10px', padding: '6px 12px', background: 'var(--primary-blue)', color: 'white', borderRadius: '16px' }}>This Week</span>
         <span style={{ fontSize: '10px', padding: '6px 12px', background: '#f5f5f5', color: '#333', borderRadius: '16px' }}>This Month</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', background: '#8b5cf6', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                 <ArrowUpRight size={18} color="white" />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>To Jin <span style={{ color: '#999', fontWeight: 'normal' }}>• Work</span></div>
                <div style={{ fontSize: '12px', color: '#999' }}>12 Jun 2022</div>
              </div>
           </div>
           <div style={{ fontSize: '14px', fontWeight: '600' }}>-$59</div>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--primary-blue)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                 <Download size={18} color="white" />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>From Google <span style={{ color: '#999', fontWeight: 'normal' }}>• Salary</span></div>
                <div style={{ fontSize: '12px', color: '#999' }}>10 Jun 2022</div>
              </div>
           </div>
           <div style={{ fontSize: '14px', fontWeight: '600' }}>+$859</div>
        </div>
      </div>
    </div>
  </div>
);
