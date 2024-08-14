import './Dashboard.scss';
import { CUSTOMER_INFO } from '../../constants';
import SearchInput from '../../components/formComponents/searchInput/SearchInput';
import CustomerInfoRow from '../../components/customerInfoRow/CustomerInfoRow';
import Pagination from '../../components/formComponents/pagination/Pagination';
import NavMenu from '../../components/navMenu/NavMenu';
import sprite from '../../media/sprite.svg';
import { useState } from 'react';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboardMainContainer">
      <NavMenu />
      <main className="dashboardContent">
        <span>Hello Evano 👋🏼,</span>
        <svg onClick={toggleSidebar}>
          <use xlinkHref={`${sprite}#${isOpen ? 'x' : 'sidebar'}`}></use>
        </svg>
        <aside className={`sidebarMobile ${isOpen ? 'sidebarMobileOpen' : ''}`}>
          <NavMenu />
        </aside>
        <div className="allCustomersMainContainer">
          <div className="allCustomersHeader">
            <div>
              <span>All Customers</span>
              <span>Active Members</span>
            </div>
            <SearchInput />
          </div>
          <div className="allCustomersContainer">
            <div className="customerInfoTable">
              <CustomerInfoRow
                name="Name"
                company="Company"
                phone="Phone"
                email="Email"
                country="Country"
                status="Status"
              />
              <div>
                {CUSTOMER_INFO.map(customer => (
                  <CustomerInfoRow
                    key={`customer_${customer.name}`}
                    name={customer.name}
                    company={customer.company}
                    phone={customer.phone}
                    email={customer.email}
                    country={customer.country}
                    status={customer.status}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <span>Showing data 1 to 8 of 256K entries</span>
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
