const Link = ({ docId, fullname, phone, address, onDelete, onUpdate }) => {
  return (
    <>
      <tr key={docId}>
        <td>{fullname}</td>
        <td>{phone}</td>
        <td>{address}</td>
      </tr>
    </>
  );
};

export default Link;
