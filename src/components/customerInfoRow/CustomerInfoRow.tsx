import './CustomerInfoRow.scss';

type CustomerInfoRowProps = {
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: boolean | string;
};

const CustomerInfoRow = (props: CustomerInfoRowProps) => {
  const { name, company, phone, email, country, status } = props;

  return (
    <div className="customerInfoRowContainer">
      <span>{name}</span>
      <span>{company}</span>
      <span>{phone}</span>
      <span>{email}</span>
      <span>{country}</span>
      {typeof status === 'string' ? (
        <span>{status}</span>
      ) : (
        <button className={status ? 'activeButton' : 'inactiveButton'}>
          {status ? 'Active' : 'Inactive'}
        </button>
      )}
    </div>
  );
};

export default CustomerInfoRow;
