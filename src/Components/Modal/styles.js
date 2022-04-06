const styles = (theme) => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    //border: '2px solid #000',
    boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
  },
  header: {
    backgroundColor: theme.color.primary,
    color: theme.color.textColor,
    padding: theme.spacing(2),
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.color.textColor,
    fontWeight: 700,
    textTransform: 'capitalize',
  },
  content: {
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '10px',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '25px',
  }
});

export default styles;