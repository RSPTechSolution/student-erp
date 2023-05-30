import React, {useEffect} from 'react';
import './Table.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';





const Table = () => {
    const Navigate = useNavigate();
    const logout = async() => {
        await axios.get('http://localhost:4001/api/v1/logout')
        .then(res => {
            Navigate('/');
            toast.success("LogOut Successfully");
            }).catch(err => {
                console.log(err);
                });
        }
       
  return (
    <>
        <section>
            <div className="header-wrap">
                <h1>Fixed Table header</h1>
                <button className='btn-function' onClick={logout}>Logout</button>
                <button className='btn-function' onClick={logout}>Add Students</button>
            </div>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                    <tr>
                    <th>Code</th>
                    <th>Company</th>
                    <th>Price</th>
                    <th>Change</th>
                    <th>Change %</th>
                    </tr>
                </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                    <tr>
                    <td>AAC</td>
                    <td>AUSTRALIAN COMPANY </td>
                    <td>$1.38</td>
                    <td>+2.01</td>
                    <td>-0.36%</td>
                    </tr>
                    <tr>
                    <td>AAD</td>
                    <td>AUSENCO</td>
                    <td>$2.38</td>
                    <td>-0.01</td>
                    <td>-1.36%</td>
                    </tr>
                    <tr>
                    <td>AAX</td>
                    <td>ADELAIDE</td>
                    <td>$3.22</td>
                    <td>+0.01</td>
                    <td>+1.36%</td>
                    </tr>
                    <tr>
                    <td>XXD</td>
                    <td>ADITYA BIRLA</td>
                    <td>$1.02</td>
                    <td>-1.01</td>
                    <td>+2.36%</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </section>

    </>
  )
}

export default Table
