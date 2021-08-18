const UserInfoTableRow = ({ id, firstName, lastName, age, link, onClickLink}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td onClick={onClickLink}>{`${id}.${link}`}</td>
    </tr>
  )
}

export default UserInfoTableRow;
