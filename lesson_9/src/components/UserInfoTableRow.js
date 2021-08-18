const UserInfoTableRow = ({ id, firstName, lastName, age, link, onClickLink}) => {
  const handleClickLink = () => onClickLink(firstName);

  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td onClick={handleClickLink}>{`${id}.${link}`}</td>
    </tr>
  )
}

export default UserInfoTableRow;
