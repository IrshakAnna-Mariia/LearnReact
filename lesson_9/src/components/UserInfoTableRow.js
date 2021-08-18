import useStyle from '../styles';

const UserInfoTableRow = ({ id, firstName, lastName, age, link, onClickLink}) => {
  const classes = useStyle();

  const handleClickLink = () => onClickLink(id);

  return (
    <tr>
      <td className={classes.tableCell}>{id}</td>
      <td className={classes.tableCell}>{firstName}</td>
      <td className={classes.tableCell}>{lastName}</td>
      <td className={classes.tableCell}>{age}</td>
      <td className={classes.tableCell} onClick={handleClickLink}>{link}</td>
    </tr>
  )
}

export default UserInfoTableRow;
